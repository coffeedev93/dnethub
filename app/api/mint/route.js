import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { 
    AccountId, 
    PrivateKey, 
    Client, 
    Hbar, 
    TokenMintTransaction, 
    TokenAirdropTransaction,
    NftId,
    TokenId,
} from "@hashgraph/sdk";

const tableName = "domains"
const supabase = createClient(
    process.env.SUPABASE_URL, 
    process.env.SUPABASE_ANON
);

const treasuryId = process.env.NFT_TREASURY_ID;
const treasuryKey = PrivateKey.fromStringECDSA(process.env.NFT_TREASURY_KEY);
const supplyKey = PrivateKey.fromStringECDSA(process.env.NFT_SUPPLY_KEY);
const tokenId = process.env.NFT_TOKEN_ID;

const network = "testnet"
const client = Client
        .forNetwork(network)
        .setOperator(treasuryId, treasuryKey);

async function mintAndTransfer(data) {
    const {ipfsUri, receiverId, domain, serial} = data;
    // upload json to ipfs in client

    // mint NFT
    client.setDefaultMaxTransactionFee(new Hbar(100));
    client.setDefaultMaxQueryPayment(new Hbar(50));
    
    const CID = [Buffer.from(ipfsUri)]
    const mintTx = new TokenMintTransaction()
		.setTokenId(tokenId)
		.setMetadata(CID)
		.freezeWith(client);
	const mintSign = await mintTx.sign(supplyKey);
	const mintSubmit = await mintSign.execute(client);
	const mintRx = await mintSubmit.getReceipt(client);
    console.log(`- Minted NFTs: ${mintRx.status}`);

    // airdrop NFT
    const transaction = new TokenAirdropTransaction()
        .addNftTransfer(
            `${tokenId}/${serial}`, 
            treasuryId, 
            receiverId
        )
        .freezeWith(client);        

    const signedtx = await transaction.sign(treasuryKey); 
    const txResponse = await signedtx.execute(client);
    const receipt = await txResponse.getReceipt(client);
    console.log(`- Airdrop: ${receipt.status}`);

    // update supabase
    const { error } = await supabase
        .from("domains")
        .upsert({ domain })

    console.log(`- Supabase error: ${error}`);

    return { error }
}

export async function POST(req) {
    const data = await req.json();
    const result = await mintAndTransfer(data)
    return NextResponse.json(result)
}
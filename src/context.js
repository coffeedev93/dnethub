import React, { createContext, useState, useEffect, useContext } from "react";

import { HashConnect, HashConnectConnectionState } from "hashconnect";
import { LedgerId } from "@hashgraph/sdk";
import { getAccountInfo, getAccountNfts } from "./service";


const appMetadata = {
    name: "Webhub",
    description: "Use your HNS domains in Web2",
    icons: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Reddot.svg/603px-Reddot.svg.png?20140718195605",
    ],
    url: "https://hbar.im",
};

const DataContext = createContext();
export const useApp = () => useContext(DataContext);

const AppProvider = (props) => {
	const [accountData, setAccountData] = useState(null);
    const [pairingData, setPairingData] = useState(null);
    const [loaderMessage, setLoaderMessage] = useState(null);

    const [hashconnect, setHashconnect] = useState(null);
    const [connectionStatus, setConnectionStatus] = useState(
        HashConnectConnectionState.Disconnected
    );

    useEffect(() => {
        init();
    }, []);

	// useEffect(() => {
	// 	if (accountData === null)
	// 		getAccountData();
	// }, [pairingData])

    const init = async () => {
        //create the hashconnect instance
        const hashconnect = new HashConnect(
            LedgerId.TESTNET,
            process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID,
            appMetadata,
            true
        );

        //register events
        hashconnect.pairingEvent.on((newPairing) => {
            setPairingData(newPairing);
        });

        hashconnect.disconnectionEvent.on((data) => {
            setPairingData(null);
        });

        hashconnect.connectionStatusChangeEvent.on((connectionStatus) => {
            setConnectionStatus(connectionStatus);
        });

        //initialize
        await hashconnect.init();

        setHashconnect(hashconnect);
    };

    const disconnect = () => {
        hashconnect.disconnect();
    };

    const connect = async () => {
        await hashconnect.openPairingModal();
    };

    const updateUIValues = async () => {
        console.log("fn updateUIValues");
    };

	const getAccountData = async () => {
		// const network = currentNetwork;
		// const topic = walletService.saveData.topic;
		const accountId = pairingData.accountIds[0];

		// const provider = walletService.hashconnect.getProvider(network, topic, accountId);
		// const signer = walletService.hashconnect.getSigner(provider);
		// setSigner(signer);
		// setProvider(provider);

		const _accountInfo = await getAccountInfo(accountId);
		//setAccountInfo(_accountInfo);

		const _accountNfts = await getAccountNfts(accountId);
		//setAccountNfts(_accountNfts);

		// const _accountTokens = _accountInfo.balance.tokens.map(t => getTokenInfo(t.token_id))
		// Promise.all(_accountTokens).then(result => {
		// 	setAccountTokens(result)
		// })
		
		setAccountData({
			info: _accountInfo,
			nfts: _accountNfts
		})
	}

    const data = {
		accountData,
        pairingData,
        connectionStatus,
        loaderMessage,
    };

    const fn = {
        connect,
        disconnect,
        setLoaderMessage,
    };

    return (
        <DataContext.Provider value={{ data, fn }}>
            {props.children}
        </DataContext.Provider>
    );
};

export default AppProvider;

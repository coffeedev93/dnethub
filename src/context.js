import React, { createContext, useState, useEffect, useContext } from "react";

import { HashConnect, HashConnectConnectionState } from "hashconnect";
import { LedgerId } from "@hashgraph/sdk";
import { getAccountInfo, getAccountNfts, getDomainData } from "./service";
import { AUTHORIZED_COLLECTIONS, sleep } from "./lib/myutils";


const appMetadata = {
    name: "DNetHub",
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
	const [accountNfts, setAccountNfts] = useState(null);
    const [pairingData, setPairingData] = useState(null);
    const [loaderMessage, setLoaderMessage] = useState(null);
    const [currentDomainData, setCurrentDomainData] = useState(null);

    const [hashconnect, setHashconnect] = useState(null);
    const [connectionStatus, setConnectionStatus] = useState(
        HashConnectConnectionState.Disconnected
    );

    useEffect(() => {
        init();
    }, []);

	useEffect(() => {
        if (!pairingData) return;

		if (accountData === null)
			getAccountData();
	}, [pairingData])

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
            setAccountNfts(null);
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

    const getAccountData = async () => {
        console.log("getting nfts...")
        try {
            //const accountId = "0.0.5280976" // account with demo nfts
            const accountId = pairingData.accountIds[0];
            const _accountInfo = null //await getAccountInfo(accountId);
            const _accountNfts = await getAccountNfts(accountId);

            const filteredItems = _accountNfts.nfts.filter(t => AUTHORIZED_COLLECTIONS.includes(t.token_id))

            if (filteredItems.length === 0) return;

            let result = [];
            let len = filteredItems.length;
            let count = 0;

            const fn = async () => {
                const item = filteredItems[count];
                const metadataIpfs = atob(item.metadata);
                const ipfsHash = metadataIpfs.replace("ipfs://", "");

                const response = await fetch(`https://${ipfsHash}.ipfs.dweb.link`);
                const data = await response.json();

                result[count] = { ...item, data }
                count++;
                await sleep(100)

                if (count < len) {
                    await fn();
                } else {
                    return;
                }
            };

            await fn();
            console.log(result)
            setAccountNfts(result);

        } catch (error) {
            console.log("An error ocurred in getAccountData", error);
        }
    }

    const getCurrentDomainData = async (domain) => {
        setLoaderMessage("Getting data...");
        const response = await getDomainData(domain, "data");
        setLoaderMessage(null);
        return response;
    }

    const getCurrentDomainTheme = async (domain) => {
        setLoaderMessage("Getting data...");
        const response = await getDomainData(domain, "theme");
        setLoaderMessage(null);
        return response;
    }

    const data = {
		accountData,
        accountNfts,
        pairingData,
        connectionStatus,
        loaderMessage,
    };

    const fn = {
        connect,
        disconnect,
        setLoaderMessage,
        getCurrentDomainData,
        getCurrentDomainTheme
    };

    return (
        <DataContext.Provider value={{ data, fn }}>
            {props.children}
        </DataContext.Provider>
    );
};

export default AppProvider;

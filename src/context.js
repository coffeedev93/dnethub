import React, { createContext, useState, useEffect, useContext } from "react";

const DataContext = createContext();
export const useApp = () => useContext(DataContext);

const AppProvider = (props) => {
	const [address, setAddress] = useState(null);
    const [loaderMessage, setLoaderMessage] = useState(null);

    useEffect(() => {

    }, [address]);

    const connectWalletAccount = async () => {
        console.log("init accounts...");
    };

	const updateUIValues = async () => {
		console.log("fn updateUIValues");
	}

	const getAccountData = async (address) => { 
		console.log("fn getAccountData");
	}


    const data = {
		address,
        loaderMessage
    };

    const fn = {
		connectWalletAccount,
        setLoaderMessage,
    };

    return (
        <DataContext.Provider value={{ data, fn }}>
            {props.children}
        </DataContext.Provider>
    );
};

export default AppProvider;
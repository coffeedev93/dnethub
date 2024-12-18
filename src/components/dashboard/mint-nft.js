import { getDomainData } from "@/src/service";
import { useRef, useState } from "react";

export default function MintNftDomain() { 
    const [isLoading, setIsLoading] = useState(false);
    const [isAvailable, setIsAvailable] = useState(false);
    const [searchStr, setSearchStr] = useState("");
    const searchInput = useRef();
    
    const checkDomain = async () => {
        const sname = searchInput.current.value;

        if (sname.trim() === "") {
            isAvailable(false);
            setSearchStr("")
            return;
        }

        setIsLoading(true);
        const domain = `${sname}-testnet.hbar`;
        const response = await getDomainData(domain, "domain");
        console.log(response)

        if (response.data === null) {
            setIsAvailable(true);
        }
        else {
            setIsAvailable(false);
        }

        setSearchStr(domain);
        setIsLoading(false);
    }

    return (
        <>
            <div className="flex pb-4">
                <input 
                    placeholder="Check domain availability"
                    ref={searchInput}
                    type="text"
                    className="bg-white rounded-none rounded-l-lg border block flex-1 min-w-0 w-full text-sm p-2.5 border-gray-300 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500" 
                />
                <div className="flex items-center justify-center w-36 bg-pink-200 font-mono font-semibold">
                    {"-tesnet.hbar"}
                </div>
                <button 
                    onClick={() => checkDomain()}
                    className="inline-flex items-center px-3 text-sm border-l-0 border-pink-300 rounded-none rounded-r-lg text-gray-100 bg-pink-600 dark:bg-pink-600 dark:text-pink-400 dark:border-pink-600"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </button>
            </div>
            {
                isLoading && <div className="mb-4 text-gray-500">Loading info...</div>
            }
            {
                !isAvailable ? (
                    <div className="w-full bg-red-100 border border-red-300 px-3 py-1 rounded-md">
                        <div>Domain <span className="font-semibold">{searchStr}</span> not Available!</div>
                    </div>
                ) : (
                    <div className="flex justify-between items-center w-full bg-teal-100 border border-teal-300 px-3 py-1 rounded-md">
                        <div>The Domain <span className="font-semibold">{searchStr}</span>  is Available!</div>
                        <button className="py-1 px-2 text-white bg-teal-500 rounded-md">
                            Get Domain NFT
                        </button>
                    </div>
                )
            }
        </>
    )
}
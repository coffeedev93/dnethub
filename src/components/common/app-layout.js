"use client"

import { useApp } from "@/src/context";
import { IconUser } from "@tabler/icons-react";
import Link from "next/link";

const Navigation = () => {
    const { fn: {address: accountAddress} } = useApp();

    return (
        <header className="bg-slate-800 text-gray-100 p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <Link href={"/"}>
                    <h1 className="text-2xl font-bold">IM Hbar</h1>
                </Link>
                <nav className="flex space-x-4">
                    <Link href="/p/jondoe.hbar" className="flex items-center space-x-2 text-foreground hover:text-primary">
                        <IconUser className="w-5 h-5" />
                        <span className="hidden sm:inline">Profile</span>
                    </Link>
                    {accountAddress ? (
                        <button
                            onClick={() => console.log("disconnect")}
                        >
                            <div className="font-mono">
                                {`${accountAddress.slice(0, 5)}..${accountAddress.slice(accountAddress.length - 4)}`}
                            </div>
                        </button>
                    ) : (
                        <button
                            onClick={() => console.log("connect")}
                            className="border border-gray-500 bg-gray-400 text-center rounded-md py-1 px-6"
                        >
                            Connect
                        </button>
                    )}                    
                </nav>
            </div>
        </header>
    )
};

const AppLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navigation />
            { children }
        </div>
    )
}

export default AppLayout
"use client"

import { useApp } from "@/src/context";
import { IconGraph, IconHome, IconShip, IconUser, IconUserBolt, IconUserCode } from "@tabler/icons-react";
import Link from "next/link";

const LinksBar = () => {
    const protocol = process.env.NEXT_PUBLIC_ROOT_PROTOCOL;
    const rootHost = process.env.NEXT_PUBLIC_ROOT_DOMAIN;

    return (
        <div className="max-w-4xl mx-auto flex items-center gap-4 pt-4">
            <Link href={`${protocol}://${rootHost}`} className="flex items-center space-x-1 text-foreground hover:text-primary">
                <IconHome className="w-5 h-5" />
                <span className="hidden sm:inline">Landing</span>
            </Link>
            <Link href={`${protocol}://app.${rootHost}/onboard`} className="flex items-center space-x-1 text-foreground hover:text-primary">
                <IconShip className="w-5 h-5" />
                <span className="hidden sm:inline">Onboard</span>
            </Link>
            <Link href={`${protocol}://app.${rootHost}`} className="flex items-center space-x-1 text-foreground hover:text-primary">
                <IconGraph className="w-5 h-5" />
                <span className="hidden sm:inline">Dashboard</span>
            </Link>
            <Link href={`${protocol}://joedoe.${rootHost}`} className="flex items-center space-x-1 text-foreground hover:text-primary">
                <IconUserCode className="w-5 h-5" />
                <span className="hidden sm:inline">Profile</span>
            </Link>
        </div>
    )
}

const Navigation = () => {
    const { fn: {address: accountAddress} } = useApp();

    return (
        <header className="bg-slate-800 text-gray-100 p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <Link href={"/"}>
                    <h1 className="text-2xl font-bold">IM Hbar</h1>
                </Link>
                <nav className="flex space-x-4">
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
            <LinksBar />
            { children }
        </div>
    )
}

export default AppLayout
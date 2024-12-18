"use client";

import { useState } from "react";
import {
    IconArrowsRightLeft,
    IconBrandDiscord,
    IconBrandMedium,
    IconBrandTelegram,
    IconBrandTwitter,
    IconBrandX,
    IconBrandYoutube,
    IconBrandYoutubeFilled,
    IconCheckbox,
    IconClock,
    IconCoinBitcoin,
    IconCoinMonero,
    IconCopy,
    IconLink,
    IconQrcode,
    IconWallet,
    IconWorldWww,
} from "@tabler/icons-react";

const splitHexAddress = (addr) => {
    if (!addr) return "0x0";
    return `${addr.slice(0, 6)}...${addr.slice(addr.length - 4)}`;
};

const data = {
    generalInfo: {
        bio: "Buenos Aires es la gran capital cosmopolita de Argentina. Su centro es la Plaza de Mayo, rodeada de imponentes edificios del siglo XIX, incluida la Casa Rosada, el icónico palacio presidencial que tiene varios balcones.",
        name: "Buenos Aires",
        title: "Capital of Argentina",
    },
    socialLinks: {
        medium: "",
        discord: "https://discord.com",
        twitter: "https://x.com",
        youtube: "https://youtu.be",
        telegram: "https://t.me",
    },
    walletAddresses: [
        {
            address: "0x59A4Fe0499b27774e617aDeCE173BD2fE1Dd5c08",
            network: "Ethereum",
        },
        {
            address: "0x59A4Fe0499b27774e617aDeCE173BD2fE1Dd5c08",
            network: "Polygon",
        },
    ],
    customMediaLinks: [
        {
            link: "https://youtu.be/EUEujSP1MRA",
            title: "First Youtube Video",
            platform: "YouTube",
            username: "luisitocomunica",
        },
    ],
    hasAnalytics: false,
};

const theme = {
    selectedCard: "bg-white rounded-md border border-black shadow-md shadow-black",
    selectedBanner: "bg-gradient-to-r from-cyan-500 to-blue-500",
};

const mainImage =
    "https://gateway.pinata.cloud/ipfs/bafybeieiaipdtpmbp64rs5kgouncn6bms2k2gz6kgdu3qremp74nz4tw3u";

export default function Profile({ id }) {
    const [activeTab, setActiveTab] = useState("active");

    return (
        <main className="relative flex-1 p-6 overflow-auto">
            <div class={`absolute top-0 left-0 w-full h-48 ${theme.selectedBanner}`}></div>
            <div className="relative max-w-4xl mx-auto pt-16">
                <div className={`p-4 mb-6 ${theme.selectedCard}`}>
                    <div className="flex gap-4">
                        <img
                            src={mainImage}
                            className="w-48 h-48 rounded-md"
                        />
                        <div className="">
                            <div>
                                <p className="font-bold text-3xl">
                                    {data.generalInfo.name}
                                </p>
                            </div>
                            <div className="flex items-center gap-3 my-2 text-gray-500">
                                {/* <IconWallet className="w-4 h-4" /> */}
                                <span>{data.generalInfo.title}</span>
                            </div>
                            <div>
                                <p>
                                    <span>
                                        {data.generalInfo.bio}
                                    </span>
                                </p>
                            </div>
                            <div className="flex items-center justify-start gap-3 mt-4">
                                <div className="bg-slate-900 rounded-md p-2">
                                    <IconBrandX className="w-8 h-8 text-white" />
                                </div>
                                <div className="bg-slate-900 rounded-md p-2">
                                    <IconBrandDiscord className="w-8 h-8 text-white" />
                                </div>
                                <div className="bg-slate-900 rounded-md p-2">
                                    <IconBrandTelegram className="w-8 h-8 text-white" />
                                </div>
                                <div className="bg-slate-900 rounded-md p-2">
                                    <IconBrandMedium className="w-8 h-8 text-white" />
                                </div>
                                <div className="bg-slate-900 rounded-md p-2">
                                    <IconBrandYoutube className="w-8 h-8 text-white" />
                                </div>
                                <div className="bg-slate-900 rounded-md p-2">
                                    <IconWorldWww className="w-8 h-8 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-transparent p-0 border-0 shadow-none mb-3">
                    <div className="p-0">
                        <div className={`mb-4 p-4 ${theme.selectedCard}`}>
                            <div className="flex justify-between items-start">
                                <div className="w-full flex gap-3 items-center">
                                    <div>
                                        <IconBrandYoutubeFilled className="text-red-600 w-12 h-12" />
                                    </div>
                                    <div className="flex-grow">
                                        <p className="text-xl text-center font-semibold">
                                            {"All I want for Xmax is you!"}
                                        </p>
                                        {/* <p className="text-sm text-muted-foreground">{""}</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`mb-4 p-4 ${theme.selectedCard}`}>
                            <div className="flex justify-between items-start">
                                <div className="w-full flex gap-3 items-center">
                                    <div>
                                        <IconBrandX className="text-black w-12 h-12" />
                                    </div>
                                    <div className="flex-grow">
                                        <p className="text-xl text-center font-semibold">
                                            {"Day of Xmax"}
                                        </p>
                                        {/* <p className="text-sm text-muted-foreground">{""}</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-transparent p-0 border-0 shadow-none">
                    <div className="flex flex-col space-y-1.5 p-6 px-1">
                        <h3 className="text-2xl font-semibold leading-none tracking-tight">Wallets</h3>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">
                            Send some coins for this profile
                        </p>
                    </div>
                    <div className="p-6 pt-0 px-0">
                        <div className={`mb-4 p-4 ${theme.selectedCard}`}>
                            <div className="flex justify-between items-start">
                                <div className="flex gap-3 items-center">
                                    <div>
                                        <IconCoinBitcoin className="text-orange-500 w-12 h-12" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold">
                                            {"Bitcoin"}
                                        </p>
                                        <p className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <span>
                                                {splitHexAddress(
                                                    "0x0000000000000000000000000000000000000000"
                                                )}
                                            </span>
                                            <span>
                                                <IconCopy className="h-4 w-4" />
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <button className="">
                                    <IconQrcode className="w-12 h-12" />
                                </button>
                            </div>
                        </div>

                        <div className={`mb-4 p-4 ${theme.selectedCard}`}>
                            <div className="flex justify-between items-start">
                                <div className="flex gap-3 items-center">
                                    <div>
                                        <IconCoinMonero className="text-indigo-500 w-12 h-12" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold">
                                            {"Monero"}
                                        </p>
                                        <p className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <span>
                                                {splitHexAddress(
                                                    "0x0000000000000000000000000000000000000000"
                                                )}
                                            </span>
                                            <span>
                                                <IconCopy className="h-4 w-4" />
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <button className="">
                                    <IconQrcode className="w-12 h-12" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

import { useParams } from "next/navigation";
import SectionCard from "../common/section-card";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useApp } from "@/src/context";
import { getDomainData, updateDomainData } from "@/src/service";

const banners = [
    "bg-gradient-to-r from-cyan-500 to-blue-500",
    "bg-gradient-to-r from-red-500 to-orange-500",
    "bg-gradient-to-r from-teal-500 to-fuchsia-500",
    "bg-gradient-to-r from-purple-500 to-pink-500",
    "bg-gradient-to-r from-zinc-800 to-zinc-900",
    "bg-gray-100"
]

const cards = [
    "bg-gray-100",
    "rounded-md bg-gray-100",
    "shadow-md border border border-gray-100 bg-white",
    "rounded-md shadow-md border border-gray-100 bg-white",
    "border border-black shadow-md shadow-black bg-white",
    "rounded-md border border-black shadow-md shadow-black bg-white",
]

export default function ProfileTheme() { 
    const { fn: { setLoaderMessage } } = useApp();
    const { domain } = useParams();
    const [selectedCard, setSelectedCard] = useState(cards[0]);
    const [selectedBanner, setSelectedBanner] = useState(banners[0]);

    useEffect(() => {
        init();
    }, [])

    const init = async () => {
        setLoaderMessage("Getting data...");
        const response = await getDomainData(domain, "theme");
        setLoaderMessage(null);
        if (!response.error) {
            if (response.data !== null) {
                if (response.data.theme === null) return;
                const { selectedBanner:banner, selectedCard:card } = response.data.theme;
                setSelectedCard(card)
                setSelectedBanner(banner)
            }
        }
        else {
            console.log("error")
        }
    }

    const handleSubmit = async () => {
        setLoaderMessage("Updating values...")
        const result = await updateDomainData({
            domain,
            theme: { selectedBanner, selectedCard },
            data: null
        });
        setLoaderMessage(null)

        if (result.error) {
            alert("There was an error while updating!")
        }
    }

    const isSelected = (val, current) => {
        return val === current ? "p-2 rounded-sm outline outline-3 outline-pink-200" : "p-2"
    }

    return (
        <div className="w-full mx-auto mt-4">
            <h2 className="text-2xl font-bold mb-4">
                Theme for <span className="text-pink-600">{domain}</span>
            </h2>

            <SectionCard>
                <h3 className="text-lg font-semibold mb-4">Banner</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {banners.map((style, i) => (
                        <div key={i} className={`${isSelected(style, selectedBanner)}`}>
                            <div
                                className={`h-14 rounded-md outline-transparent ${style}`}
                                onClick={() => setSelectedBanner(style)}
                            ></div>
                        </div>
                    ))}
                </div>
            </SectionCard>

            <SectionCard>
                <h3 className="text-lg font-semibold mb-4">Card Design</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {cards.map((style, i) => (
                        <div key={i} className={`${isSelected(style, selectedCard)}`}>
                            <div 
                                className={`h-14 outline-transparent ${style}`}
                                onClick={() => setSelectedCard(style)}
                            ></div>
                        </div>
                    ))}
                </div>
            </SectionCard>

            <div className="mb-4">
                <Button onClick={() => handleSubmit()} className="w-full">Update Theme</Button>
            </div>
        </div>
    )
}
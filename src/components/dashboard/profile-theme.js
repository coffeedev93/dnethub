import { useParams } from "next/navigation";
import SectionCard from "../common/section-card";

export default function ProfileTheme() { 
    const { domain } = useParams();

    return (
        <div className="w-full mx-auto mt-4">
            <h2 className="text-2xl font-bold mb-4">
                Theme for <span className="text-pink-500">{domain}</span>
            </h2>

            <SectionCard>
                <h3 className="text-lg font-semibold mb-4">Banner</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="h-14 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                    <div class="h-14 rounded-md bg-gradient-to-r from-red-500 to-orange-500"></div>
                    <div class="h-14 rounded-md bg-gradient-to-r from-teal-500 to-fuchsia-500"></div>
                    <div class="h-14 rounded-md bg-gradient-to-r from-purple-500 to-pink-500"></div>
                    <div class="h-14 rounded-md bg-gradient-to-r from-zinc-800 to-zinc-900"></div>
                    <div class="h-14 rounded-md border bg-transparent"></div>
                </div>
            </SectionCard>

            <SectionCard>
                <h3 className="text-lg font-semibold mb-4">Card Design</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="h-14 rounded-md bg-gray-100"></div>
                    <div class="h-14 bg-gray-100"></div>
                    <div class="h-14 rounded-md shadow-md border border-gray-100 bg-white"></div>
                    <div class="h-14 shadow-md border border border-gray-100 bg-white"></div>
                    <div class="h-14 rounded-md border border-black shadow-md shadow-black"></div>
                    <div class="h-14 border border-black shadow-md shadow-black"></div>
                </div>
            </SectionCard>
        </div>
    )
}
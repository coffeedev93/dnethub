import { useApp } from "@/src/context";
import DomainCard from "./domain-card";

export default function Dashboard() {
    const {
        data: { accountNfts },
    } = useApp();

    return (
        <div className="w-full mx-auto py-8 px-4">
            <h2 className="text-2xl font-bold mb-8">Your HNS Domains</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {accountNfts !== null &&
                    accountNfts.map((data, i) => (
                        <DomainCard key={i} data={data} />
                    ))}
            </div>
        </div>
    );
}

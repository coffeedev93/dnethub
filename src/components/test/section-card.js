"use client";

import Link from "next/link";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/src/components/ui/card";



export default function SectionCard({ title = "Landing", description = "" }) {
    return (
        <main className="flex-1 p-6 overflow-auto">
            <div className="max-w-4xl mx-auto">
                <Card className="mb-6">
                    <CardHeader>
                        <CardTitle className="text-2xl">{title}</CardTitle>
                        <CardDescription>{description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Wallet Address
                                </p>
                                <p className="font-medium">
                                    {"walletInfo.address"}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">
                                    NFTs Owned
                                </p>
                                <p className="font-medium">{"walletInfo.nfts"}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}

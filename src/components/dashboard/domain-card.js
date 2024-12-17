"use client";

import Link from "next/link";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/src/components/ui/card";
import { getUrlComponents } from "@/src/lib/myutils";



export default function DomainCard({ domain }) {
    const {
        protocol,
        rootHost,
        profileHost
    } = getUrlComponents();

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl">
                    <Link href={`${protocol}://app.${rootHost}/manage/${domain}`}>
                        {domain}
                    </Link>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <p className="text-sm text-muted-foreground">
                            NFT Collection
                        </p>
                        <p className="font-medium">
                            {"0x1234...5678"}
                        </p>
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground">
                            Serial #
                        </p>
                        <p className="font-medium">{5}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
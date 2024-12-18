"use client";

import Link from "next/link";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/src/components/ui/card";
import { getUrlComponents } from "@/src/lib/myutils";



export default function DomainCard({ data }) {
    const {
        protocol,
        rootHost,
        profileHost
    } = getUrlComponents();

    const {
        serial_number,
        token_id,
        data: {
            name:domain,
            creator,
            image,
            description
        }
    } = data;

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl">
                    <Link href={`${protocol}://app.${rootHost}/manage/${domain}`}>
                        <span className="text-pink-600">{domain}</span>
                    </Link>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 gap-2">
                    <div>
                        <p className="text-sm text-muted-foreground">
                            Serial #{serial_number}
                        </p>
                    </div>
                    <div>
                        <p className="font-semibold text-sm text-muted-foreground">
                            NFT Collection
                        </p>
                        <p className="font-normal text-sm">
                            {description}
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
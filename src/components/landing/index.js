"use client";

import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/src/lib/utils";
import LandingContent from "./content";
import LandingNav from "./navbar";
import LandingFooter from "./footer";

const siteConfig = {
    name: "WebHub",
    description:
        "The convergence of your Web3 and Web2 identities.",
    url: "https://hbar.im",
    ogImage: "https://tx.shadcn.com/og.jpg",
    links: {
        twitter: "https://twitter.com/",
        github: "https://github.com/",
    },
};

const marketingConfig = {
    mainNav: [
        {
            title: "Features",
            href: "/#features",
        },
        {
            title: "Blog",
            href: "/",
        },
        {
            title: "Documentation",
            href: "/",
        },
    ],
};

// https://getnextjsthemes.com/product/si-educational-free-nextjs-template
// https://github.com/shadcn-ui/taxonomy/tree/main
export default function Landing({}) {
    return (
        <div className="flex min-h-screen flex-col">
            <header className="container z-40 bg-background">
                <div className="flex h-20 items-center justify-between py-6">
                    <LandingNav
                        siteName={siteConfig.name}
                        items={marketingConfig.mainNav}
                    />
                    <nav>
                        <Link
                            href="/"
                            className={cn(
                                buttonVariants({
                                    variant: "secondary",
                                    size: "sm",
                                }),
                                "px-4"
                            )}
                        >
                            Connect Wallet
                        </Link>
                    </nav>
                </div>
            </header>
            <main className="flex-1">
                <LandingContent siteConfig={siteConfig} />
            </main>
            <LandingFooter siteConfig={siteConfig} />
        </div>
    );
}

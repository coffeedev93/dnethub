import { cn } from "@/src/lib/utils";
import { IconDrone } from "@tabler/icons-react";
//import { ModeToggle } from "@/components/mode-toggle"

export default function LandingFooter({ siteConfig }) {
    return (
        <footer className={cn("")}>
            <div className="w-full flex flex-col items-center justify-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                    <IconDrone />
                    <p className="text-center text-sm leading-loose md:text-left">
                        Built for the{" "}
                        <a
                            href={siteConfig.links.twitter}
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4 text-pink-500"
                        >
                            Hedera Hello Future Hackathon 2
                        </a>
                        .
                    </p>
                </div>
                {/* <ModeToggle /> */}
            </div>
        </footer>
    );
}
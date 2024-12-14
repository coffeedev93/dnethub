import { IconDrone } from "@tabler/icons-react";

const FooterPowered = () => (
    <footer>
        <div className="w-full flex flex-col items-center justify-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
            <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                <p className="text-center text-lg leading-loose md:text-left">
                    Powered by{" "}
                    <a
                        href={"/"}
                        target="_blank"
                        rel="noreferrer"
                        className="font-bold text-pink-500"
                    >
                        <span>Webhub</span> <IconDrone className="inline"/>
                    </a>
                </p>
            </div>
        </div>
    </footer>
);

export default FooterPowered;
import Link from "next/link";
import { getUrlComponents } from "@/src/lib/myutils";
import { IconDiamond, IconGraph, IconHome, IconPaint, IconShip, IconUserCode, IconWindowMaximize, IconWorldWww } from "@tabler/icons-react";
import { useParams } from "next/navigation";


const NavMenu = () => {
    const { domain } = useParams();
    const {
        protocol,
        rootHost,
        profileHost
    } = getUrlComponents();

    const linkClass = "flex items-center gap-2 text-gray-600 text-md font-bold hover:text-pink-600 mb-6";

    return (
        <div className="relative list-none sm:py-10 pl-5 sm:pl-10 sm:mb-5">
            <div className="pt-6"></div>
            <Link 
                href={`${protocol}://app.${rootHost}/manage/${domain}`}
                className={linkClass}
            >
                <IconUserCode className="w-5 h-5" />
                <span>Profile</span>
            </Link>
            <Link 
                href={`${protocol}://app.${rootHost}/theme/${domain}`} 
                className={linkClass}
            >
                <IconPaint className="w-5 h-5" />
                <span>Theme</span>
            </Link>
            <Link 
                href={`${protocol}://app.${rootHost}`}
                className={linkClass}
            >
                <IconWorldWww className="w-5 h-5" />
                <span>Domains</span>
            </Link>
            {domain && (
                <Link 
                    href={`${protocol}://${domain.split(".")[0]}.${profileHost}`}
                    target="_blank"
                    className={linkClass}
                >
                    <IconWindowMaximize className="w-5 h-5" />
                    <span>My Page</span>
                </Link>
            )}
            {/* <Link 
                href={`${protocol}://app.${rootHost}/onboard/`}
                className={linkClass}
            >
                <IconShip className="w-5 h-5" />
                <span>Onboard</span>
            </Link> */}
            <Link 
                href={`${protocol}://${profileHost}`}
                target="_blank"
                className={linkClass}
            >
                <IconDiamond className="w-5 h-5" />
                <span>Landing</span>
            </Link>
        </div>
    );
}

export default NavMenu;
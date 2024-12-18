import Link from "next/link";
import NavMenu from "./nav-menu";
import ConnectButton from "../common/connect-button";


function Header() {
    return (
        <div className="bg-white shadow">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-4">
                    <Link href="/">
                        <div className="flex">
                            {/* <img /> */}
                            <p className="font-sans text-2xl font-bold text-gray-900">
                                DNET<span className="text-pink-600">HUB</span>
                            </p>
                        </div>
                    </Link>

                    <div className="hidden sm:flex sm:items-center">
                        <ConnectButton />
                    </div>

                </div>

                <div className="block sm:hidden bg-white border-t-2 py-2">
                    <div className="flex flex-col">
                        <NavMenu />
                        <div className="flex justify-end items-center border-t-2 pt-2">
                            <ConnectButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const DashboardLayout = ({ children, withSidebar = true }) => { 
    return (
        <div className="w-full min-h-screen m-0">
            <Header />

            {
                withSidebar ? (
                    <div className="lg:container mx-auto flex flex-col sm:flex-row">
                        <div className="hidden sm:block w-full sm:w-1/4 md:w-1/5">
                            <NavMenu />
                        </div>
                        <div className="w-full sm:w-3/4 md:w-4/5 py-4 sm:py-10 px-4">
                            {children}
                        </div>
                    </div>
                ):(
                    <div className="lg:container mx-auto flex flex-col sm:flex-row">
                        {children}
                    </div>
                )
            }
        </div>
    );
}

export default DashboardLayout
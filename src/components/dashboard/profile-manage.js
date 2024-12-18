import { useParams } from "next/navigation";
import { getUrlComponents } from "@/src/lib/myutils";
import { IconWindowMaximize } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { getDomainData } from "@/src/service";
import { useApp } from "@/src/context";
import ProfileBuilder from "../builder";


export default function ProfileManage() { 
    const { fn: { setLoaderMessage } } = useApp();
    const [profileData, setProfileData] = useState({});
    const { domain } = useParams();
    const {
        protocol,
        profileHost
    } = getUrlComponents();
    
    useEffect(() => {
        init();
    }, [])

    const init = async () => {
        setLoaderMessage("Getting data...");
        const response = await getDomainData(domain, "data");
        setLoaderMessage(null);
        if (!response.error) {
            const val = response.data === null ? {} : response.data.data;
            setProfileData(val);
        }
        else {
            console.log("error")
        }
    }

    return (
        <div className="w-full mx-auto pt-4">
            <h2 className="text-2xl font-bold mb-4">
                Profile for <span className="text-pink-600">{domain}</span>
                {
                    Object.keys(profileData).length === 0 ? (
                        <span className="ml-2 px-1 rounded-md text-red-500 border border-red-500 text-xs">Not Deployed</span>
                    ) : (
                        <a
                            href={`${protocol}://${domain.split('.')[0]}.${profileHost}`}
                            target="_blank"
                            className="inline-block ml-2"
                        >
                            <span className="px-1 rounded-md text-teal-500 border border-teal-500 text-xs">
                                Deployed <IconWindowMaximize className="inline-block w-3 h-3"/>
                            </span>
                        </a>
                    )
                }
            </h2>
            <ProfileBuilder 
                domain={domain}
                data={profileData} 
            />
        </div>
    )
}
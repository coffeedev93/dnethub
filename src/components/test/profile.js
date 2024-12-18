"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  IconBrandDiscord,
  IconBrandMedium,
  IconBrandTelegram,
  IconBrandTwitter,
  IconBrandX,
  IconBrandYoutube,
  IconBrandYoutubeFilled,
  IconCoinBitcoin,
  IconCoinMonero,
  IconWorldWww,
} from "@tabler/icons-react";
import { useSearchParams } from "next/navigation";

import {
  DisplayWallet,
  DeployingSVG,
} from "./profile-comp"
import Loader from "../common/loader";
import { getDomainData } from "@/src/service";


const iconList = {
  twitter: IconBrandTwitter,
  medium: IconBrandMedium,
  discord: IconBrandDiscord,
  youtube: IconBrandYoutube,
  telegram: IconBrandTelegram,
  page: IconWorldWww,
  monero: IconCoinMonero,
  bitcoin: IconCoinBitcoin,
  twitterBig: IconBrandX,
  youtubeBig: IconBrandYoutubeFilled,
};

const getIcon = (platform) => iconList[platform];

const getSocialLinks = (data) => {
  let socialLinks = [];

  if (!data) return socialLinks;

  for (const [key, value] of Object.entries(data.socialLinks)) {
    if (value) {
      socialLinks.push({ title: key, link: value, Icon: iconList[key] });
    }
  }

  return socialLinks;
};


const mainImage =
  "https://gateway.pinata.cloud/ipfs/bafkreiaqroiamciheiwpzxlsbtak4z6c63egssrhih22vk2kve7z4t3g4e";


export default function Profile({ id }) {
  const searchParams = useSearchParams();

  const [activeTab, setActiveTab] = useState("active");
  const [loading, setLoading] = useState(true);
  const [validData, setValidData] = useState(false);
  const [data, setData] = useState({});
  const [theme, setTheme] = useState({});

  useEffect(() => {
    //console.log(domain)
    init()
  }, []);

  const socialLinks = getSocialLinks();

  const init = async () => {
    const domain = `${id.split(".")[0]}.hbar`;
    const response = await getDomainData(domain, "domain, data, theme");
    if (response.data === null) {
      setValidData(false)
    }
    else {
      setData(response.data.data)
      setTheme(response.data.theme)
      setValidData(true);
    }

    setLoading(false);
  }

  return (
    <>
      {loading ? (
        <div className="w-full flex items-center justify-center py-10">
          <Loader text="Loading site data..."/>
        </div>
      ) : (
        <>
          {validData ? (
            <main className="relative flex-1 p-6 overflow-auto text-black bg-gray-100">
              <div
                className={`absolute top-0 left-0 w-full h-48 ${theme.selectedBanner}`}
              ></div>
              <div className="relative max-w-4xl mx-auto pt-16">
                <div className={`p-4 mb-6 ${theme.selectedCard}`}>
                  <div className="flex gap-4">
                    <img src={mainImage} className="w-48 h-48 rounded-md" />
                    <div className="">
                      <div>
                        <p className="font-bold text-3xl">
                          {data.generalInfo.name}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 my-2 text-gray-500">
                        {/* <IconWallet className="w-4 h-4" /> */}
                        <span>{data.generalInfo.title}</span>
                      </div>
                      <div>
                        <p>
                          <span>{data.generalInfo.bio}</span>
                        </p>
                      </div>
                      {socialLinks?.length > 0 && (
                        <div className="flex items-center justify-start gap-3 mt-4">
                          {socialLinks.map(({ title, link, Icon }) => (
                            <Link key={link} href={link} passHref={true}>
                              <div
                                className="bg-slate-900 rounded-md p-2"
                                title={title}
                              >
                                <Icon className="w-8 h-8 text-white" />
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {data.customMediaLinks?.length > 0 && (
                  <div className="bg-transparent p-0 border-0 shadow-none mb-3">
                    <div className="p-0">
                      {data.customMediaLinks.map(
                        ({ title, link, platform }) => {
                          const Icon = getIcon(
                            `${platform.toLocaleLowerCase()}Big`
                          );

                          return (
                            <Link key={link} href={link} passHref={true}>
                              <div className={`mb-4 p-4 ${theme.selectedCard}`}>
                                <div className="flex justify-between items-start">
                                  <div className="w-full flex gap-3 items-center">
                                    {platform.toLocaleLowerCase() ===
                                      "youtube" ||
                                      platform.toLocaleLowerCase() ===
                                        "twitter"}
                                    <div>
                                      <Icon className="text-red-600 w-12 h-12" />
                                    </div>
                                    <div className="flex-grow">
                                      <p className="text-xl text-center font-semibold">
                                        {title}
                                      </p>
                                      {/* <p className="text-sm text-muted-foreground">{""}</p> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          );
                        }
                      )}
                    </div>
                  </div>
                )}

                {data.walletAddresses?.length > 0 && (
                  <div className="bg-transparent p-0 border-0 shadow-none">
                    <div className="flex flex-col space-y-1.5 p-6 px-1">
                      <h3 className="text-2xl font-semibold leading-none tracking-tight">
                        Wallets
                      </h3>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        Send some coins for this profile
                      </p>
                    </div>
                    <div className="p-6 pt-0 px-0">
                      {data.walletAddresses.map((wallet, i) => (
                        <DisplayWallet key={i} theme={theme} {...wallet} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </main>
          ) : (
            <div className="flex flex-col items-center justify-center h-screen">
              <DeployingSVG className="h-64" />
              <h1 className="font-bold text-3xl mt-16">
                The site for this domain isn't deployed yet!
              </h1>
            </div>
          )}
        </>
      )}
    </>
  );
}


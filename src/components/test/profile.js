"use client"

import { useState } from "react"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
//import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs"
import { IconArrowsRightLeft, IconBrandDiscord, IconBrandMedium, IconBrandTelegram, IconBrandTwitter, IconBrandX, IconBrandYoutube, IconBrandYoutubeFilled, IconCheckbox, IconClock, IconCoinBitcoin, IconCoinMonero, IconCopy, IconLink, IconQrcode, IconWallet, IconWorldWww } from "@tabler/icons-react"
import { splitHexAddress } from "@/src/lib/myutils"


const nftDomain1 = {
  metadata: {
    "name":"joseph.hbar",
    "creator":"pieFi",
    "creatorDID":"",
    "description":"Hashgraph Name service domain",
    "image":"bafybeieiaipdtpmbp64rs5kgouncn6bms2k2gz6kgdu3qremp74nz4tw3u",
    "type":"image/jpeg",
    "files":[],
    "format":"none",
    "properties":[],
    "localization":[]
  },
  image: "https://gateway.pinata.cloud/ipfs/bafybeieiaipdtpmbp64rs5kgouncn6bms2k2gz6kgdu3qremp74nz4tw3u"
}

const nftDomain2 = {
  metadata: {
    "name":"boston.cream",
    "creator":"Piefi Labs",
    "creatorDID":"",
    "description":"Hashgraph Name service domain",
    "image":"bafybeiff3q5nbpnjdkk75hloxxaxpuldd4hdxjpf5vybjae6zjeu37epym",
    "type":"image/jpeg",
    "files":[],
    "format":"none",
    "properties":[],
    "localization":[]
  },
  image: "https://gateway.pinata.cloud/ipfs/bafybeiff3q5nbpnjdkk75hloxxaxpuldd4hdxjpf5vybjae6zjeu37epym"
}

export default function Profile({ id }) {
  const [activeTab, setActiveTab] = useState("active")

  return (
    <main className="relative flex-1 p-6 overflow-auto">
      <div class="absolute top-0 left-0 w-full h-48 bg-gradient-to-r from-purple-500 to-pink-500"></div>
    <div className="relative max-w-4xl mx-auto pt-16">
      <Card className="mb-6 shadow-md border border-white bg-white rounded-lg">
        {/* <CardHeader>
          <CardTitle className="text-2xl">Profile from <span className="text-teal-400">{id}</span></CardTitle>
          <CardDescription>Overview of your wallet and assets</CardDescription>
        </CardHeader> */}
        <CardContent className="flex gap-4 pt-6">
          <img src={nftDomain1.image} className="w-48 h-48 rounded-md"/>
          <div className="">
            <div>
              <p className="font-bold text-3xl">{"joseph.hbar"}</p>
            </div>
            <div className="flex items-center gap-3 my-2 text-gray-500">
                <IconWallet className="w-4 h-4"/>
                <span>{"0.0.1366321"}</span>
            </div>
            <div>
              <p>
                <span>User experience designer with a background in product strategy. I use a user-centered design approach to find creative solutions.</span>
              </p>
            </div>
            <div className="flex items-center justify-start gap-3 mt-4">
              <div className="bg-slate-900 rounded-md p-2">
                <IconBrandX className="w-8 h-8 text-white" />
              </div>
              <div className="bg-slate-900 rounded-md p-2">
                <IconBrandDiscord className="w-8 h-8 text-white" />
              </div>
              <div className="bg-slate-900 rounded-md p-2">
                <IconBrandTelegram className="w-8 h-8 text-white" />
              </div>
              <div className="bg-slate-900 rounded-md p-2">
                <IconBrandMedium className="w-8 h-8 text-white" />
              </div>
              <div className="bg-slate-900 rounded-md p-2">
                <IconBrandYoutube className="w-8 h-8 text-white" />
              </div>
              <div className="bg-slate-900 rounded-md p-2">
                <IconWorldWww className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      

      <Card className="bg-transparent p-0 border-0 shadow-none mb-3">
        {/* <CardHeader className="px-1">
            <CardTitle>Active Swaps</CardTitle>
            <CardDescription>Your ongoing swap transactions</CardDescription>
        </CardHeader> */}
        <CardContent className="p-0">
                <div className="mb-4 p-4 shadow-md border border-white bg-white rounded-lg">
                  <div className="flex justify-between items-start">
                    <div className="w-full flex gap-3 items-center">
                      <div>
                        <IconBrandYoutubeFilled className="text-red-600 w-12 h-12"/>
                      </div>
                      <div className="flex-grow">
                        <p className="text-xl text-center font-semibold">{"All I want for Xmax is you!"}</p>
                        {/* <p className="text-sm text-muted-foreground">{""}</p> */}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4 p-4 shadow-md border border-white bg-white rounded-lg">
                  <div className="flex justify-between items-start">
                    <div className="w-full flex gap-3 items-center">
                      <div>
                        <IconBrandX className="text-black w-12 h-12"/>
                      </div>
                      <div className="flex-grow">
                        <p className="text-xl text-center font-semibold">{"Day of Xmax"}</p>
                        {/* <p className="text-sm text-muted-foreground">{""}</p> */}
                      </div>
                    </div>
                  </div>
                </div>
        </CardContent>
        </Card>

        <Card className="bg-transparent p-0 border-0 shadow-none">
            <CardHeader className="px-1">
              <CardTitle>Wallets</CardTitle>
              <CardDescription>Send some coins for this profile</CardDescription>
            </CardHeader>
            <CardContent className="px-0">
              <div className="mb-4 p-4 shadow-md border border-white bg-white rounded-lg">
                  <div className="flex justify-between items-start">
                    <div className="flex gap-3 items-center">
                      <div>
                        <IconCoinBitcoin className="text-orange-500 w-12 h-12"/>
                      </div>
                      <div>
                        <p className="text-sm font-bold">{"Bitcoin"}</p>
                        <p className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{splitHexAddress("0x0000000000000000000000000000000000000000")}</span>
                          <span><IconCopy className="h-4 w-4"/></span>
                        </p>
                      </div>
                    </div>
                    <button className="">
                      <IconQrcode className="w-12 h-12"/>
                    </button>
                  </div>
                </div>

                <div className="mb-4 p-4 shadow-md border border-white bg-white rounded-lg">
                  <div className="flex justify-between items-start">
                    <div className="flex gap-3 items-center">
                      <div>
                        <IconCoinMonero className="text-indigo-500 w-12 h-12"/>
                      </div>
                      <div>
                        <p className="text-sm font-bold">{"Monero"}</p>
                        <p className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{splitHexAddress("0x0000000000000000000000000000000000000000")}</span>
                          <span><IconCopy className="h-4 w-4"/></span>
                        </p>
                      </div>
                    </div>
                    <button className="">
                      <IconQrcode className="w-12 h-12"/>
                    </button>
                  </div>
                </div>
              
            </CardContent>
          </Card>
    </div>
    </main>
  )
}
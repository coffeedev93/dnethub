"use client"

import { useState } from "react"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
//import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs"
import { IconArrowsRightLeft, IconCheckbox, IconClock, IconWallet } from "@tabler/icons-react"

// Mock data for wallet info
const walletInfo = {
  address: "0x1234...5678",
  balance: {
    ETH: 1.5,
    USDT: 500,
    USDC: 750,
  },
  nfts: 3,
}

// Mock data for active swaps
const activeSwaps = [
  {
    id: 1,
    offeringNFT: "Cool Cat #1234",
    requestingItem: "500 USDT",
    network: "Ethereum",
    status: "Pending",
  },
  {
    id: 2,
    offeringNFT: "Bored Ape #5678",
    requestingItem: "CryptoPunk #9876",
    network: "Arbitrum",
    status: "Awaiting Approval",
  },
]

// Mock data for completed swaps
const completedSwaps = [
  {
    id: 3,
    offeringNFT: "Doodle #4321",
    receivedItem: "1000 USDC",
    network: "Optimism",
    completedDate: "2024-03-15",
  },
  {
    id: 4,
    offeringNFT: "Azuki #8765",
    receivedItem: "Moonbird #2468",
    network: "Base",
    completedDate: "2024-03-10",
  },
]

export default function Profile({ id }) {
  const [activeTab, setActiveTab] = useState("active")

  return (
    <main className="flex-1 p-6 overflow-auto">
    <div className="max-w-4xl mx-auto">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-2xl">Profile from <span className="text-teal-400">{id}</span></CardTitle>
          <CardDescription>Overview of your wallet and assets</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Wallet Address</p>
              <p className="font-medium">{walletInfo.address}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">NFTs Owned</p>
              <p className="font-medium">{walletInfo.nfts}</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-sm text-muted-foreground mb-2">Balances</p>
              <div className="flex flex-wrap gap-4">
                {Object.entries(walletInfo.balance).map(([currency, amount]) => (
                  <div key={currency} className="flex items-center">
                    <IconWallet className="w-4 h-4 mr-2" />
                    <span className="font-medium">{amount} {currency}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-transparent p-0 border-0 shadow-none mb-3">
        <CardHeader className="px-1">
            <CardTitle>Active Swaps</CardTitle>
            <CardDescription>Your ongoing swap transactions</CardDescription>
        </CardHeader>
        <CardContent className="px-0">
            {activeSwaps.map((swap) => (
            <div key={swap.id} className="mb-4 p-4 border rounded-lg bg-white">
                <div className="flex justify-between items-start mb-2">
                <div>
                    <p className="font-medium">{swap.offeringNFT}</p>
                    <p className="text-sm text-muted-foreground">Requesting: {swap.requestingItem}</p>
                </div>
                <Button variant="outline" size="sm">
                    <IconArrowsRightLeft className="w-4 h-4 mr-2" />
                    View Details
                </Button>
                </div>
                <div className="flex items-center justify-between text-sm">
                <span>{swap.network}</span>
                <span className="flex items-center">
                    <IconClock className="w-4 h-4 mr-1 text-yellow-500" />
                    {swap.status}
                </span>
                </div>
            </div>
            ))}
        </CardContent>
        </Card>

        <Card className="bg-transparent p-0 border-0 shadow-none">
            <CardHeader className="px-1">
              <CardTitle>Completed Swaps</CardTitle>
              <CardDescription>Your finished swap transactions</CardDescription>
            </CardHeader>
            <CardContent className="px-0">
              {completedSwaps.map((swap) => (
                <div key={swap.id} className="mb-4 p-4 border rounded-lg bg-white">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-medium">{swap.offeringNFT}</p>
                      <p className="text-sm text-muted-foreground">Received: {swap.receivedItem}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <IconArrowsRightLeft className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>{swap.network}</span>
                    <span className="flex items-center">
                      <IconCheckbox className="w-4 h-4 mr-1 text-green-500" />
                      Completed on {swap.completedDate}
                    </span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>


    </div>
    </main>
  )
}
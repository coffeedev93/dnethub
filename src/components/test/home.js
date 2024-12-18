"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/src/components/ui/card"
import { useApp } from "@/src/context"
import ConnectButton from "../common/connect-button"

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

export default function Home({ title = "Landing" }) {
  const {
    data: { pairingData, accountData },
    fn: { connect, disconnect }
  } = useApp()

  return (
    <main className="flex-1 p-6 overflow-auto">
    <div className="max-w-4xl mx-auto">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-2xl">{title}</CardTitle>
          <CardDescription>Claim your Hedera profile</CardDescription>
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
          </div>
        </CardContent>
      </Card>

      <div className="py-4">
        {/* <button 
          onClick={() => connect()}
          className="bg-teal-100 px-5 py-2"
        >
          CONNECT
        </button>
        <button 
          onClick={() => disconnect()}
          className="bg-red-100 px-5 py-2"
        >
          DISCONNECT
        </button> */}
        <ConnectButton />
      </div>

      <div>
        <pre className="w-full">
          {JSON.stringify(accountData, null, 2)}
        </pre>
      </div>

    </div>
    </main>
  )
}
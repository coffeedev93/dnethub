import { useState } from "react";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Button } from "@/src/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/src/components/ui/select";

const networks = [
    "Ethereum",
    "Bitcoin",
    "Solana",
    "Polygon",
    "Binance Smart Chain",
];

export default function WalletAddresses({ addresses, setAddresses }) {
    const [address, setAddress] = useState("");
    const [network, setNetwork] = useState("");

    const handleAddAddress = () => {
        if (address && network) {
            setAddresses([...addresses, { address, network }]);
            setAddress("");
            setNetwork("");
        }
    };

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold">Wallet Addresses</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="walletAddress">Wallet Address</Label>
                    <Input
                        id="walletAddress"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Enter your wallet address"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="network">Network</Label>
                    <Select value={network} onValueChange={setNetwork}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select network" />
                        </SelectTrigger>
                        <SelectContent>
                            {networks.map((net) => (
                                <SelectItem key={net} value={net}>
                                    {net}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>
            
            <Button onClick={handleAddAddress}>Add Wallet Address</Button>
            {addresses.map((item, index) => (
                <div key={index} className="p-2 border rounded">
                    <p>
                        <strong>Address:</strong> {item.address}
                    </p>
                    <p>
                        <strong>Network:</strong> {item.network}
                    </p>
                </div>
            ))}
        </div>
    );
}

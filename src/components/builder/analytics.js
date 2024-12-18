import { useState } from "react";
import { Label } from "@/src/components/ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";


export default function Analytics({ active, activateAnalytics }) {
    return (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold">Activate Simple Analytics script</h3>
            <RadioGroup 
                value={active}
                className="flex gap-4 py-2"
                onValueChange={val => activateAnalytics(val)}
            >
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value={true} id="true"/>
                    <Label htmlFor="true">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value={false} id="false" />
                    <Label htmlFor="false">No</Label>
                </div>
            </RadioGroup>
        </div>
    );
}

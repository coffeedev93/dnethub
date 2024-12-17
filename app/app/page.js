"use client"

import DomainCard from "@/src/components/dashboard/domain-card";
import DashboardLayout from "@/src/components/dashboard/layout";
import Home from "@/src/components/test/home";


export default function DashboardPage() {
    return (
        <DashboardLayout withSidebar={false}>
            <div className="w-full mx-auto pt-8">
                <h2 className="text-2xl font-bold mb-8">Your HNS Domains</h2>
                <div className="grid grid-cols-3 gap-3">
                    <DomainCard domain="domain1.hbar"/>
                    <DomainCard domain="domain2.hbar"/>
                    <DomainCard domain="domain3.hbar"/>
                </div>
            </div>
		</DashboardLayout>
    );
}

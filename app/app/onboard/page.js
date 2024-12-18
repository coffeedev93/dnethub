"use client"

import ProfileBuilder from "@/src/components/builder";
import DashboardLayout from "@/src/components/dashboard/layout";


export default function OnboardPage({params}) {
    return (
        <DashboardLayout withSidebar={false}>
            <div className="w-full max-w-3xl mx-auto pt-8">
                <h2 className="text-2xl font-bold mb-4">Onboarding</h2>
                <ProfileBuilder 
                    domain={params.domain}
                    buttonText="Activate Profile"
                />
            </div>
		</DashboardLayout>
    );
}

"use client"

import DashboardLayout from "@/src/components/dashboard/layout";
import ProfileTheme from "@/src/components/dashboard/profile-theme";


export default function OnboardPage() {
    return (
        <DashboardLayout>
			<ProfileTheme />
		</DashboardLayout>
    );
}
"use client"

import Dashboard from "@/src/components/dashboard";
import DashboardLayout from "@/src/components/dashboard/layout";


export default function DashboardPage() {
    return (
        <DashboardLayout withSidebar={false}>
            <Dashboard />
		</DashboardLayout>
    );
}

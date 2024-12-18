"use client"

import DashboardLayout from "@/src/components/dashboard/layout";
import ProfileManage from "@/src/components/dashboard/profile-manage";


export default function ManagePage({ params }) {
    return (
        <DashboardLayout>
            <ProfileManage />
		</DashboardLayout>
    );
}
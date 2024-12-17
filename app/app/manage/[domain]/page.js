"use client"

import ProfileBuilder from "@/src/components/builder";
import DashboardLayout from "@/src/components/dashboard/layout";
import { getUrlComponents } from "@/src/lib/myutils";
import { IconWindowMaximize } from "@tabler/icons-react";


export default function OnboardPage({ params }) {
    const {
            protocol,
            profileHost
        } = getUrlComponents();

    return (
        <DashboardLayout>
			<div className="w-full mx-auto pt-4">
                <h2 className="text-2xl font-bold mb-4">
                    Profile for <span className="text-pink-500">{params.domain}</span>
                    <a
                        href={`${protocol}://${params.domain.split('.')[0]}.${profileHost}`}
                        target="_blank"
                        className="inline-block ml-2 align-middle"
                    >
                        <IconWindowMaximize className="w-6 h-6"/>
                    </a>
                </h2>
                <ProfileBuilder />
            </div>
		</DashboardLayout>
    );
}
import AppLayout from "@/src/components/common/app-layout";
import Home from "@/src/components/test/home";
import SectionCard from "@/src/components/test/section-card";


export default function DashboardPage() {
    return (
        <AppLayout>
			{/* <SectionCard title="Dashboard"/> */}
            <Home title="Dashboard" />
		</AppLayout>
    );
}

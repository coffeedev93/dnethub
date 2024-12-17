import SectionCard from "../test/section-card";
import DashboardLayout from "./layout";

export default function Dashboard() {
    return (
        <DashboardLayout>
			<SectionCard title="Dashboard"/>
            {/* <Home title="Dashboard" /> */}
		</DashboardLayout>
    );
}
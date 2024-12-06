import AppLayout from "@/src/components/common/app-layout";
import Profile from "@/src/components/test/profile";
import SectionCard from "@/src/components/test/section-card";


export default function SubdomainPage({ params }) {
    const { domain } = params
    return (
        <AppLayout>
            <Profile id={domain} />
		</AppLayout>
    );
}

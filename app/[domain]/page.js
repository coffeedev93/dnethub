import AppLayout from "@/src/components/common/app-layout";
import FooterPowered from "@/src/components/common/footer-powered";
import Profile from "@/src/components/test/profile_test";
import SectionCard from "@/src/components/test/section-card";


export default function SubdomainPage({ params }) {
    const { domain } = params
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Profile id={decodeURIComponent(domain)} />
            <FooterPowered />
		</div>
    );
}

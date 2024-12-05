import AppLayout from "@/src/components/common/app-layout";
import Profile from "@/src/components/test/profile";

export default function ProfilePage({ params }) {
    const { profile } = params
    return (
        <AppLayout>
			<Profile id={profile} />
		</AppLayout>
    );
}
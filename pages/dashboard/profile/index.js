import DashboardDesktopNav from "@/components/dashboard/nav/dashboardDesktopNav.component";
import DashboardMobileNav from "@/components/dashboard/nav/dashboardMobileNav.component";
import ProfileComponent from "@/components/dashboard/profile/profile.component";

export default function ProfilePage() {
	return (
		<>
			<DashboardDesktopNav />
			<DashboardMobileNav />
			<ProfileComponent />
		</>
	);
}

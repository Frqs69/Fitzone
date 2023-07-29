import DashboardDesktopNav from "@/components/dashboard/nav/dashboardDesktopNav.component";
import DashboardMobileNav from "@/components/dashboard/nav/dashboardMobileNav.component";
export default function Dashboard() {
	return (
		<>
			<DashboardDesktopNav />
			<DashboardMobileNav />
			<h1>Dashboard</h1>
		</>
	);
}

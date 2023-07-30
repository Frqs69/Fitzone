import DashboardDesktopNav from "@/components/dashboard/nav/dashboardDesktopNav.component";
import DashboardMobileNav from "@/components/dashboard/nav/dashboardMobileNav.component";
import YourTraining from "@/components/dashboard/yourTraining/youtTraining.component";

export default function YourTrainingPage() {
	return (
		<>
			<DashboardDesktopNav />
			<DashboardMobileNav />
			<YourTraining />
		</>
	);
}

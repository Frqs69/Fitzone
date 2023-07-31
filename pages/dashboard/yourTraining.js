import DashboardDesktopNav from "@/components/dashboard/nav/dashboardDesktopNav.component";
import DashboardMobileNav from "@/components/dashboard/nav/dashboardMobileNav.component";
import YourTraining from "@/components/dashboard/yourTraining/youtTraining.component";
import { useSession } from "next-auth/react";
// import { authOptions } from "../api/auth/[...nextauth]";
// import { getServerSession } from "next-auth";

export default function YourTrainingPage() {
	const { data: session, status } = useSession();

	console.log("logged user", session, status);

	return (
		<>
			<DashboardDesktopNav />
			<DashboardMobileNav />
			<YourTraining />
		</>
	);
}

//! Uncomment on end of project for prevent not logged users to view this page
// export async function getServerSideProps(context) {
// 	const session = await getServerSession(context.req, context.res, authOptions);

// 	if (!session) {
// 		return {
// 			redirect: {
// 				destination: `/auth/login`,
// 				permanent: false,
// 			},
// 		};
// 	}

// 	session.user.image = null;
// 	return {
// 		props: {
// 			session,
// 		},
// 	};
// }

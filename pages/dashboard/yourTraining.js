import DashboardDesktopNav from "@/components/dashboard/nav/dashboardDesktopNav.component";
import DashboardMobileNav from "@/components/dashboard/nav/dashboardMobileNav.component";
import YourTraining from "@/components/dashboard/yourTraining/youtTraining.component";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
// import { findUser } from "@/lib/db";
// import { authOptions } from "../api/auth/[...nextauth]";
// import { getServerSession } from "next-auth";

export default function YourTrainingPage() {
	const { data: session, status } = useSession();
	const [user, setUser] = useState();

	useEffect(() => {
		async function fetchData() {
			if (session) {
				try {
					const userData = await fetch("/api/getUserData", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({ email: session.user.email }),
					});

					const res = await userData.json();

					setUser(res.user);

					console.log("User data:", res);
				} catch (error) {
					console.error("Error fetching user data:", error);
				}
			}
		}

		fetchData();

		return () => {};
	}, [session]);

	console.log("logged user", session, status, user);

	return (
		<>
			<DashboardDesktopNav />
			<DashboardMobileNav />
			<YourTraining user={user}/>
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

import Link from "next/link";
import { signOut } from "next-auth/react";

export default function DashboardDesktopNav() {
	const handleLogout = () => {
		signOut();
	};

	return (
		<nav className="hidden md:flex md:relative md:justify-between p-10 bg-black/30 bg-[url('/headerImg.png')]  bg-cover">
			<div className='flex items-center gap-10'>
				<p className='uppercase font-bold text-3xl text-white'>
					Fit<span className='text-orange-400'>zone</span>
				</p>
				<ul className='flex text-white font-bold gap-10 text-xl'>
					<li>
						<Link href='/dashboard/yourTraining'>Your Training</Link>
					</li>
				</ul>
			</div>

			<div>
				<Link
					href='/'
					className='bg-orange-400 text-white text-xl font-bold py-2 px-4 uppercase '
					onClick={handleLogout}>
					Log out
				</Link>
			</div>
		</nav>
	);
}

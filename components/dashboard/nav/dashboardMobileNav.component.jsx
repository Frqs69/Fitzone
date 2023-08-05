import { Icon } from "@iconify/react";
import { useState } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";

export default function DashboardMobileNav() {
	const [isActive, setIsActive] = useState(false);

	const handleActive = () => {
		setIsActive(!isActive);
	};

	const handleLogout = () => {
		signOut();
	};

	return (
		<nav className='relative flex justify-between py-6 px-6 items-center md:hidden bg-black/30'>
			<p className='uppercase font-bold text-2xl text-white'>
				Fit<span className='text-orange-400'>zone</span>
			</p>
			<Icon
				icon='mingcute:menu-fill'
				width={30}
				color='white'
				onClick={handleActive}
			/>
			<div
				className={`fixed top-0 left-0 w-screen h-screen bg-white ${
					isActive ? "translate-x-0" : "translate-x-full"
				} transition-transform duration-300 z-10   text-2xl gap-10 text-right flex flex-col justify-center items-center `}>
				<Icon
					icon='material-symbols:close'
					className='absolute top-5 right-5'
					width={40}
					onClick={handleActive}
				/>

				<Link href='/dashboard/yourTraining' onClick={handleActive}>
					Your Training
				</Link>

				<div className='mt-10'>
					<Link
						href='/'
						className='border border-orange-400 py-2 px-4 ml-4'
						onClick={handleLogout}>
						Log out
					</Link>
				</div>
			</div>
		</nav>
	);
}

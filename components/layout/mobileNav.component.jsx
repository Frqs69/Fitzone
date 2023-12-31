import { Icon } from "@iconify/react";
import { useState } from "react";
import Link from "next/link";

export default function MobileNav() {
	const [isActive, setIsActive] = useState(false);

	const handleActive = () => {
		setIsActive(!isActive);
	};

	return (
		<nav className='relative flex justify-between py-6 px-6 items-center md:hidden'>
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

				<Link href='/' onClick={handleActive}>
					Home
				</Link>

				<Link href='/#plans' onClick={handleActive}>
					Plans
				</Link>

				<Link href='/#trainers' onClick={handleActive}>
					Trainers
				</Link>

				<Link href='/contact' onClick={handleActive}>
					Contact
				</Link>

				<div className='mt-10'>
					<Link
						href='/auth/login'
						className='bg-orange-400  text-white font-bold py-2 px-4 uppercase  '>
						Login
					</Link>
					<Link
						href='/auth/signup'
						className='border border-orange-400 py-2 px-4 ml-4'>
						Sign up
					</Link>
				</div>
			</div>
		</nav>
	);
}

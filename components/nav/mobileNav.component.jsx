import { Icon } from "@iconify/react";
import Link from "next/link";

export default function MobileNav() {
	return (
		<nav className='relative flex justify-between py-6 px-6 items-center'>
			<p className='uppercase font-bold text-2xl text-white'>
				Fit<span className='text-orange-400'>zone</span>
			</p>
			<Icon icon='mingcute:menu-fill' width={30} color='white' />
			<ul className='absolute top-0 left-0 w-full h-full bg-white translate-x-full'>
				<li>
					<a href='#'>Home</a>
				</li>
				<li>
					<a href='#'>About us</a>
				</li>
				<li>
					<a href='#'>Plans</a>
				</li>
				<li>
					<a href='#'>Contact</a>
				</li>
				<li>
					<div>
						<Link href='#'>Login</Link>
						<Link href='#'>Sign up</Link>
					</div>
				</li>
			</ul>
		</nav>
	);
}

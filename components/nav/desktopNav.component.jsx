import Link from "next/link";

export default function DesktopNav() {
	return (
		<nav className='hidden md:flex md:relative md:justify-between p-10'>
			<div className='flex items-center gap-10'>
				<p className='uppercase font-bold text-3xl text-white'>
					Fit<span className='text-orange-400'>zone</span>
				</p>
				<ul className='flex text-white font-bold gap-10 text-xl'>
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
				</ul>
			</div>

			<div>
				<Link
					href='#'
					className='text-white text-xl font-bold py-2 px-4 uppercase '>
					Login
				</Link>
				<Link
					href='#'
					className='bg-orange-400 text-white text-xl font-bold py-2 px-4 uppercase '>
					Sign up
				</Link>
			</div>
		</nav>
	);
}

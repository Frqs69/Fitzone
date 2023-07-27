import Link from "next/link";

export default function DesktopNav() {
	return (
		<nav>
			<div>
				<p>
					Fit<span>zone</span>
				</p>
				<ul>
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
				<Link href='#'>Login</Link>
				<Link href='#'>Sign up</Link>
			</div>
		</nav>
	);
}

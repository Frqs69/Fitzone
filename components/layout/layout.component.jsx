import MobileNav from "./mobileNav.component";
import DesktopNav from "./desktopNav.component";

export default function Layout({ children }) {
	return (
		<div className="bg-[url('/headerImg.png')] bg-cover relative bg-center">
			<div className='absolute top-0 left-0 w-full h-full bg-black/40 '></div>
			<MobileNav />
			<DesktopNav />
			{children}
		</div>
	);
}

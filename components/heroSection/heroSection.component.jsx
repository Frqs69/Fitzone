import Header from "./header/header.component";
import DesktopNav from "./nav/desktopNav.component";
import MobileNav from "./nav/mobileNav.component";

export default function HeroSection() {
	return (
		<div className="bg-[url('/headerImg.png')] bg-cover relative bg-center">
			<div className='absolute top-0 left-0 w-full h-full bg-black/40 '></div>
			<MobileNav />
			<DesktopNav />
			<Header />
		</div>
	);
}

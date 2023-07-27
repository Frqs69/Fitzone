import Header from "@/components/header/header.component";
import MobileNav from "@/components/nav/mobileNav.component";
import WelcomeSection from "@/components/welcomeSection/welcomeSection.component";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<div className="bg-[url('/headerImg.png')] bg-cover relative bg-center">
				<div className='absolute top-0 left-0 w-full h-full bg-black/40 '></div>
				<MobileNav />
				<Header />
			</div>
			<WelcomeSection />
		</>
	);
}

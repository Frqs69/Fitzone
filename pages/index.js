import Header from "@/components/header/header.component";

import MobileNav from "@/components/nav/mobileNav.component";
import PlansSection from "@/components/plansSection/plansSection.component";
import WelcomeSection from "@/components/welcomeSection/welcomeSection.component";
import TrainersSection from "@/components/trenersSection/trainersSection.component";
import FooterSection from "@/components/footer/footerSection.component";

import BreakSection from "@/components/intersection/breakeSection.component";

import { Inter } from "next/font/google";
import DesktopNav from "@/components/nav/desktopNav.component";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<div className="bg-[url('/headerImg.png')] bg-cover relative bg-center">
				<div className='absolute top-0 left-0 w-full h-full bg-black/40 '></div>
				<MobileNav />
				<DesktopNav />
				<Header />
			</div>
			<WelcomeSection />
			<PlansSection />

			<BreakSection
				smText={"We trained with"}
				bgText={"Personal trainer"}
				img={"bg-[url('/interSectionImage.png')]"}
			/>

			<TrainersSection />

			<BreakSection
				smText={"Call us"}
				bgText={"957 547 454"}
				img={"bg-[url('/interSectionImage2.png')]"}
			/>

			<FooterSection />
		</>
	);
}

import Header from "@/components/header/header.component";

import MobileNav from "@/components/nav/mobileNav.component";
import PlansSection from "@/components/plansSection/plansSection.component";
import WelcomeSection from "@/components/welcomeSection/welcomeSection.component";
import InterSection from "@/components/intersection/interSection.component";
import TrainersSection from "@/components/trenersSection/trainersSection.component";
import { Inter } from "next/font/google";
import FooterSection from "@/components/footer/footerSection.component";

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
			<PlansSection />
			<InterSection
				smText={"We trained with"}
				bgText={"Personal trainer"}
				img={"interSectionImage.png"}
			/>
			<TrainersSection />
			<InterSection
				smText={"Call us"}
				bgText={"957 547 454"}
				img={"interSectionImage2.png"}
			/>
			<FooterSection />
		</>
	);
}

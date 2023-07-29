import PlansSection from "@/components/plansSection/plansSection.component";
import WelcomeSection from "@/components/welcomeSection/welcomeSection.component";
import TrainersSection from "@/components/trenersSection/trainersSection.component";
import FooterSection from "@/components/footer/footerSection.component";
import BreakSection from "@/components/intersection/breakeSection.component";
import HeroSection from "@/components/heroSection/heroSection.component";

export default function Home() {
	return (
		<>
			<HeroSection />
			<WelcomeSection />
			<PlansSection />
			<BreakSection
				smText={"We trained with"}
				bgText={"Personal trainer"}
				img={"bg-[url('/interSectionImage.png')]"}
			/>
			<TrainersSection />
			<div className='md:hidden'>
				<BreakSection
					smText={"Call us"}
					bgText={"957 547 454"}
					img={"bg-[url('/interSectionImage2.png')]"}
				/>
			</div>
			<div className='hidden md:grid grid-cols-2 '>
				<BreakSection
					smText={"Try for free"}
					bgText={"Free 7 days pass"}
					img={"bg-[url('/interSectionImage3.png')]"}
				/>
				<BreakSection
					smText={"Call us"}
					bgText={"957 547 454"}
					img={"bg-[url('/interSectionImage2.png')]"}
				/>
			</div>

			<FooterSection />
		</>
	);
}

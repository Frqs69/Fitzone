import { Icon } from "@iconify/react";
import Layout from "@/components/layout/layout.component";
import Contact from "@/components/contactPage/contact.component";
import FooterSection from "@/components/footer/footerSection.component";

import dynamic from "next/dynamic";

export default function ContactPage() {
	const DynamicMap = dynamic(() => import("../../components/map.component"), {
		ssr: false, // Disable server-side rendering
	});
	return (
		<>
			<Layout>
				<h2 className='text-white font-bold relative text-4xl text-center mt-4 mb-10'>
					Hit us up!
				</h2>
				<Contact />
				<div className='p-8'></div>
			</Layout>
			<div className='border-b-4 border-orange-400'>
				<div className='relative'>
					<div className='w-20 h-[2px] bg-orange-400 absolute left-8 top-1/2'></div>
					<h3 className='text-center text-2xl font-bold my-10'>Contact</h3>
					<div className='w-20 h-[2px] bg-orange-400 absolute right-8 top-1/2'></div>
				</div>
				<div className='flex flex-col items-center'>
					<div className='flex items-center gap-4 '>
						<div className='bg-orange-400 rounded-full w-[50px] p-4'>
							<Icon icon='fluent:mail-28-filled' width={20} color={"#fff"} />
						</div>

						<p className='text-lg'>contact@fitzone.pl</p>
					</div>

					<div className='flex items-center gap-4 mr-6 mt-4 mb-16'>
						<div className='bg-orange-400 rounded-full w-[50px] p-4'>
							<Icon icon='heroicons:phone-solid' width={20} color={"#fff"} />
						</div>
						<p className='text-lg'>+48 123 123 123</p>
					</div>
				</div>
			</div>
			<div className='w-[400] h-[400px] overflow-hidden'>
				<DynamicMap />
			</div>
			<FooterSection />
		</>
	);
}

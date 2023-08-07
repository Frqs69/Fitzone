import Layout from "@/components/layout/layout.component";
import Contact from "@/components/contactPage/contact.component";

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
			<div className='w-[400] h-[400px] overflow-hidden'>
				<DynamicMap />
			</div>
		</>
	);
}

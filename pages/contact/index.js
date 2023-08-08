import { useRef } from "react";
import { Icon } from "@iconify/react";
import Layout from "@/components/layout/layout.component";
import Contact from "@/components/contactPage/contact.component";
import FooterSection from "@/components/footer/footerSection.component";

import dynamic from "next/dynamic";

export default function ContactPage() {
	const ref = useRef();

	const handleClick = () => {
		ref.current?.scrollIntoView({ behavior: "smooth" });
	};

	const DynamicMap = dynamic(() => import("../../components/map.component"), {
		ssr: false, // Disable server-side rendering
	});

	return (
		<>
			<Layout>
				<h2 className='text-white font-bold relative text-4xl text-center mt-4 mb-10 md:text-5xl'>
					Hit us up!
				</h2>
				<Contact />
				<div className='p-8  md:p-10  relative' onClick={handleClick}>
					<Icon
						icon='fluent:ios-arrow-24-regular'
						color='white'
						width={80}
						rotate={1}
						className='mx-auto hidden md:block hover:scale-110 cursor-pointer transition-transform duration-300'
					/>
				</div>
			</Layout>
			<div className='md:flex ' ref={ref}>
				<div className='md:w-6/12 '>
					<div className='relative'>
						<div className='w-20 h-[2px] bg-orange-400 absolute left-8 top-1/2 md:w-4/12'></div>
						<h3 className='text-center text-2xl font-bold my-10 md:text-3xl'>
							Contact
						</h3>
						<div className='w-20 h-[2px] bg-orange-400 absolute right-8 top-1/2 md:w-4/12'></div>
					</div>
					<div className='flex flex-col  w-3/5 mx-auto md:w-2/5 md:pt-10 md:max-w-[400px]'>
						<div className='flex items-center gap-4 md:gap-8'>
							<div className='bg-orange-400 rounded-full w-[50px] p-4 '>
								<Icon icon='fluent:mail-28-filled' width={20} color={"#fff"} />
							</div>

							<a
								href='mailto:contact@fitzone.pl'
								className='text-lg md:text-3xl hover:text-orange-400 transition-colors duration-300'>
								contact@fitzone.pl
							</a>
						</div>

						<div className='flex items-center gap-4  mt-4 mb-16 md:mt-10 md:gap-8'>
							<div className='bg-orange-400 rounded-full w-[50px] p-4'>
								<Icon
									icon='heroicons:phone-solid'
									width={20}
									color={"#fff"}
									className='w-5'
								/>
							</div>
							<p className='text-lg md:text-3xl'>+48 123 123 123</p>
						</div>
					</div>
				</div>
				<div className='w-[400px] h-[400px] overflow-hidden border-y-4 md:border-l-4 border-orange-400 md:w-6/12 md:h-[400px]'>
					<DynamicMap />
				</div>
			</div>
			<FooterSection />
		</>
	);
}

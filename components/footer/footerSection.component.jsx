import { Icon } from "@iconify/react";
export default function FooterSection() {
	return (
		<footer className='bg-black p-10  ' id='contact'>
			<div className='md:w-3/5 md:m-auto md:min-w-[1024px] md:flex md:justify-between'>
				<div className='md:w-4/12'>
					<h2 className='uppercase font-bold text-2xl text-white mb-6 md:text-3xl md:mb-10'>
						Fit<span className='text-orange-400'>zone</span>
					</h2>
					<p className='text-white/70 mb-6 md:text-lg md:mb-10'>
						Step into a world of inspiration and transformation, where every
						drop of sweat is a step toward your goals. Our state-of-the-art
						facilities, experienced trainers, and vibrant community are here to
						support you on your fitness journey.
					</p>
					<div className='flex items-center md:mb-10'>
						<p className='text-white md:text-xl'>Follow us:</p>
						<ul className='flex gap-6 ml-10'>
							<li>
								<a href='#'>
									<Icon
										icon='akar-icons:facebook-fill'
										color='white'
										className='md:text-2xl'
									/>
								</a>
							</li>
							<li>
								<a href='#'>
									<Icon
										icon='bi:twitter'
										color='white'
										className='md:text-2xl'
									/>
								</a>
							</li>
							<li>
								<a href='#'>
									<Icon
										icon='bi:instagram'
										color='white'
										className='md:text-2xl'
									/>
								</a>
							</li>
						</ul>
					</div>
					<form action='' className='flex mt-6'>
						<input
							type='text'
							className='p-1 w-3/5 text-sm md:text-lg md:pl-2'
							placeholder='Your email'
						/>
						<button className='bg-orange-400 w-2/5  text-white font-bold p-1 text-sm md:text-lg'>
							Subscribe
						</button>
					</form>
				</div>
				<div className='hidden md:block text-white/70 md:w-4/12'>
					<h3 className='text-xl mb-8'>Blogs</h3>
					<div className='flex flex-col gap-8'>
						<a href='#' className='flex items-center gap-6'>
							<img src='/footer/blogs1.png' alt='' />
							<p>
								Unleash the Power of HIIT Workouts: Elevate Your Fitness Game!
							</p>
						</a>
						<a href='#' className='flex items-center gap-6'>
							<img src='/footer/blogs2.png' alt='' />
							<p>
								Mindful Muscle Recovery: The Art of Healing After Intense
								Workouts
							</p>
						</a>
						<a href='#' className='flex items-center gap-6'>
							<img src='/footer/blogs3.png' alt='' />
							<p>
								Nutrition Hacks for Peak Performance: Fueling Your Fitness
								Ambitions
							</p>
						</a>
					</div>
				</div>
				<div className='hidden md:block text-white/70 '>
					<h3 className='text-xl mb-8'>Instagram</h3>
					<div className='grid grid-cols-3 gap-1 mb-4'>
						<img src='/footer/inst1.png' alt='' />
						<img src='/footer/inst2.png' alt='' />
						<img src='/footer/inst3.png' alt='' />
						<img src='/footer/inst4.png' alt='' />
						<img src='/footer/inst5.png' alt='' />
						<img src='/footer/inst6.png' alt='' />
						<img src='/footer/inst7.png' alt='' />
						<img src='/footer/inst8.png' alt='' />
						<img src='/footer/inst9.png' alt='' />
					</div>
					<a href='#'>View more photos</a>
				</div>
			</div>
		</footer>
	);
}

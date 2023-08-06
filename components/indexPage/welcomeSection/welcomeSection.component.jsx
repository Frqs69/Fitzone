export default function WelcomeSection() {
	return (
		<section className='bg-[#f1f4f6] pt-56 px-4 md:pt-96 md:pb-32' id='about'>
			<div className='md:w-3/5 md:m-auto md:min-w-[1024px] md:flex md:flex-row-reverse '>
				<img src='sectionWelcome.png' alt='' className='md:h-[40em]' />
				<div className='md:flex md:flex-col md:justify-center md:pr-52'>
					<h2 className='font-bold text-3xl my-6 uppercase md:text-4xl'>
						Welcome to <span className='text-orange-400'>Fitzone</span>
					</h2>
					<p className='mb-6 md:text-lg'>
						Step into a world of inspiration and transformation, where every
						drop of sweat is a step toward your goals. Our state-of-the-art
						facilities, experienced trainers, and vibrant community are here to
						support you on your fitness journey.
					</p>
					<p className='text-black/70 '>
						Whether you're a seasoned athlete or taking your first steps toward
						wellness, we're dedicated to helping you achieve greatness. Get
						ready to embrace the challenge, push your limits, and discover the
						true potential that lies within you. Join us today and let's embark
						on this exciting path to a better you!
					</p>
					<button className='bg-orange-400 text-white font-bold py-2 px-4 uppercase my-6 mb-14 md:w-2/5 md:mt-10'>
						Get in touch
					</button>
				</div>
			</div>
		</section>
	);
}

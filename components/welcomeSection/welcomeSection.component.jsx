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
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim minus
						fugiat dignissimos ullam culpa harum adipisci aliquid, asperiores, a
						fuga inventore reiciendis quia beatae soluta corrupti tempora
						consequuntur sed sint.
					</p>
					<p className='text-black/70 '>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
						dignissimos illo tempora quo eligendi eum, quidem repudiandae at
						voluptatem, aliquam unde quam eaque ea labore nemo vero debitis!
						Alias, maxime.
					</p>
					<button className='bg-orange-400 text-white font-bold py-2 px-4 uppercase my-6 mb-14 md:w-2/5 md:mt-10'>
						Get in touch
					</button>
				</div>
			</div>
		</section>
	);
}

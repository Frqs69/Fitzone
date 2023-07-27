export default function WelcomeSection() {
	return (
		<section className='bg-green-200 pt-56 px-4'>
			<img src='sectionWelcome.png' alt='' />
			<div>
				<h2 className='font-bold text-3xl my-6'>
					Welcome to <span className='text-orange-400'>Fitzone</span>
				</h2>
				<p className='mb-6'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim minus
					fugiat dignissimos ullam culpa harum adipisci aliquid, asperiores, a
					fuga inventore reiciendis quia beatae soluta corrupti tempora
					consequuntur sed sint.
				</p>
				<p className='text-black/50'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
					dignissimos illo tempora quo eligendi eum, quidem repudiandae at
					voluptatem, aliquam unde quam eaque ea labore nemo vero debitis!
					Alias, maxime.
				</p>
			</div>
			<button className='bg-orange-400 text-white font-bold py-2 px-4 uppercase my-6 mb-14'>
				Get in touch
			</button>
		</section>
	);
}

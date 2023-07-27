export default function InterSection() {
	return (
		<div className="bg-[url('/interSectionImage.png')] bg-cover relative bg-center text-center">
			<div className='absolute top-0 left-0 w-full h-full bg-black/40 z-0'></div>
			<p className='uppercase relative text-white'>We trained with</p>
			<h3 className='uppercase font-bold text-2xl'>Personal trainer</h3>
			<button className='bg-orange-400 text-white font-bold py-2 px-4 uppercase my-6 mb-14 '>
				Get in touch
			</button>
		</div>
	);
}

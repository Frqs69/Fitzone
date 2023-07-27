export default function BreakSection({ img, smText, bgText }) {
	return (
		<div
			className={`${img} bg-cover relative bg-center text-center pt-10 md:p-40`}>
			<div className='absolute top-0 left-0 w-full h-full bg-black/50 z-0'></div>
			<p className='uppercase relative text-white md:text-3xl md:mb-5'>
				{smText}
			</p>
			<h3 className='uppercase font-bold text-2xl relative text-white md:text-6xl md:mb-5'>
				{bgText}
			</h3>
			<button className='bg-orange-400 relative text-white font-bold py-2 px-4 uppercase my-6 mb-10 md:text-xl md:py-3 md:px-8'>
				Get in touch
			</button>
		</div>
	);
}

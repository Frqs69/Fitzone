export default function PlanItem({ img, title, description }) {
	return (
		<div className='mb-10 md:w-4/12'>
			<img src={img} alt='' className='' />
			<div className='pt-8 px-6 bg-[#f1f4f6] '>
				<h3 className='font-bold text-2xl mb-6 md:text-3xl'>{title}</h3>
				<p className='mb-4'>{description}</p>
				<button className='bg-orange-400 text-white font-bold py-2 px-4 uppercase my-6 mb-14 md:px-6 md:text-lg'>
					Get in touch
				</button>
			</div>
		</div>
	);
}

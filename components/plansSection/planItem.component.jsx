export default function PlanItem({ img, title, description }) {
	return (
		<div className='mb-10'>
			<img src={img} alt='' />
			<div className='pt-8 px-6 bg-slate-200 '>
				<h3 className='font-bold text-2xl mb-6'>{title}</h3>
				<p className='mb-4'>{description}</p>
				<button className='bg-orange-400 text-white font-bold py-2 px-4 uppercase my-6 mb-14'>
					Get in touch
				</button>
			</div>
		</div>
	);
}

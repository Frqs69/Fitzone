export default function TrainersItem({ img, name, title, description }) {
	return (
		<div className='text-center mb-16'>
			<img src={`/${img}`} alt='' className='h-72 mx-auto' />
			<h3 className='font-bold mt-6 text-2xl'>{name}</h3>
			<p className='text-orange-400 font-bold text-sm mb-6'>{title}</p>
			<p className='mb-6 px-12'>{description}</p>
		</div>
	);
}

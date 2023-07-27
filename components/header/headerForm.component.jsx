export default function HeaderForm() {
	return (
		<div className='bg-white  p-4 -mb-44 shadow-xl mt-8 md:flex md:p-0 md:mt-40 md:-mb-80'>
			<img src='/headerFormImg.png' alt='' className='hidden md:block' />
			<div className='md:flex md:justify-center md:flex-col md:items-center md:w-full md:px-20'>
				<h3 className='text-center uppercase font-bold mt-4 md:text-2xl'>
					Free 7 days
				</h3>
				<h2 className='text-center uppercase font-bold text-3xl mt-2 mb-6 md:text-4xl md:mb-16'>
					Online booking
				</h2>

				<form action='' className=''>
					<div className='w-full grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8'>
						<select className='bg-white border-black/50 border-b px-1 py-2'>
							<option value=''>1 person</option>
							<option value=''>2 persons</option>
							<option value=''>3 persons</option>
							<option value=''>4 persons</option>
						</select>
						<input
							type='date'
							className='border-black/50  border-b px-1 py-2'
						/>
						<input
							type='time'
							className='border-black/50  border-b px-1 py-2'
						/>

						<input
							type='text'
							placeholder='Name'
							className='border-black/50  border-b px-1 py-2'
						/>
						<input
							type='number'
							className='border-black/50  border-b px-1 py-2'
							placeholder='Phone'
						/>
						<input
							type='email'
							className='border-black/50  border-b px-1 py-2'
							placeholder='Email'
						/>
					</div>

					<div className='w-full text-center mb-6 mt-10'>
						<button className='bg-orange-400 text-white font-bold py-2 px-4 uppercase hover:bg-orange-500 transition-colors duration-300 md:px-8 md:py-3 md:mt-10'>
							Get in touch
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

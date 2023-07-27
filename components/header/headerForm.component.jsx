export default function HeaderForm() {
	return (
		<div className='bg-white  p-4 -mb-44 shadow-xl mt-8'>
			<h3 className='text-center font-bold mt-4'>Free 7 days</h3>
			<h2 className='text-center font-bold text-3xl mt-2 mb-6'>
				Online booking
			</h2>

			<form action='' className=''>
				<div className='w-full grid grid-cols-2 gap-4'>
					<select className='bg-white border-black/50 border-b px-1 py-2'>
						<option value=''>1</option>
						<option value=''>2</option>
						<option value=''>3</option>
						<option value=''>4</option>
					</select>
					<input type='date' className='border-black/50  border-b px-1 py-2' />
					<input type='time' className='border-black/50  border-b px-1 py-2' />

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
					<button className='bg-orange-400 text-white font-bold py-2 px-4 uppercase '>
						Get in touch
					</button>
				</div>
			</form>
		</div>
	);
}
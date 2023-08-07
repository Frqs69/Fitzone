export default function Contact() {
	return (
		<div className='bg-white relative mx-7  md:w-3/5 md:m-auto md:min-w-[1024px]'>
			<form action='' className='pt-8 px-6 '>
				<div className='mb-6'>
					<label htmlFor='name' className='text-xl font-bold '>
						Your Name
					</label>
					<input
						type='text'
						id='name'
						className='border-2 w-full mt-4 text-xl pl-2 py-1'
					/>
				</div>
				<div className='mb-6'>
					<label htmlFor='email' className='text-xl font-bold'>
						Your Email
					</label>
					<input
						type='email'
						id='email'
						className='border-2 w-full mt-4 text-xl pl-2 py-1'
					/>
				</div>
				<div>
					<label htmlFor='message' className='text-xl font-bold'>
						Your Message
					</label>
					<textarea
						name='message'
						id='message'
						className='border-2 w-full mt-4 text-xl pl-2 py-1 h-40'></textarea>
				</div>
				<button className='bg-orange-400 text-white font-bold  mt-10 mb-10 py-2 px-4 w-full uppercase  md:w-2/5 md:mt-10'>
					Send message
				</button>
			</form>
		</div>
	);
}

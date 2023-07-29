import Link from "next/link";
export default function SignUpPage() {
	return (
		<div className="bg-[url('/headerImg.png')] bg-cover relative bg-center h-screen">
			<div className='absolute top-0 left-0 w-full h-full bg-black/40 '></div>
			<div className='w-full h-full flex justify-center items-center relative'>
				<div className='bg-white p-4 md:p-10 md:w-3/12'>
					<div className='uppercase font-bold text-3xl text-center mb-6 md:text-4xl md:mb-10'>
						<Link href='/'>
							{" "}
							Fit<span className='text-orange-400'>zone</span>
						</Link>
					</div>
					<form>
						<div className='flex flex-col my-4'>
							<label
								htmlFor='name'
								className='font-bold text-lg mb-2 md:text-2xl md:mb-4'>
								Name<span className='font-normal '>*</span>
							</label>
							<input
								type='text'
								id='name'
								className='border text-lg py-1 px-2'
								required
							/>
						</div>
						<div className='flex flex-col my-4'>
							<label
								htmlFor='login'
								className='font-bold text-lg mb-2 md:text-2xl md:mb-4'>
								Login<span className='font-normal '>*</span>
							</label>
							<input
								type='text'
								id='login'
								className='border text-lg py-1 px-2'
								required
							/>
						</div>
						<div className='flex flex-col my-4'>
							<label
								htmlFor='email'
								className='font-bold text-lg mb-2 md:text-2xl md:mb-4'>
								Email<span className='font-normal '>*</span>
							</label>
							<input
								type='email'
								id='email'
								className='border text-lg py-1 px-2'
								required
							/>
						</div>
						<div className='flex flex-col my-4'>
							<label
								htmlFor='password'
								className='font-bold text-lg my-2 md:text-2xl md:mb-4'>
								Password<span className='font-normal '>*</span>
							</label>
							<input
								type='password'
								id='password'
								className='border text-lg py-1 px-2'
								required
							/>
						</div>
						<div className='flex flex-col my-6'>
							<label
								htmlFor='passwordRepeat'
								className='font-bold text-lg my-2 md:text-2xl md:mb-4'>
								Repeat Password<span className='font-normal '>*</span>
							</label>
							<input
								type='password'
								id='passwordRepeat'
								className='border text-lg py-1 px-2'
								required
							/>
						</div>
						<Link
							href='/auth/login'
							className='text-orange-500 text-sm font-bold'>
							Have account? Log in
						</Link>
						<div className='mt-6 flex justify-between  md:mt-10'>
							<Link href='/' className='py-2 px-4  uppercase border md:text-xl'>
								Back
							</Link>
							<button
								type='submit'
								className='bg-orange-400 text-white  font-bold py-2 px-4 uppercase md:text-xl'>
								Sign Up
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

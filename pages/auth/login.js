import Link from "next/link";
export default function LoginPage() {
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
						<div className='flex flex-col'>
							<label
								htmlFor='login'
								className='font-bold text-lg mb-2 md:text-2xl md:mb-4'>
								Email
							</label>
							<input
								type='email'
								id='login'
								className='border text-lg py-1 px-2'
								required
							/>
						</div>
						<div className='flex flex-col my-4'>
							<label
								htmlFor='login'
								className='font-bold text-lg my-2 md:text-2xl md:mb-4'>
								Password
							</label>
							<input
								type='password'
								id='password'
								className='border text-lg py-1 px-2'
								required
							/>
						</div>
						<div className='flex flex-col gap-4'>
							<Link
								href='/auth/forgotpassword'
								className='text-orange-400 text-sm'>
								Forgot your password?
							</Link>
							<Link
								href='/auth/signup'
								className='text-orange-500 text-sm font-bold'>
								Dont have account? Create one
							</Link>
						</div>
						<div className='mt-4 flex justify-between md:mt-10'>
							<Link href='/' className='py-2 px-4  uppercase border md:text-xl'>
								Back
							</Link>
							<button
								type='submit'
								className='bg-orange-400 text-white  font-bold py-2 px-4 uppercase md:text-xl'>
								Login
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

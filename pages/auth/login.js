import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState, useRef } from "react";
// import { getServerSession } from "next-auth";
// import { authOptions } from "../api/auth/[...nextauth]";

export default function LoginPage() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const router = useRouter();

	const submitHandler = async (e) => {
		e.preventDefault();

		const enteredEmail = emailRef.current.value;
		const enteredPassword = passwordRef.current.value;

		const result = await signIn("credentials", {
			redirect: false,
			email: enteredEmail,
			password: enteredPassword,
		});

		if (!result.error) {
			router.replace("/dashboard/yourTraining");
		}

		console.log(result.error);
	};

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
					<form onSubmit={submitHandler}>
						<div className='flex flex-col'>
							<label
								htmlFor='email'
								className='font-bold text-lg mb-2 md:text-2xl md:mb-4'>
								Email
							</label>
							<input
								type='email'
								id='email'
								className='border text-lg py-1 px-2'
								required
								ref={emailRef}
							/>
						</div>
						<div className='flex flex-col my-4'>
							<label
								htmlFor='password'
								className='font-bold text-lg my-2 md:text-2xl md:mb-4'>
								Password
							</label>
							<input
								type='password'
								id='password'
								className='border text-lg py-1 px-2'
								required
								ref={passwordRef}
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

//! Uncomment on end of project for prevent not logged users to view this page
// export async function getServerSideProps(context) {
// 	const session = await getServerSession(context.req, context.res, authOptions);

// 	console.log(session);

// 	if (!session) {
// 		return {
// 			props: {
// 				message: "no session",
// 			},
// 		};
// 	}

// 	session.user.image = null;
// 	return {
// 		redirect: {
// 			destination: `/dashboard/yourTraining`,
// 			permanent: false,
// 		},
// 		props: {
// 			session,
// 		},
// 	};
// }

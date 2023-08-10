import Link from "next/link";
import { useRef, useState } from "react";
import { createUser } from "@/lib/createUser";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";

export default function SignUpPage() {
	const router = useRouter();

	const nameRef = useRef();
	const loginRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();

	const [errorField, setErrorField] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	console.log(errorField);

	const submitHandler = async (e) => {
		e.preventDefault();

		const name = nameRef.current.value;
		const login = loginRef.current.value;
		const email = emailRef.current.value;
		const password = passwordRef.current.value;
		const passwordConfirm = passwordConfirmRef.current.value;

		console.log(name, login, email, password, passwordConfirm);

		try {
			const res = await createUser(
				name,
				login,
				email,
				password,
				passwordConfirm
			);
		} catch (err) {
			console.log(err.data);
			setErrorField(err.data.wrongField);
			setErrorMessage(err.data.message);
			return;
		}

		const result = await signIn("credentials", {
			redirect: false,
			email: email,
			password: password,
		});

		if (!result.error) {
			router.replace("/dashboard/yourTraining");
		}
	};

	const handleClearError = () => {
		setErrorField("");
	};

	return (
		<div className="bg-[url('/headerImg.png')] bg-cover relative bg-center h-screen ">
			<div className='absolute top-0 left-0 w-full h-full bg-black/40 '></div>
			<div className='w-full h-full flex justify-center items-center relative'>
				<div className='bg-white p-4  md:p-10 md:w-3/12 '>
					<div className='uppercase font-bold text-3xl text-center mb-6 md:text-4xl md:mb-10'>
						<Link href='/'>
							{" "}
							Fit<span className='text-orange-400'>zone</span>
						</Link>
					</div>
					<form onSubmit={submitHandler}>
						<div className='flex flex-col my-4'>
							<label
								htmlFor='name'
								className='font-bold text-lg mb-2 md:text-2xl md:mb-4'>
								Name<span className='font-normal '>*</span>
							</label>
							<input
								type='text'
								id='name'
								className={`border text-lg py-1 px-2 ${
									errorField === "all" && "border-red-600"
								} focus:border-orange-400  focus:outline-none`}
								required
								ref={nameRef}
								onChange={handleClearError}
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
								className={`border text-lg py-1 px-2 ${
									errorField === "all" && "border-red-600"
								} focus:border-orange-400  focus:outline-none`}
								required
								ref={loginRef}
								onChange={handleClearError}
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
								className={`border text-lg py-1 px-2 ${
									errorField === "email" && "border-red-600"
								} ${
									errorField === "all" && "border-red-600"
								} focus:border-orange-400  focus:outline-none`}
								required
								ref={emailRef}
								onChange={handleClearError}
							/>
							{errorField === "email" && (
								<p className='mt-4 text-red-600 font-bold text-sm'>
									{errorMessage}
								</p>
							)}
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
								className={`border text-lg py-1 px-2 ${
									(errorField === "password" && "border-red-600") ||
									(errorField === "passwordLength" && "border-red-600")
								} ${
									errorField === "all" && "border-red-600"
								} focus:border-orange-400  focus:outline-none`}
								required
								ref={passwordRef}
								onChange={handleClearError}
							/>
							{errorField === "password" ||
								(errorField === "passwordLength" && (
									<p className='mt-4 text-red-600 font-bold text-sm'>
										{errorMessage}
									</p>
								))}
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
								className={`border text-lg py-1 px-2 ${
									errorField === "password" && "border-red-600"
								} ${
									errorField === "all" && "border-red-600"
								} focus:border-orange-400  focus:outline-none`}
								required
								ref={passwordConfirmRef}
								onChange={handleClearError}
							/>
							{errorField === "password" && (
								<p className='mt-4 text-red-600 font-bold text-sm'>
									{errorMessage}
								</p>
							)}
						</div>
						{errorField === "all" && (
							<p className='mt-4 mb-4 text-red-600 font-bold'>
								Please fill all fields
							</p>
						)}
						<Link
							href='/auth/login'
							className='text-orange-500 text-sm font-bold'>
							Have account? Log in
						</Link>
						<div className='mt-6 flex justify-between  md:mt-10'>
							<Link
								href='/'
								className='py-2 px-4  uppercase border md:text-xl hover:border-orange-400  transition-colors duration-300'>
								Back
							</Link>
							<button
								type='submit'
								className='bg-orange-400 text-white  font-bold py-2 px-4 uppercase md:text-xl hover:bg-orange-500 transition-colors duration-300'>
								Sign Up
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

//! Uncomment on end of project for prevent not logged users to view this page
export async function getServerSideProps(context) {
	const session = await getServerSession(context.req, context.res, authOptions);

	if (!session) {
		return {
			props: {
				message: "no session",
			},
		};
	}

	session.user.image = null;
	return {
		redirect: {
			destination: `/dashboard/yourTraining`,
			permanent: false,
		},
		props: {
			session,
		},
	};
}

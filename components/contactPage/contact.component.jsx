import { useRef, useState } from "react";
import { sendContactForm } from "@/lib/sendContactForm";

export default function Contact() {
	const nameRef = useRef();
	const emailRef = useRef();
	const messageRef = useRef();
	const [emailSent, setEmailSent] = useState(false);
	const [emailStatus, setEmailStatus] = useState();
	const [emailStatusMessage, setEmailStatusMessage] = useState();
	const [loadingState, setLoadingState] = useState(false);

	const handleSendMessage = async (e) => {
		e.preventDefault();
		const name = nameRef.current.value;
		const email = emailRef.current.value;
		const message = messageRef.current.value;

		setLoadingState(!loadingState);

		let res;

		try {
			res = await sendContactForm(name, email, message);
			setEmailSent(!emailSent);
			setEmailStatus(res.status);
			setEmailStatusMessage(res.message);
			nameRef.current.value = "";
			emailRef.current.value = "";
			messageRef.current.value = "";
		} catch (err) {
			setEmailSent(!emailSent);
			setEmailStatus("error");
			setEmailStatusMessage(err.data.message);
		}

		setTimeout(() => {
			setEmailSent(false);
			setLoadingState(false);
		}, 3000);
	};

	return (
		<div className='bg-white relative mx-7  md:w-1/5 md:m-auto md:min-w-[600px] '>
			{emailSent && (
				<div className='absolute bottom-0 left-0 w-full  flex  items-end bg-white'>
					<p
						className={`${
							emailStatus === "success" ? "bg-green-500" : "bg-red-600"
						} text-center text-2xl text-white py-4  w-full`}>
						{emailStatusMessage}
					</p>
				</div>
			)}

			<form action='' className='pt-8 px-6 ' onSubmit={handleSendMessage}>
				<div className='mb-6'>
					<label htmlFor='name' className='text-xl font-bold '>
						Your Name
					</label>
					<input
						type='text'
						id='name'
						className='border-2 w-full mt-4 text-xl pl-2 py-1 focus:border-orange-400  focus:outline-none'
						ref={nameRef}
					/>
				</div>
				<div className='mb-6'>
					<label htmlFor='email' className='text-xl font-bold'>
						Your Email
					</label>
					<input
						type='email'
						id='email'
						className='border-2 w-full mt-4 text-xl pl-2 py-1 focus:border-orange-400  focus:outline-none'
						ref={emailRef}
					/>
				</div>
				<div>
					<label htmlFor='message' className='text-xl font-bold'>
						Your Message
					</label>
					<textarea
						name='message'
						id='message'
						className='border-2 w-full mt-4 text-xl pl-2 py-1 h-40 focus:border-orange-400  focus:outline-none'
						ref={messageRef}></textarea>
				</div>
				<div className='md:text-center'>
					{loadingState && (
						<p className='font-bold text-center pb-10  mt-10  py-2 px-4 w-full uppercase  md:mt-8 md:py-8'>
							Sending...
						</p>
					)}
					{!loadingState && (
						<button className='bg-orange-400 text-white font-bold  mt-10 mb-10 py-2 px-4 w-full uppercase  md:w-2/5 md:mt-10 '>
							Send message
						</button>
					)}
				</div>
			</form>
		</div>
	);
}

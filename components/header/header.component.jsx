import HeaderForm from "./headerForm.component";
export default function Header() {
	return (
		<header className='relative p-6'>
			<h1 className='font-bold text-white text-3xl my-4'>
				Make your body <span className='text-orange-400'>Beautiful</span>
			</h1>
			<p className='text-white my-6 text-lg'>
				Lorem ipsum dolor sit amet consectetur.
			</p>

			<button className='bg-orange-400 text-white font-bold py-2 px-4 uppercase my-6'>
				Get in touch
			</button>

			<HeaderForm />
		</header>
	);
}

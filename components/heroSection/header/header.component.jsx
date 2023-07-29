import HeaderForm from "./headerForm.component";
export default function Header() {
	return (
		<header className='relative p-6 md:w-3/5 md:m-auto md:min-w-[1024px]'>
			<h1 className='font-bold uppercase text-white text-3xl my-4 md:text-7xl md:grid md:mt-32'>
				Make your body <span className='text-orange-400'>Beautiful</span>
			</h1>
			<p className='text-white my-6 text-lg md:text-2xl md:my-10'>
				Lorem ipsum dolor sit amet consectetur.
			</p>

			<button className='bg-orange-400 text-white font-bold py-2 px-4 uppercase my-6 md:text-xl md:px-8 md:py-4'>
				Get in touch
			</button>

			<HeaderForm />
		</header>
	);
}

import { Icon } from "@iconify/react";
export default function FooterSection() {
	return (
		<footer className='bg-black p-10'>
			<h2 className='uppercase font-bold text-2xl text-white mb-6'>
				Fit<span className='text-orange-400'>zone</span>
			</h2>
			<p className='text-white/70 mb-6'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
				quis eaque vitae ut culpa provident beatae accusantium aliquid non
				dolorem delectus, ipsum hic obcaecati tempore iusto? Porro sint enim
				inventore.
			</p>
			<div className='flex items-center'>
				<p className='text-white'>Follow us:</p>
				<ul className='flex gap-6 ml-10'>
					<li>
						<a href='#'>
							<Icon icon='akar-icons:facebook-fill' color='white' />
						</a>
					</li>
					<li>
						<a href='#'>
							<Icon icon='bi:twitter' color='white' />
						</a>
					</li>
					<li>
						<a href='#'>
							<Icon icon='bi:instagram' color='white' />
						</a>
					</li>
				</ul>
			</div>
			<form action='' className='flex mt-6'>
				<input type='text' className='p-1 w-3/5 text-sm' />
				<button className='bg-orange-400 w-2/5  text-white font-bold p-1 text-sm'>
					Subscribe
				</button>
			</form>
		</footer>
	);
}

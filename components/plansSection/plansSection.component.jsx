import PlansList from "./plansList.component";

export default function PlansSection() {
	return (
		<section
			className='px-4 mt-16 md:w-3/5 md:m-auto md:min-w-[1024px]'
			id='plans'>
			<h2 className='font-bold text-3xl my-6 md:mt-16 md:text-4xl uppercase'>
				Welcome to <span className='text-orange-400'>Fitzone</span>
			</h2>
			<p className='mb-10 text-black/70 md:mb-20'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim minus
				fugiat dignissimos ullam culpa harum adipisci aliquid.
			</p>
			<PlansList />
		</section>
	);
}

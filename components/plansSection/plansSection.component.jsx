import PlansList from "./plansList.component";

export default function PlansSection() {
	return (
		<section
			className='px-4 mt-16 md:w-3/5 md:m-auto md:min-w-[1024px]'
			id='plans'>
			<h2 className='font-bold text-3xl my-6 md:mt-16 md:text-4xl uppercase'>
				Check <span className='text-orange-400'>Fitzone</span> activities
			</h2>
			<p className='mb-10 text-black/70 md:mb-20 md:text-xl'>
				Explore a wide range of dynamic fitness activities, from heart-pounding
				cardio sessions to muscle-building strength training
			</p>
			<PlansList />
		</section>
	);
}

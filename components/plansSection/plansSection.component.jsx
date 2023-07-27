import PlansList from "./plansList.component";

export default function PlansSection() {
	return (
		<section className='px-4'>
			<h2 className='font-bold text-3xl my-6'>
				Welcome to <span className='text-orange-400'>Fitzone</span>
			</h2>
			<p className='mb-10'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim minus
				fugiat dignissimos ullam culpa harum adipisci aliquid.
			</p>
			<PlansList />
		</section>
	);
}

import TrainersList from "./trainersList.component";
export default function TrainersSection() {
	return (
		<section className='px-4'>
			<h2 className='font-bold text-3xl my-6'>
				Expert <span className='text-orange-400'>Trainers</span>
			</h2>
			<p className='mb-10'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim minus
				fugiat dignissimos ullam culpa harum adipisci aliquid.
			</p>
			<TrainersList />
		</section>
	);
}

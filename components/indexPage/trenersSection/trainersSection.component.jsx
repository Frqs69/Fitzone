import TrainersList from "./trainersList.component";
export default function TrainersSection() {
	return (
		<section
			className='px-4 mt-16 md:w-3/5 md:m-auto md:min-w-[1024px]'
			id='trainers'>
			<h2 className='font-bold text-3xl my-6 md:mt-16 md:text-4xl uppercase'>
				Expert <span className='text-orange-400'>Trainers</span>
			</h2>
			<p className='mb-10 text-black/70 md:mb-20 md:text-xl'>
				Our team of expert trainers is dedicated to guiding you toward your
				fitness goals with precision and passion.
			</p>
			<TrainersList />
		</section>
	);
}

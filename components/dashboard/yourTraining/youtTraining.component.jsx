import YourTrainingExerciseCollection from "./yourTrainingExerciseCollection.component";

export default function YourTraining({ user }) {
	// console.log("user from your training", user.upperBodyExercises);
	if (!user) {
		return <div>Loading...</div>;
	}

	//exerciseCollection - ['upperBodyExercises', 'lowerBodyExercises', 'fullBodyExercises']

	return (
		<section className='p-4 md:w-3/5 md:mx-auto md:min-w-[1024px]'>
			<h2 className='text-3xl font-bold mb-4 md:mt-8 md:text-5xl md:mb-12'>
				Your Training
			</h2>

			<YourTrainingExerciseCollection
				exerciseCollection='upperBodyExercises'
				exerciseData={user.exercises.upperBodyExercises}
				user={user}
			/>
			<YourTrainingExerciseCollection
				exerciseCollection='lowerBodyExercises'
				exerciseData={user.exercises.lowerBodyExercises}
				user={user}
			/>
			<YourTrainingExerciseCollection
				exerciseCollection='fullBodyExercises'
				exerciseData={user.exercises.fullBodyExercises}
				user={user}
			/>
		</section>
	);
}

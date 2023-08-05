import YourTrainingExerciseCollection from "./yourTrainingExerciseCollection.component";

export default function YourTraining({ user }) {
	// console.log("user from your training", user.upperBodyExercises);
	if (!user) {
		return <div>Loading...</div>;
	}

	//exerciseCollection - ['upperBodyExercises', 'lowerBodyExercises', 'fullBodyExercises']

	return (
		<section className='p-4'>
			<h2 className='text-3xl font-bold mb-4'>Your Training</h2>
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

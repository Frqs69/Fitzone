import { useState } from "react";
import YourTrainingExercise from "./yourTrainingExercise.component";
import YourTrainingAddExercise from "./yourTrainingAddExercise.component";
import { editUserExercise } from "@/lib/editUserExercises";

export default function YourTrainingExerciseCollection({
	exerciseCollection,
	exerciseData,
	user,
}) {
	const [showAddExercisePanel, setShowAddExercisePanel] = useState(false);
	const [exerciseCollectionData, setExerciseCollectionData] =
		useState(exerciseData);

	const handleShowAddExerciseForm = () => {
		setShowAddExercisePanel(!showAddExercisePanel);
	};

	const handleAddExercise = async (newExercise) => {
		const updatedData = [...exerciseCollectionData, newExercise];
		handleShowAddExerciseForm();

		setExerciseCollectionData(updatedData);

		const res = await editUserExercise(
			user.email,
			updatedData,
			exerciseCollection
		);
	};

	const handleUpdateExercise = async (id, newReps, newWeight) => {
		const updatedData = exerciseCollectionData.map((item) => {
			if (item.id === id) {
				return { ...item, reps: newReps, weight: newWeight };
			} else {
				return item;
			}
		});

		setExerciseCollectionData(updatedData);

		const res = await editUserExercise(
			user.email,
			updatedData,
			exerciseCollection
		);

		return res;
	};

	const handleDeleteExercise = async (id) => {
		const filteredData = exerciseCollectionData.filter((item) => item.id != id);
		const updatedData = filteredData.map((item, index) => ({
			...item,
			id: index + 1,
		}));

		setExerciseCollectionData(updatedData);

		const res = await editUserExercise(
			user.email,
			updatedData,
			exerciseCollection
		);

		return res;
	};

	function getExerciseCategory(exerciseCollection) {
		switch (exerciseCollection) {
			case "upperBodyExercises":
				return "Upper Body";
			case "lowerBodyExercises":
				return "Lower Body";
			case "fullBodyExercises":
				return "Full Body";
			default:
				return "Unknown Category";
		}
	}

	const collectionTitle = getExerciseCategory(exerciseCollection);

	return (
		<div className='mb-10 '>
			<h3 className='text-xl font-bold mb-8 md:text-3xl md:mb-12'>
				{collectionTitle}
			</h3>
			<div className='md:grid md:grid-cols-3 md:gap-8'>
				{exerciseCollectionData.length === 0 && !showAddExercisePanel && (
					<p className='text-center mb-8 mt-14 md:flex  md:mt-0 md:items-center md:mb-0'>{`You haven't added ${collectionTitle.toLowerCase()} exercises yet`}</p>
				)}
				{exerciseCollectionData.map((item) => (
					<YourTrainingExercise
						key={item.id}
						id={item.id}
						name={item.name}
						weightType={item.weightType}
						weight={item.weight}
						reps={item.reps}
						handleDeleteExercise={handleDeleteExercise}
						handleUpdateExercise={handleUpdateExercise}
						exerciseCollection={exerciseCollection}
					/>
				))}

				{showAddExercisePanel && (
					<YourTrainingAddExercise
						id={exerciseCollectionData.length}
						handleShowAddExerciseForm={handleShowAddExerciseForm}
						handleAddExercise={handleAddExercise}
						exerciseCollection={exerciseCollection}
					/>
				)}
				<div className='text-center md:flex md:justify-center md:items-center'>
					{!showAddExercisePanel && (
						<button
							className='bg-orange-400 text-white font-bold py-2 px-4 uppercase my-6 '
							onClick={handleShowAddExerciseForm}>
							Add exercise
						</button>
					)}
				</div>
			</div>
		</div>
	);
}

import { useState } from "react";
import YourTrainingExercise from "./yourTrainingExercise.component";
import YourTrainingAddExercise from "./yourTrainingAddExercise.component";
import { editUserExercise } from "@/lib/editUserExercises";

export default function YourTrainingExerciseCollection({
	exerciseCollection,
	exerciseData,
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

		const data = await editUserExercise(
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

		const data = await editUserExercise(
			user.email,
			updatedData,
			exerciseCollection
		);
	};

	const handleDeleteExercise = async (id) => {
		const filteredData = exerciseCollectionData.filter((item) => item.id != id);
		const updatedData = filteredData.map((item, index) => ({
			...item,
			id: index + 1,
		}));

		setExerciseCollectionData(updatedData);

		const data = await editUserExercise(
			user.email,
			updatedData,
			exerciseCollection
		);
	};

	return (
		<div className='mb-10'>
			<h3 className='text-xl font-bold mb-8'>Monday - UpperBody</h3>
			<div>
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
						exerciseCollection='upperBodyExercises'
					/>
				))}
			</div>
			{showAddExercisePanel && (
				<YourTrainingAddExercise
					id={exerciseCollectionData.length}
					handleShowAddExerciseForm={handleShowAddExerciseForm}
					handleAddExercise={handleAddExercise}
					exerciseCollection={exerciseCollection}
				/>
			)}
			<div className='text-center'>
				{!showAddExercisePanel && (
					<button
						className='bg-orange-400 text-white font-bold py-2 px-4 uppercase my-6'
						onClick={handleShowAddExerciseForm}>
						Add exercise
					</button>
				)}
			</div>
		</div>
	);
}

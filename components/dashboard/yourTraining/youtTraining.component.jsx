import { useState } from "react";
import YourTrainingExercise from "./yourTrainingExercise.component";
import YourTrainingAddExercise from "./yourTrainingAddExercise.component";

const upperBodyExercises = [
	{
		id: 1,
		name: "Wyciskanie sztangi leżąc",
		weightType: "Weight",
		weight: [60, 60, 60],
		reps: [10, 10, 10],
	},
	{
		id: 2,
		name: "Rozpiętki na wyciągu siedząc",
		weightType: "Tiles",
		weight: [1, 1, 2],
		reps: [15, 15, 7],
	},
	{
		id: 3,
		name: "Podciąganie z gumą",
		weightType: "-",
		weight: [],
		reps: [5, 5, 6],
	},
	{
		id: 4,
		name: "Opuszczanie na drążku",
		weightType: "-",
		weight: [],
		reps: [5, 5, 6],
	},
	{
		id: 5,
		name: "OHP (wyciąg)",
		weightType: "Tiles",
		weight: [3, 3, 3],
		reps: [11, 11, 11],
	},
	{
		id: 6,
		name: "Wymachy na wyciągu",
		weightType: "Tiles",
		weight: [0.5, 0.5, 0.5],
		reps: [10, 10, 11],
	},
];

const lowerBodyExercises = [
	{
		id: 1,
		name: "Siady ze sztangą",
		weightType: "Weight",
		weight: [40, 40, 50],
		reps: [10, 10, 10],
	},
	{
		id: 2,
		name: "Przysiad kolarski",
		weightType: "Weight",
		weight: [8, 8, 10],
		reps: [10, 10, 10],
	},
	{
		id: 3,
		name: "Wyciskanie suwnicy leżąc",
		weightType: "Weight",
		weight: [80, 80, 85],
		reps: [10, 10, 10],
	},
	{
		id: 4,
		name: "Uginanie nóg na piłce leżąc",
		weightType: "-",
		weight: [],
		reps: [7, 8, 9],
	},
	{
		id: 5,
		name: "Wznosy nóg leżąc",
		weightType: "-",
		weight: [],
		reps: [8, 9, 10],
	},
	{
		id: 6,
		name: "Allahy",
		weightType: "Tiles",
		weight: [5, 5, 6],
		reps: [12, 12, 12],
	},
];

const fullBodyExercises = [
	{
		id: 1,
		name: "Opuszczanie na drążku",
		weightType: "-",
		weight: [],
		reps: [5, 5, 6],
	},
	{
		id: 2,
		name: "Opuszczanie na poręczach (dipy)",
		weightType: "-",
		weight: [],
		reps: [5, 5, 6],
	},
	{
		id: 3,
		name: "Wspięcia na palce na suwnicy",
		weightType: "Weight",
		weight: [35, 40, 40],
		reps: [10, 10, 10],
	},
	{
		id: 4,
		name: "Wyciskanie francuskie hantli",
		weightType: "Weight",
		weight: [8, 8, 8],
		reps: [9, 10, 11],
	},
	{
		id: 5,
		name: "Uginanie hantli stojąc z rotacją do zewnąrz",
		weightType: "Weight",
		weight: [8, 10, 10],
		reps: [10, 10, 10],
	},
	{
		id: 6,
		name: "Prostowanie ramion na wyciągu",
		weightType: "Tiles",
		weight: [5, 5, 5],
		reps: [10, 10, 11],
	},
	{
		id: 7,
		name: "Uginanie mlotkowe na wyciągu",
		weightType: "Tiles",
		weight: [5, 5, 5],
		reps: [10, 10, 10],
	},
];

const exercisesData = {
	upperBodyExercises: [
		{
			id: 1,
			name: "Wyciskanie sztangi leżąc",
			weightType: "Weight",
			weight: [60, 60, 60],
			reps: [10, 10, 10],
		},
		{
			id: 2,
			name: "Rozpiętki na wyciągu siedząc",
			weightType: "Tiles",
			weight: [1, 1, 2],
			reps: [15, 15, 7],
		},
		{
			id: 3,
			name: "Podciąganie z gumą",
			weightType: "-",
			weight: [],
			reps: [5, 5, 6],
		},
		{
			id: 4,
			name: "Opuszczanie na drążku",
			weightType: "-",
			weight: [],
			reps: [5, 5, 6],
		},
		{
			id: 5,
			name: "OHP (wyciąg)",
			weightType: "Tiles",
			weight: [3, 3, 3],
			reps: [11, 11, 11],
		},
		{
			id: 6,
			name: "Wymachy na wyciągu",
			weightType: "Tiles",
			weight: [0.5, 0.5, 0.5],
			reps: [10, 10, 11],
		},
	],
	lowerBodyExercises: [
		{
			id: 1,
			name: "Siady ze sztangą",
			weightType: "Weight",
			weight: [40, 40, 50],
			reps: [10, 10, 10],
		},
		{
			id: 2,
			name: "Przysiad kolarski",
			weightType: "Weight",
			weight: [8, 8, 10],
			reps: [10, 10, 10],
		},
		{
			id: 3,
			name: "Wyciskanie suwnicy leżąc",
			weightType: "Weight",
			weight: [80, 80, 85],
			reps: [10, 10, 10],
		},
		{
			id: 4,
			name: "Uginanie nóg na piłce leżąc",
			weightType: "-",
			weight: [],
			reps: [7, 8, 9],
		},
		{
			id: 5,
			name: "Wznosy nóg leżąc",
			weightType: "-",
			weight: [],
			reps: [8, 9, 10],
		},
		{
			id: 6,
			name: "Allahy",
			weightType: "Tiles",
			weight: [5, 5, 6],
			reps: [12, 12, 12],
		},
	],
	fullBodyExercises: [
		{
			id: 1,
			name: "Opuszczanie na drążku",
			weightType: "-",
			weight: [],
			reps: [5, 5, 6],
		},
		{
			id: 2,
			name: "Opuszczanie na poręczach (dipy)",
			weightType: "-",
			weight: [],
			reps: [5, 5, 6],
		},
		{
			id: 3,
			name: "Wspięcia na palce na suwnicy",
			weightType: "Weight",
			weight: [35, 40, 40],
			reps: [10, 10, 10],
		},
		{
			id: 4,
			name: "Wyciskanie francuskie hantli",
			weightType: "Weight",
			weight: [8, 8, 8],
			reps: [9, 10, 11],
		},
		{
			id: 5,
			name: "Uginanie hantli stojąc z rotacją do zewnąrz",
			weightType: "Weight",
			weight: [8, 10, 10],
			reps: [10, 10, 10],
		},
		{
			id: 6,
			name: "Prostowanie ramion na wyciągu",
			weightType: "Tiles",
			weight: [5, 5, 5],
			reps: [10, 10, 11],
		},
		{
			id: 7,
			name: "Uginanie mlotkowe na wyciągu",
			weightType: "Tiles",
			weight: [5, 5, 5],
			reps: [10, 10, 10],
		},
	],
};

export default function YourTraining({ user }) {
	// console.log("user from your training", user.upperBodyExercises);
	// console.log(upperBodyExercises);
	if (!user) {
		return <p>Loading...</p>;
	}

	const [showAddExercisePanel, setShowAddExercisePanel] = useState(true);

	const [upperBody, setUpperBody] = useState(user.exercises.upperBodyExercises);
	const [lowerBody, setLowerBody] = useState(exercisesData.lowerBodyExercises);
	const [fullBody, setFullBody] = useState(exercisesData.fullBodyExercises);

	const [exercises, setExercises] = useState(exercisesData);

	// console.log(user);
	console.log(upperBody);

	//combined function
	// handleSaveUpperBody(id, newReps, newWeight, '') - edit exercise and save to database
	// handleSaveUpperBody('','','', newExercise) - add exercise and save to database
	const handleSaveUpperBody = async (id, newReps, newWeight, newExercise) => {
		let updatedData;

		if (!newExercise) {
			if (newReps || newWeight) {
				console.log("new reps and new weight");
				updatedData = upperBody.map((item) => {
					if (item.id === id) {
						return { ...item, reps: newReps, weight: newWeight };
					} else {
						return item;
					}
				});
			}

			if (!newReps && !newWeight) {
				console.log("delete");
				console.log("id", id);
				const filteredData = upperBody.filter((item) => item.id != id);
				updatedData = filteredData.map((item, index) => ({
					...item,
					id: index + 1,
				}));
			}
		}

		if (newExercise) {
			console.log("new Exercise");
			updatedData = [...upperBody, newExercise];
			handleShowAddExerciseForm();
		}

		setUpperBody(updatedData);

		const data = await fetch("/api/updateExercise", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				userExercises: updatedData,
				email: user.email,
			}),
		});
	};

	// separate function responsible for adding exercise to database
	const handleAddExerciseUpperBody = async (newExercise) => {
		setUpperBody([...upperBody, newExercise]);
		handleShowAddExerciseForm();

		const data = await fetch("/api/addExercise", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				userExercise: newExercise,
				email: user.email,
			}),
		});
	};

	const handleSaveFullBody = (id, newReps) => {
		const updatedData = fullBody.map((item) => {
			if (item.id === id) {
				return { ...item, reps: newReps, weight: newWeight };
			} else {
				return item;
			}
		});

		setFullBody(updatedData);
	};

	const handleSaveLowerBody = (id, newReps) => {
		const updatedData = lowerBody.map((item) => {
			if (item.id === id) {
				return { ...item, reps: newReps, weight: newWeight };
			} else {
				return item;
			}
		});

		setLowerBody(updatedData);
	};

	const handleShowAddExerciseForm = () => {
		setShowAddExercisePanel(!showAddExercisePanel);
	};

	return (
		<section className='p-4'>
			<h2 className='text-3xl font-bold mb-4'>Your Training</h2>
			<div className='mb-10'>
				<h3 className='text-xl font-bold mb-8'>Monday - UpperBody</h3>
				<div>
					{upperBody.map((item) => (
						<YourTrainingExercise
							key={item.id}
							id={item.id}
							name={item.name}
							weightType={item.weightType}
							weight={item.weight}
							reps={item.reps}
							handleSaveData={handleSaveUpperBody}
						/>
					))}
				</div>
				{showAddExercisePanel && (
					<YourTrainingAddExercise
						id={upperBody.length}
						handleShowAddExerciseForm={handleShowAddExerciseForm}
						handleAddExerciseUpperBody={handleSaveUpperBody}
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
			<div>
				<h3 className='text-xl font-bold mb-8'>Wednesday - LowerBody</h3>
				<div>
					{exercises.lowerBodyExercises.map((item) => (
						<YourTrainingExercise
							id={item.id}
							name={item.name}
							weightType={item.weightType}
							weight={item.weight}
							reps={item.reps}
							handleSaveData={handleSaveLowerBody}
						/>
					))}
				</div>
				<div className='text-center'>
					<button className='bg-orange-400 text-white font-bold py-2 px-4 uppercase my-6'>
						Add exercise
					</button>
				</div>
			</div>
			<div>
				<h3 className='text-xl font-bold mb-8'>Friday - FullBody</h3>
				<div>
					{fullBody.map((item) => (
						<YourTrainingExercise
							id={item.id}
							name={item.name}
							weightType={item.weightType}
							weight={item.weight}
							reps={item.reps}
							handleSaveData={handleSaveFullBody}
						/>
					))}
				</div>
				<div className='text-center'>
					<button className='bg-orange-400 text-white font-bold py-2 px-4 uppercase my-6'>
						Add exercise
					</button>
				</div>
			</div>
		</section>
	);
}

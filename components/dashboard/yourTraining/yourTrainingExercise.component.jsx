import { useState, useRef } from "react";

export default function YourTrainingExercise({
	id,
	name,
	weightType,
	weight,
	reps,
	handleSaveData,
}) {
	const [activeEditing, setActiveEditing] = useState(false);
	const repOneRef = useRef();
	const repTwoRef = useRef();
	const repThreeRef = useRef();
	const weightOneRef = useRef();
	const weightTwoRef = useRef();
	const weightThreeRef = useRef();

	const handleEditing = () => {
		setActiveEditing(!activeEditing);
	};

	const handleSave = (id) => {
		const repOne = repOneRef.current.value;
		const repTwo = repTwoRef.current.value;
		const repThree = repThreeRef.current.value;

		const weightOne = weightOneRef.current.value;
		const weightTwo = weightTwoRef.current.value;
		const weightThree = weightThreeRef.current.value;

		handleSaveData(
			id,
			[repOne, repTwo, repThree],
			[weightOne, weightTwo, weightThree]
		);

		handleEditing();
	};

	return (
		<div className='border p-4 mb-8  '>
			<div className='flex justify-between mb-6 mt-2'>
				<p className='text-xl'>{`Exercise ${id}`}</p>
				{activeEditing ? (
					<div className='flex items-center gap-4 '>
						<p
							onClick={handleEditing}
							className='cursor-pointer text-orange-400'>
							Cancel
						</p>
						<button
							className='text-xl bg-orange-400 text-white font-bold px-2 py-1'
							onClick={() => handleSave(id)}>
							Save
						</button>
					</div>
				) : (
					<button
						className='text-xl text-orange-400 font-bold px-2 py-1'
						onClick={handleEditing}>
						Edit
					</button>
				)}
			</div>
			<p className='text-lg mb-4 font-bold'>{name}</p>
			<div>
				{!activeEditing && weightType != "-" && (
					<div className='grid grid-cols-4 mb-4'>
						<p>{weightType}</p>
						<p className='text-center mr-2'>{weight[0]}</p>
						<p className='text-center mr-2'>{weight[1]}</p>
						<p className='text-center mr-2'>{weight[2]}</p>
					</div>
				)}
				{activeEditing && (
					<div className='grid grid-cols-4 mb-4'>
						<p>{weightType}</p>
						<input
							pattern='[0-9]*'
							type='number'
							defaultValue={weight[0]}
							className='border text-center mr-2'
							ref={weightOneRef}
						/>
						<input
							pattern='[0-9]*'
							type='number'
							defaultValue={weight[1]}
							className='border text-center mr-2'
							ref={weightTwoRef}
						/>
						<input
							pattern='[0-9]*'
							type='number'
							defaultValue={weight[2]}
							className='border text-center mr-2'
							ref={weightThreeRef}
						/>
					</div>
				)}
				{activeEditing && (
					<form className='grid grid-cols-4'>
						<p>Reps</p>
						<input
							pattern='[0-9]*'
							type='number'
							defaultValue={reps[0]}
							className='border text-center mr-2'
							ref={repOneRef}
						/>
						<input
							type='text'
							defaultValue={reps[1]}
							className='border text-center mr-2'
							ref={repTwoRef}
						/>
						<input
							type='text'
							defaultValue={reps[2]}
							className='border text-center mr-2'
							ref={repThreeRef}
						/>
					</form>
				)}
				{!activeEditing && (
					<div className='grid grid-cols-4 '>
						<p>Reps</p>
						<p className='text-center mr-2'>{reps[0]}</p>
						<p className='text-center mr-2'>{reps[1]}</p>
						<p className='text-center mr-2'>{reps[2]}</p>
					</div>
				)}
			</div>
		</div>
	);
}

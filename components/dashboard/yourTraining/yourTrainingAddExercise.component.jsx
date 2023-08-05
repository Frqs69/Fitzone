import { useState, useRef } from "react";

export default function YourTrainingAddExercise({
	id,
	handleShowAddExerciseForm,
	handleAddExercise,
	exerciseCollection,
}) {
	const nameRef = useRef();
	const weightTypeRef = useRef();
	const repOneRef = useRef();
	const repTwoRef = useRef();
	const repThreeRef = useRef();
	const weightOneRef = useRef();
	const weightTwoRef = useRef();
	const weightThreeRef = useRef();

	console.log("id", id);

	const handleSave = async (e) => {
		e.preventDefault();

		const name = nameRef.current.value;
		const weightType = weightTypeRef.current.value;

		const repOne = repOneRef.current.value;
		const repTwo = repTwoRef.current.value;
		const repThree = repThreeRef.current.value;

		const weightOne = weightOneRef.current.value;
		const weightTwo = weightTwoRef.current.value;
		const weightThree = weightThreeRef.current.value;

		const newExercise = {
			id: id + 1,
			name: name,
			weightType: weightType,
			weight: [weightOne, weightTwo, weightThree],
			reps: [repOne, repTwo, repThree],
		};

		console.log(newExercise);

		await handleAddExercise(newExercise, exerciseCollection);
	};

	return (
		<form className='border p-4 mb-8  ' onSubmit={handleSave}>
			<div className='flex justify-between mb-6 mt-2'>
				<p className='text-xl'>{`Exercise ${id + 1}`}</p>
				<div className='flex items-center gap-4 '>
					<p
						onClick={handleShowAddExerciseForm}
						className='cursor-pointer text-orange-400'>
						Cancel
					</p>
					<button
						className='text-xl bg-orange-400 text-white font-bold px-2 py-1'
						type='submit'>
						Save
					</button>
				</div>
			</div>
			<input
				type='text'
				className='text-lg mb-4 font-bold border w-[97%] pl-2'
				placeholder='Exercise Name'
				ref={nameRef}
			/>
			<div>
				<div className='grid grid-cols-4 mb-4'>
					<select
						name='weight'
						id='weight'
						className='text-sm mr-1'
						ref={weightTypeRef}>
						<option value='Weight'>Weight</option>
						<option value='Tiles'>Tiles</option>
						<option value='-'>None</option>
					</select>
					<input
						pattern='[0-9]*'
						type='number'
						defaultValue={0}
						className='border text-center mr-2'
						ref={weightOneRef}
					/>
					<input
						pattern='[0-9]*'
						type='number'
						defaultValue={0}
						className='border text-center mr-2'
						ref={weightTwoRef}
					/>
					<input
						pattern='[0-9]*'
						type='number'
						defaultValue={0}
						className='border text-center mr-2'
						ref={weightThreeRef}
					/>
				</div>

				<div className='grid grid-cols-4'>
					<p>Reps</p>
					<input
						pattern='[0-9]*'
						type='number'
						defaultValue={0}
						className='border text-center mr-2'
						ref={repOneRef}
					/>
					<input
						type='text'
						defaultValue={0}
						className='border text-center mr-2'
						ref={repTwoRef}
					/>
					<input
						type='text'
						defaultValue={0}
						className='border text-center mr-2'
						ref={repThreeRef}
					/>
				</div>
			</div>
		</form>
	);
}

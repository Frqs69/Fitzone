import { useState, useRef } from "react";
import YourTrainingInputField from "./yourTrainingInputField";

export default function YourTrainingAddExercise({
	id,
	handleShowAddExerciseForm,
	handleAddExercise,
	exerciseCollection,
}) {
	const [showInputs, setShowInputs] = useState(true);
	const [showErrorMessage, setShowErrorMessage] = useState(false);
	const nameRef = useRef();
	const weightTypeRef = useRef();
	const repOneRef = useRef();
	const repTwoRef = useRef();
	const repThreeRef = useRef();
	const weightOneRef = useRef();
	const weightTwoRef = useRef();
	const weightThreeRef = useRef();

	const handleSelectChange = () => {
		console.log(weightTypeRef.current.value);
		if (weightTypeRef.current.value === "-") {
			setShowInputs(false);
		} else {
			setShowInputs(true);
		}
	};

	console.log(showInputs);

	const handleSave = (e) => {
		e.preventDefault();

		const name = nameRef.current.value;
		const weightType = weightTypeRef.current.value;

		const repOne = repOneRef.current.value;
		const repTwo = repTwoRef.current.value;
		const repThree = repThreeRef.current.value;

		let weightOne = "-";
		let weightTwo = "-";
		let weightThree = "-";

		if (weightTypeRef.current.value != "-") {
			weightOne = weightOneRef.current.value;
			weightTwo = weightTwoRef.current.value;
			weightThree = weightThreeRef.current.value;
		}

		const newExercise = {
			id: id + 1,
			name: name,
			weightType: weightType,
			weight: [weightOne, weightTwo, weightThree],
			reps: [repOne, repTwo, repThree],
		};

		console.log(newExercise);

		handleAddExercise(newExercise, exerciseCollection);
	};

	function containsOnlyNumbers(input) {
		return /^\d+$/.test(input);
	}

	const handleShowErrorMessage = () => {
		if (
			containsOnlyNumbers(weightOneRef.current.value) &&
			containsOnlyNumbers(weightTwoRef.current.value) &&
			containsOnlyNumbers(weightThreeRef.current.value) &&
			containsOnlyNumbers(repOneRef.current.value) &&
			containsOnlyNumbers(repTwoRef.current.value) &&
			containsOnlyNumbers(repThreeRef.current.value)
		) {
			setShowErrorMessage(false);
		} else {
			setShowErrorMessage(true);
		}
	};

	return (
		<form className='border p-4 mb-8  ' onSubmit={handleSave}>
			<div className='flex justify-between mb-6 mt-2'>
				<p className='text-xl md:text-2xl'>{`Exercise ${id + 1}`}</p>
				{showErrorMessage && (
					<p className='font-bold text-2xl text-red-500 ml-10'>
						Use only numbers
					</p>
				)}
				<div className='flex items-center gap-4 '>
					<p
						onClick={handleShowAddExerciseForm}
						className='cursor-pointer text-orange-400'>
						Cancel
					</p>
					<button
						className={`text-xl bg-orange-400 text-white font-bold px-2 py-1 ${
							showErrorMessage && "bg-orange-400/50"
						}`}
						disabled={showErrorMessage}
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
				required
			/>
			<div>
				<div className='grid grid-cols-4 mb-4'>
					<select
						name='weight'
						id='weight'
						className='text-sm mr-1'
						ref={weightTypeRef}
						onChange={handleSelectChange}>
						<option value='Weight'>Weight</option>
						<option value='Tiles'>Tiles</option>
						<option value='-'>None</option>
					</select>
					{showInputs ? (
						<YourTrainingInputField
							weight={0}
							weightRef={weightOneRef}
							handleShowErrorMessage={handleShowErrorMessage}
						/>
					) : (
						<p className='text-center'>-</p>
					)}
					{showInputs ? (
						<YourTrainingInputField
							weight={0}
							weightRef={weightTwoRef}
							handleShowErrorMessage={handleShowErrorMessage}
						/>
					) : (
						<p className='text-center'>-</p>
					)}
					{showInputs ? (
						<YourTrainingInputField
							weight={0}
							weightRef={weightThreeRef}
							handleShowErrorMessage={handleShowErrorMessage}
						/>
					) : (
						<p className='text-center'>-</p>
					)}
				</div>

				<div className='grid grid-cols-4'>
					<p>Reps</p>
					<YourTrainingInputField
						weight={0}
						weightRef={repOneRef}
						handleShowErrorMessage={handleShowErrorMessage}
					/>
					<YourTrainingInputField
						weight={0}
						weightRef={repTwoRef}
						handleShowErrorMessage={handleShowErrorMessage}
					/>
					<YourTrainingInputField
						weight={0}
						weightRef={repThreeRef}
						handleShowErrorMessage={handleShowErrorMessage}
					/>
				</div>
			</div>
		</form>
	);
}

import YourTrainingInputField from "./yourTrainingInputField";
import { useState, useRef } from "react";
import { Icon } from "@iconify/react";

export default function YourTrainingExercise({
	id,
	name,
	weightType,
	weight,
	reps,
	handleUpdateExercise,
	handleDeleteExercise,
	exerciseCollection,
}) {
	const [activeEditing, setActiveEditing] = useState(false);
	const repOneRef = useRef();
	const repTwoRef = useRef();
	const repThreeRef = useRef();
	const weightOneRef = useRef();
	const weightTwoRef = useRef();
	const weightThreeRef = useRef();
	const [isSaving, setIsSaving] = useState(false);
	const [saved, setSaved] = useState(false);
	const [confirmDeletePanel, setConfirmDeletePanel] = useState(false);
	const [showErrorMessage, setShowErrorMessage] = useState(false);

	const handleEditing = () => {
		setActiveEditing(!activeEditing);
		setShowErrorMessage(false);
	};

	const handleSave = async (id) => {
		const repOne = repOneRef.current.value;
		const repTwo = repTwoRef.current.value;
		const repThree = repThreeRef.current.value;

		let weightOne = "-";
		let weightTwo = "-";
		let weightThree = "-";

		if (weightType != "-") {
			weightOne = weightOneRef.current.value;
			weightTwo = weightTwoRef.current.value;
			weightThree = weightThreeRef.current.value;
		}

		handleEditing();

		setIsSaving(!isSaving);

		const res = await handleUpdateExercise(
			id,
			[repOne, repTwo, repThree],
			[weightOne, weightTwo, weightThree],
			exerciseCollection
		);

		console.log(res.ok);

		if (res.ok) {
			setIsSaving(false);
			setSaved(true);

			setTimeout(() => {
				setSaved(false);
			}, 1000);
		}
	};

	const handleDeleteData = async (id) => {
		// handleSaveData(id, "", "", "");
		setConfirmDeletePanel(false);
		const res = await handleDeleteExercise(id, exerciseCollection);
	};

	const handleShowConfirmDeletePanel = () => {
		setConfirmDeletePanel(!confirmDeletePanel);
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
		<div className='border p-4 mb-8 relative md:border-4 border-black/20'>
			{confirmDeletePanel && (
				<div className='absolute top-0 right-0 w-full h-full flex flex-col justify-center items-center bg-white/90'>
					<p className='font-bold text-2xl'>Delete?</p>
					<div className='mt-6 '>
						<button
							className='border border-orange-400 py-2 px-3 text-xl '
							onClick={handleShowConfirmDeletePanel}>
							No
						</button>
						<button
							className='border border-orange-400 py-2 px-3 text-xl ml-4'
							onClick={() => handleDeleteData(id)}>
							Yes
						</button>
					</div>
				</div>
			)}

			<div className='flex justify-between mb-6 mt-2'>
				<div className='flex items-center'>
					<p className='text-xl md:text-2xl'>{`Exercise ${id}`}</p>
					<Icon
						icon='entypo:trash'
						className='ml-4 cursor-pointer text-black/30'
						// width={10}
						onClick={handleShowConfirmDeletePanel}
					/>
					{isSaving && <p className='text-orange-400 ml-4'>Saving...</p>}
					{saved && (
						<p className='text-orange-400 ml-4  font-bold text-xl'>Saved!</p>
					)}
					{showErrorMessage && (
						<p className='font-bold text-2xl text-red-500 ml-10'>
							Use only numbers
						</p>
					)}
				</div>
				{activeEditing ? (
					<div className='flex items-center gap-4 '>
						<p
							onClick={handleEditing}
							className='cursor-pointer text-orange-400'>
							Cancel
						</p>
						<button
							className={`text-xl bg-orange-400 text-white font-bold px-2 py-1 ${
								showErrorMessage && "bg-orange-400/50"
							}`}
							onClick={() => handleSave(id)}
							disabled={showErrorMessage}>
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
			<p className='text-lg mb-4 font-bold md:text-xl'>{name}</p>
			<div>
				{!activeEditing && weightType != "-" && (
					<div className='grid grid-cols-4 mb-4'>
						<p>{weightType}</p>
						<p className='text-center mr-2'>
							{weight[0]}
							{weightType === "Weight" && " kg"}
						</p>
						<p className='text-center mr-2'>
							{weight[1]}
							{weightType === "Weight" && " kg"}
						</p>
						<p className='text-center mr-2'>
							{weight[2]}
							{weightType === "Weight" && " kg"}
						</p>
					</div>
				)}
				{activeEditing && weightType != "-" && (
					<div className='grid grid-cols-4 mb-4'>
						<p>{weightType}</p>
						<YourTrainingInputField
							weight={weight[0]}
							weightRef={weightOneRef}
							handleShowErrorMessage={handleShowErrorMessage}
						/>
						<YourTrainingInputField
							weight={weight[1]}
							weightRef={weightTwoRef}
							handleShowErrorMessage={handleShowErrorMessage}
						/>
						<YourTrainingInputField
							weight={weight[2]}
							weightRef={weightThreeRef}
							handleShowErrorMessage={handleShowErrorMessage}
						/>
					</div>
				)}
				{activeEditing && (
					<form className='grid grid-cols-4'>
						<p>Reps</p>
						<YourTrainingInputField
							weight={reps[0]}
							weightRef={repOneRef}
							handleShowErrorMessage={handleShowErrorMessage}
						/>
						<YourTrainingInputField
							weight={reps[1]}
							weightRef={repTwoRef}
							handleShowErrorMessage={handleShowErrorMessage}
						/>
						<YourTrainingInputField
							weight={reps[2]}
							weightRef={repThreeRef}
							handleShowErrorMessage={handleShowErrorMessage}
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

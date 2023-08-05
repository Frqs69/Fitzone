import { useState } from "react";

export default function YourTrainingInputField({
	weight,
	weightRef,
	handleShowErrorMessage,
}) {
	const [errorBorder, setErrorBorder] = useState(false);

	function containsOnlyNumbers(input) {
		return /^\d+$/.test(input);
	}

	const handleEdit = (e) => {
		console.log(e.target.value);
		if (containsOnlyNumbers(e.target.value) && e.target.value != "") {
			handleShowErrorMessage();
			setErrorBorder(false);
		} else {
			handleShowErrorMessage();
			setErrorBorder(true);
		}
	};

	return (
		<input
			type='text'
			defaultValue={weight}
			className={`border text-center mr-2 ${
				errorBorder && " border-red-600 border-2"
			}`}
			ref={weightRef}
			onChange={handleEdit}
			required
		/>
	);
}

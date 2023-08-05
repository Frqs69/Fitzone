export const editUserExercise = async (
	email,
	updatedData,
	exerciseCollection
) => {
	const data = await fetch("/api/updateExercise", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			userExercises: updatedData,
			email: email,
			exerciseCollection: exerciseCollection,
		}),
	});

	return data;
};

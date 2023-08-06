export const createUser = async (
	name,
	login,
	email,
	password,
	passwordConfirm
) => {
	const res = await fetch("/api/signup", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ name, login, email, password, passwordConfirm }),
	});

	const data = await res.json();

	if (!res.ok) {
		const error = new Error(data || "Something went wrong");
		error.data = data;
		throw error;
	}

	return data;
};

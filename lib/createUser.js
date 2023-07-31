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
		throw new Error(data.message || "Something went wrong");
	}

	return data;
};

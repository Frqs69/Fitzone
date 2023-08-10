export const sendContactForm = async (name, email, message) => {
	const res = await fetch("/api/contactMail", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ name, email, message }),
	});

	const data = await res.json();
	if (!res.ok) {
		const error = new Error(data || "Something went wrong");
		error.data = data;
		throw error;
	}
	return data;
};

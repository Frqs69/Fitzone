import { connectToDatabase } from "@/lib/db";
import { hashPassword } from "@/lib/auth";
import { signIn } from "next-auth/react";

function isValidEmail(email) {
	// Regular expression pattern for basic email validation
	const emailPattern = /^[^\s@]+@[^\s@]+\.(com|net|org|edu|gov|io|pl)$/i;
	return emailPattern.test(email);
}

export default async function handler(req, res) {
	if (req.method === "POST") {
		const data = req.body;
		const { name, login, email, password, passwordConfirm } = data;

		if (
			!name ||
			!login ||
			!email ||
			!password ||
			!passwordConfirm ||
			name.trim() === "" ||
			login.trim() === "" ||
			email.trim() === "" ||
			password.trim() === "" ||
			passwordConfirm.trim() === ""
		) {
			res
				.status(422)
				.json({ message: "Please fill all fields.", wrongField: "all" });
			return;
		}

		if (!email.includes("@")) {
			res.status(422).json({
				message: "Please provide valid email address.",
				wrongField: "email",
			});
			return;
		}

		if (!isValidEmail(email)) {
			res.status(422).json({
				message: "Please provide valid email address.",
				wrongField: "email",
			});
			return;
		}

		if (password.trim().length < 8) {
			res.status(422).json({
				message: "Password must have at least 8 characters",
				wrongField: "passwordLength",
			});
			return;
		}

		if (password != passwordConfirm) {
			res.status(422).json({
				message: "Passwords are not the same",
				wrongField: "password",
			});
			return;
		}

		const client = await connectToDatabase();

		const db = client.db();

		const existingUser = await db.collection("users").findOne({ email });

		if (existingUser) {
			res.status(422).json({
				message: "User with this email already exist",
				wrongField: "email",
			});
			client.close();
			return;
		}

		const hashedPassword = await hashPassword(password);

		const result = await db.collection("users").insertOne({
			name: name,
			login: login,
			email: email,
			password: hashedPassword,
			exercises: {
				upperBodyExercises: [],
				lowerBodyExercises: [],
				fullBodyExercises: [],
			},
		});

		client.close();
		res.status(201).json({ message: "Account created successfully" });
	}
}

import { connectToDatabase } from "@/lib/db";
import { hashPassword } from "@/lib/auth";
import { signIn } from "next-auth/react";

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
			name.trim() === 0 ||
			login.trim() === 0 ||
			email.trim() === 0 ||
			password.trim() === 0 ||
			passwordConfirm.trim() === 0
		) {
			res.status(422).json({ message: "Please fill all fields." });
			return;
		}

		if (!email.includes("@")) {
			res.status(422).json({ message: "Please provide valid email address." });
			return;
		}

		if (password.trim() < 8) {
			res
				.status(422)
				.json({ message: "Password must have at least 8 characters" });
			return;
		}

		if (password != passwordConfirm) {
			res.status(422).json({ message: "Passwords are not the same" });
			return;
		}

		const client = await connectToDatabase();

		const db = client.db();

		const existingUser = await db.collection("users").findOne({ email });

		if (existingUser) {
			res.status(422).json({ message: "User with this email already exist" });
			client.close();
			return;
		}

		const hashedPassword = await hashPassword(password);

		const result = await db.collection("users").insertOne({
			name: name,
			login: login,
			email: email,
			password: hashedPassword,
		});

		client.close();
		res.status(201).json({ message: "Account created successfully" });
	}
}

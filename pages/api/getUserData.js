import { connectToDatabase } from "@/lib/db";

export default async function handler(req, res) {
	if (req.method === "POST") {
		const userEmail = req.body.email;

		console.log(userEmail);

		const client = await connectToDatabase();

		const db = client.db();

		const existingUser = await db
			.collection("users")
			.findOne({ email: userEmail });

		console.log("userFound", existingUser);

		client.close();
		res.status(201).json({ message: "User found", user: existingUser });
	}
}

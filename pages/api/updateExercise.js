import { connectToDatabase } from "@/lib/db";

export default async function handler(req, res) {
	if (req.method === "POST") {
		const userEmail = req.body.email;
		const userExercises = req.body.userExercises;

		console.log(userEmail);

		const client = await connectToDatabase();

		const db = client.db();

		const existingUser = await db
			.collection("users")
			.findOne({ email: userEmail });

		console.log("userFound", existingUser);

		const updatedUser = await db
			.collection("users")
			.updateOne(
				{ email: userEmail },
				{ $set: { "exercises.upperBodyExercises": userExercises } }
			);

		client.close();
		res
			.status(201)
			.json({ message: "Exercise updated", updatedUser: updatedUser });
	}
}

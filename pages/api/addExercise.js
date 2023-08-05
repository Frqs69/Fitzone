import { connectToDatabase } from "@/lib/db";

export default async function handler(req, res) {
	if (req.method === "POST") {
		const userEmail = req.body.email;
		const userExercise = req.body.userExercise;

		// console.log(userEmail);
		// console.log("userExercise", userExercise);

		const client = await connectToDatabase();

		const db = client.db();

		const existingUser = await db
			.collection("users")
			.findOne({ email: userEmail });

		// console.log("userFound", existingUser);

		const updatedUser = await db
			.collection("users")
			.updateOne(
				{ email: userEmail },
				{ $push: { "exercises.upperBodyExercises": userExercise } }
			);

		client.close();

		
		res
			.status(201)
			.json({ message: "Exercise Added", updatedUser: updatedUser });
	}
}

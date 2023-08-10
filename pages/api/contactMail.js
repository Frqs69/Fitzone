import { mailOptions, transporter } from "@/lib/nodemailerConfig";

const generateEmailContent = (name, email, message) => {
	const text = `${name}, ${email}, ${message}`;

	const html = `<div style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); border-radius: 5px;">
        <div style="background-color: #007bff; color: #ffffff; text-align: center; padding: 10px 0; border-radius: 5px 5px 0 0;">
            <h1>Contact Form Submission</h1>
        </div>
        <div style="padding: 20px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        </div>
        <div style="text-align: center; padding: 10px 0; border-top: 1px solid #ddd;">
            <p>This email was sent via the contact form on our website.</p>
        </div>
    </div>
</div>`;

	return {
		text: text,
		html: html,
	};
};

export default async function handler(req, res) {
	if (req.method === "POST") {
		const data = req.body;
		const { name, email, message } = data;

		console.log(name, email, message);

		if (
			!name ||
			!email ||
			!message ||
			name.trim() === "" ||
			email.trim() === "" ||
			message.trim() === ""
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

		try {
			await transporter.sendMail({
				...mailOptions,
				...generateEmailContent(name, email, message),
				subject: "New Message",
			});

			return res
				.status(200)
				.json({ message: "Message sent successfully", status: "success" });
		} catch (err) {
			console.log(err);
			return res.status(400).json({
				message: "Message not sent, something went wrong",
				status: "fail",
			});
		}
	}
	return res.status(400).json({ message: "Bad request" });
}

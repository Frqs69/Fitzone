import nodemailer from "nodemailer";

const email = process.env.gmail_login;
const pass = process.env.gmail_password;

export const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: email,
		pass,
	},
});

export const mailOptions = {
	from: email,
	to: email,
};

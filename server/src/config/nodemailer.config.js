import nodemailer from "nodemailer";

export const acccountEmail = "cimsonoreply@gmail.com";

export const transporter = nodemailer.createTransport({
  service: "gamil",
  auth: {
    user: acccountEmail,
    pass: process.env.EMAIL_PASSWORD,
  },
});

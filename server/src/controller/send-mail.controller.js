import { acccountEmail, transporter } from "../config/nodemailer.config.js";
import {
  generateBookingCancellationTemplate,
  generateConfrimTemplate,
  generateWelcomeEmailTemplate,
} from "../utils/email-template.js";

export const SendMailConfirm = async (req, res) => {
  const {
    userName,
    courseTitle,
    courseImage,
    price,
    location,
    dateTime,
    email,
    golfer,
    hole,
    packageName,
  } = req.body;
  try {
    const subject = "Cimso Online Golf Booking Confirmation✅";
    const message = generateConfrimTemplate({
      userName,
      courseTitle,
      courseImage,
      price,
      location,
      dateTime,
      golfer,
      hole,
      packageName,
    });
    const mailOption = {
      from: acccountEmail,
      to: email,
      subject: subject,
      html: message,
    };
    transporter.sendMail(mailOption, (error, info) => {
      if (error) return console.log(error, "Error sending mail.");
      console.log("Email sent:" + info.response);
    });
  } catch (error) {
    console.log("Error in SendMailConfirm:", error.message);
    res.status(500).json({ message: "Internal server error!" });
  }
};

export const SendMailCancel = async (req, res) => {
  const { userName, courseName, courseImage, price, cancellationDate, email } =
    req.body;
  try {
    const subject = "Cimso Online Golf Booking Cancellation⛳";
    const message = generateBookingCancellationTemplate({
      userName,
      courseTitle: courseName,
      courseImage,
      courseName,
      price,
      cancellationDate,
    });
    const mailOption = {
      from: acccountEmail,
      to: email,
      subject: subject,
      html: message,
    };
    transporter.sendMail(mailOption, (error, info) => {
      if (error) return console.log(error, "Error sending mail.");
      console.log("Email sent:" + info.response);
    });
  } catch (error) {
    console.log("Error in SendMailCancel:", error.message);
    res.status(500).json({ message: "Internal server error!" });
  }
};

export const SendWelcomeMail = async (req, res) => {
  const { userName, email } = req.body;
  try {
    const subject = "Welcome to Cimso Online Golf Booking🎉";
    const message = generateWelcomeEmailTemplate({ userName });
    const mailOption = {
      from: acccountEmail,
      to: email,
      subject: subject,
      html: message,
    };
    transporter.sendMail(mailOption, (error, info) => {
      if (error) return console.log(error, "Error sending mail.");
      console.log("Email sent:" + info.response);
    });
  } catch (error) {
    console.log("Error in SendWelcomeMail:", error.message);
    res.status(500).json({ message: "Internal server error!" });
  }
};

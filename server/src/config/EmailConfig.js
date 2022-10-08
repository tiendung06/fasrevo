import nodemailer from "nodemailer";
import { emailConfig } from "./configuration.js";
import emailValidator from "deep-email-validator";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: emailConfig.email,
    pass: emailConfig.emailKey,
  },
});

const isEmailValid = async (email) => {
  return emailValidator.validate(email);
};

export { transporter, isEmailValid };

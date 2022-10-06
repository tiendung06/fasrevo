import nodemailer from "nodemailer";
import { emailConfig } from "./configuration.js";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: emailConfig.email,
    pass: emailConfig.emailKey,
  },
});

// transporter
//   .sendMail({
//     from: "Em Cuong",
//     to: "cuonggaayf01@gmail.com",
//     subject: "Hello",
//     html: `<b style="color:red;">There is a new article. It's about sending emails, check it out!</b>`,
//   })
//   .then((info) => {
//     console.log({ info });
//   })
//   .catch(console.error);

export default transporter;

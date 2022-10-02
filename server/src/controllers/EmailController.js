import nodemailer from "nodemailer";
import path from "path";
import dotenv from "dotenv";

const __dirname = path.resolve();
dotenv.config({ path: path.join(__dirname, "server/src/config/.env") });
console.log(__dirname);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_KEY,
  },
});

transporter
  .sendMail({
    from: "Em Cuong",
    to: "cuonggaayf01@gmail.com",
    subject: "Hello",
    html: `<b style="color:red;">There is a new article. It's about sending emails, check it out!</b>`,
  })
  .then((info) => {
    console.log({ info });
  })
  .catch(console.error);

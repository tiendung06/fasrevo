import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import dotenv from "dotenv";

// Middleware
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const __dirname = path.resolve();
dotenv.config({ path: path.join(__dirname, "src/config/.env") });

app.listen(process.env.PORT);

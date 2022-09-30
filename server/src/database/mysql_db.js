import path from "path";
import dotenv from "dotenv";
import mysql from "mysql2";

const __dirname = path.resolve();
dotenv.config({ path: path.join(__dirname, "server/src/config/.env") });

export const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

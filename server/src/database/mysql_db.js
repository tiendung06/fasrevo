import path from "path";
import dotenv from "dotenv";
import mysql from "mysql2";
import { Sequelize } from "sequelize";

const __dirname = path.resolve();
dotenv.config({ path: path.join(__dirname, "server/src/config/.env") });

// connect MySQL using mysql2
export const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// connect MySQL using sequelize
export const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  },
);

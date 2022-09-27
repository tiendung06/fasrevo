import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mysql from "mysql2";
import { createClient } from "redis";
const PORT = 3030;

// Middleware
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// connect MySQL
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "emcuong",
  database: "fasrevo",
});

// Connect Redis
const client = createClient();
client.on("error", err => console.log("Redis Client Error", err));
await client.connect();

app.get("/", (req, res) => {
  connection.connect(error => {
    if (error) throw error;
    connection.query("select * from user", (err, results) => {
      if (err) throw err;
      res.send(results);
    });
  });
});

await client.set("key", "value");
const value = await client.get("key");
console.log(value);

app.listen(PORT, () => {
  console.log(`Server ${PORT}`);
});

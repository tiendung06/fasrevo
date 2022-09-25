import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mysql from "mysql2";

const PORT = 3030;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "emcuong",
  database: "fasrevo",
});

function demo(req, res, next) {
  return 45;
  next();
}

app.get("/", (req, res) => {
  connection.connect(error => {
    if (error) throw error;
    connection.query("select * from user", (err, results) => {
      if (err) throw err;
      res.send(results);
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server ${PORT}`);
});

import mysql from "mysql2";
import { Sequelize } from "sequelize";
import { mySqlConfig } from "../config/configuration.js";

const connection = mysql.createConnection({
  host: mySqlConfig.host,
  port: mySqlConfig.port,
  user: mySqlConfig.user,
  password: mySqlConfig.password,
  database: mySqlConfig.database,
});

const sequelize = new Sequelize(
  mySqlConfig.database,
  mySqlConfig.user,
  mySqlConfig.password,
  {
    host: mySqlConfig.host,
    dialect: "mysql",
  },
);

export { connection, sequelize };

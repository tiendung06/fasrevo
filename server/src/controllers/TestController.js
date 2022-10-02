import { sequelize } from "../database/mysql_db.js";
import { QueryTypes } from "sequelize";
import User from "../model/User.js";

try {
  await sequelize.authenticate();
  const users = await sequelize.query("SELECT * FROM fasrevo.user", {
    type: QueryTypes.SELECT,
  });
  console.log(users);
  console.log("Connection has been established successfully.");
  sequelize.close();
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

import { DataTypes } from "sequelize";
import { sequelize } from "../database/mysql_db.js";

const User = sequelize.define("user", {
  uid: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.INTEGER,
  },
});

export default User;

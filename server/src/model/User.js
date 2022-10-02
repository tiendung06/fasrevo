import { DataTypes, QueryTypes } from "sequelize";
import { sequelize } from "../database/mysql_db.js";

const User = sequelize.define("User", {
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
    type: DataTypes.NUMBER,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: new Date(Date.now()),
  },
});

export default User;

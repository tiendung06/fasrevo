import { DataTypes } from "sequelize";
import { sequelize } from "../database/mysql_db.js";
import User from "./User.js";

const Order = sequelize.define("order", {
  order_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  uid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "uid",
    },
  },
  pid: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  total: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  // -1 Chua thanh toan, 0 thanh toan 1 nua, 1 thanh toan ok
  status: {
    type: DataTypes.INTEGER,
    defaultValue: -1,
  },
});

export default Order;

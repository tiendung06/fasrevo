import { DataTypes } from "sequelize";
import { sequelize } from "../database/mysql_db";

const Order = sequelize.define('order', {
  order_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  uid: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pid: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.INTEGER,
    defaultValue: -1,
  },
})

export default Order;
import { DataTypes } from "sequelize";
import { sequelize } from "../database/mysql_db.js";
import Order from "./Order.js";

const DeliveryStatus = sequelize.define("delivery-status", {
  ds_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  order_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Order,
      key: "order_id",
    },
  },
  ds_status: {
    type: DataTypes.INTEGER,
    defaultValue: -1,
  },
});

export default DeliveryStatus;

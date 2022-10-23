import { DataTypes } from "sequelize";
import { sequelize } from "../database/mysql_db.js";

const Voucher = sequelize.define(
  "voucher",
  {
    vid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    value: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  },
  { timestamps: false },
);

export default Voucher;

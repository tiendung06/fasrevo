import { DataTypes } from "sequelize";
import { sequelize } from "../database/mysql_db.js";

const Color = sequelize.define(
  "color",
  {
    color_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    color_name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  { timestamps: false },
);

export default Color;

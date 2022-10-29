import { DataTypes } from "sequelize";
import { sequelize } from "../database/mysql_db.js";

const Size = sequelize.define(
  "size",
  {
    size_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    size_name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  { timestamps: false },
);

export default Size;

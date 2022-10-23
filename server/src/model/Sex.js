import { DataTypes } from "sequelize";
import { sequelize } from "../database/mysql_db.js";

const Sex = sequelize.define(
  "sex",
  {
    sex_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    sex_name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  { timestamps: false },
);

export default Sex;

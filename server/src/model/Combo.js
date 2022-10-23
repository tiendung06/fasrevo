import { DataTypes } from "sequelize";
import { sequelize } from "../database/mysql_db.js";

const Combo = sequelize.define(
  "combo",
  {
    combo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    combo_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false },
);

export default Combo;

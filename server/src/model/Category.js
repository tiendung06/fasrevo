import { DataTypes } from "sequelize";
import { sequelize } from "../database/mysql_db.js";

const Category = sequelize.define(
  "category",
  {
    cid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    cname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false },
);

export default Category;

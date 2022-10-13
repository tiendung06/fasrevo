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
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    cname_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
  },
  { timestamps: false },
);

export default Category;

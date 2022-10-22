import { DataTypes } from "sequelize";
import { sequelize } from "../database/mysql_db.js";
import Category from "./Category.js";

const CategoryDetail = sequelize.define(
  "category_detail",
  {
    cdid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    cdname: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    cid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Category,
        key: "cid",
      },
    },
  },
  { timestamps: false },
);

export default CategoryDetail;

import { DataTypes } from "sequelize";
import { sequelize } from "../database/mysql_db.js";
import Category from "./Category.js";

const CategoryDetail = sequelize.define(
  "category_detail",
  {
    cdid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cdname: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: false },
);

CategoryDetail.belongsTo(Category, {
  foreignKey: "cdid",
});

export default CategoryDetail;

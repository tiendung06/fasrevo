import { DataTypes } from "sequelize";
import { sequelize } from "../database/mysql_db.js";

const CategoryDetail = sequelize.define('category_detail', {
  cdid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  cdname: {

  }
}, {timestamps: false})



export default CategoryDetail;
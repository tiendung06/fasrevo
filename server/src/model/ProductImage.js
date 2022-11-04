import { DataTypes } from "sequelize";
import { sequelize } from "../database/mysql_db.js";
import Product from "./Product.js";

const ProductImage = sequelize.define("product_images", {
  piid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  piname: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  pid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Product,
      key: "pid",
    },
  },
});

export default ProductImage;

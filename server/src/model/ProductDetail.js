import { DataTypes } from "sequelize";
import { sequelize } from "../database/mysql_db.js";
import Product from "./Product.js";

const ProductDetail = sequelize.define("product_detail", {
  pid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  texture: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  design: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  small_detail: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

ProductDetail.belongsTo(Product, {
  foreignKey: "pid",
});

export default ProductDetail;

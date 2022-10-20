import { DataTypes } from "sequelize";
import { sequelize } from "../database/mysql_db.js";
import Product from "./Product.js";

const ProductDetail = sequelize.define("product_detail", {
  pid: {
    type: DataTypes.STRING(10),
    allowNull: false,
    primaryKey: true,
  },
  // Chi tiết
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  // xuất xứ
  origin: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  // Chất liệu
  texture: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  // chi tiết nhỏ
  small_detail: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

ProductDetail.belongsTo(Product, {
  foreignKey: "pid",
});

export default ProductDetail;

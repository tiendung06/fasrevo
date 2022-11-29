import { DataTypes } from "sequelize";
import { sequelize } from "../database/mysql_db.js";
import Product from "./Product.js";

const ProductImage = sequelize.define(
  "product_images",
  {
    pid: {
      type: DataTypes.STRING(10),
      allowNull: false,
      references: {
        model: Product,
        key: "pid",
      },
    },
    piname: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  { timestamps: false },
);

export default ProductImage;

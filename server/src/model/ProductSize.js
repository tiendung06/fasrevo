import { DataTypes } from "sequelize";
import { sequelize } from "../database/mysql_db.js";
import Product from "./Product.js";
import Size from "./Size.js";

const ProductSize = sequelize.define(
  "product_size",
  {
    pid: {
      type: DataTypes.STRING(10),
      references: {
        model: Product,
        key: "pid",
      },
    },
    size_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Size,
        key: "size_id",
      },
    },
  },
  { timestamps: false }
);

ProductSize.removeAttribute("id");

export default ProductSize;

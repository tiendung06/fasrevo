import { DataTypes } from "sequelize";
import { sequelize } from "../database/mysql_db.js";
import Color from "./Color.js";
import Product from "./Product.js";

const ProductColor = sequelize.define(
  "product_color",
  {
    pid: {
      type: DataTypes.STRING(10),
      references: {
        model: Product,
        key: "pid",
      },
    },
    color_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Color,
        key: "color_id",
      },
    },
  },
  { timestamps: false }
);

ProductColor.removeAttribute("id");

export default ProductColor;

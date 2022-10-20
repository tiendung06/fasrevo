import { DataTypes } from "sequelize";
import { sequelize } from "../database/mysql_db.js";

const ProductType = sequelize.define(
  "product_type",
  {
    product_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    product_type_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false },
);

export default ProductType;

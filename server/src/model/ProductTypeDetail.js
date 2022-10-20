import { DataTypes } from "sequelize";
import { sequelize } from "../database/mysql_db.js";

const ProductTypeDetail = sequelize.define(
  "product_type_detail",
  {
    ptype_detail_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    ptype_detail_name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  { timestamps: false },
);

export default ProductTypeDetail;

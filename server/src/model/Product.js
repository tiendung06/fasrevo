import { DataTypes, TEXT } from "sequelize";
import { sequelize } from "../database/mysql_db.js";
import Color from "./Color.js";
import Combo from "./Combo.js";
import ProductType from "./ProductType.js";
import ProductTypeDetail from "./ProductTypeDetail.js";
import Sex from "./Sex.js";
import Size from "./Size.js";

const Product = sequelize.define("product", {
  // Nam, Nữ FE chả về
  sex: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Sex,
      key: "sex_id",
    },
  },
  // Áo, Quần, Phụ kiện FE chả về
  product_type: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: ProductType,
      key: "product_type_id",
    },
  },
  // Chi tiết productType FE chả về
  ptype_detail: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: ProductTypeDetail,
      key: "ptype_detail_id",
    },
  },
  // Đuôi mã sản phẩm
  pstt: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    autoIncrement: true,
  },
  // Mã sản phẩm
  pid: {
    type: DataTypes.STRING(10),
    allowNull: false,
    primaryKey: true,
  },
  // Màu sắc FE chả về
  color: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Color,
      key: "color_id",
    },
  },
  // Kích cỡ FE chả về
  size: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Size,
      key: "size_id",
    },
  },
  // Gói Combo
  combo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Combo,
      key: "combo_id",
    },
  },
  // ảnh sản phẩm
  image: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  // Tên sản phẩm
  pname: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  // Giá sản phẩm
  cost: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  // slc
  inStoke: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  // Số lượng đã bán
  quantity_sold: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  isDiscount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  discount: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  },
});

export default Product;

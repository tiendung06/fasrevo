import { DataTypes } from "sequelize";
import { sequelize } from "../database/mysql_db.js";
import Category from "./Category.js";
import CategoryDetail from "./CategoryDetail.js";
import Collection from "./Collection.js";
import Color from "./Color.js";
import Combo from "./Combo.js";
import Sex from "./Sex.js";
import Size from "./Size.js";

const Product = sequelize.define("product", {
  // Nam, Nữ FE trả về
  sex_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Sex,
      key: "sex_id",
    },
  },
  cid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Category,
      key: "cid",
    },
  },
  // Chi tiết CategoryType FE tra ve
  cdid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: CategoryDetail,
      key: "cdid",
    },
  },
  // Màu sắc FE trả về
  color_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Color,
      key: "color_id",
    },
  },
  // Kích cỡ FE trả về
  size_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Size,
      key: "size_id",
    },
  },
  // Gói Combo
  combo_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Combo,
      key: "combo_id",
    },
  },
  // Bộ sưu tập
  collection_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Collection,
      key: "collection_id",
    },
  },
  // Mã sản phẩm
  pid: {
    type: DataTypes.STRING(10),
    allowNull: false,
    primaryKey: true,
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

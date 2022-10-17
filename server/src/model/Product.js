import { DataTypes } from "sequelize";
import { sequelize } from "../database/mysql_db.js";
import Category from "./Category.js";
import CategoryDetail from "./CategoryDetail.js";

const Product = sequelize.define("product", {
  pid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cost: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  inStoke: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  size: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  color: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  sex: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  isDiscount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  discount: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  },
  cid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cdid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// Category.hasMany(Product);
Product.belongsTo(Category, {
  foreignKey: "cid",
});
Product.belongsTo(CategoryDetail, {
  foreignKey: "cdid",
});
export default Product;

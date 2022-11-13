import { DataTypes } from "sequelize";
import { sequelize } from "../database/mysql_db.js";
import Sex from "./Sex.js";

const User = sequelize.define("user", {
  uid: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  // Họ và tên
  fullname: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  // gmail
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // password
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // sdt
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Địa chỉ
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // avatar
  image: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  sex: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Sex,
      key: "sex_id",
    },
  },
  // quyền
  role: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

export default User;

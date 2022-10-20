import { DataTypes } from "sequelize";
import { sequelize } from "../database/mysql_db.js";

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
  // username
  username: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  // password
  password: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  // gmail
  email: {
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
  // quyền
  role: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

export default User;

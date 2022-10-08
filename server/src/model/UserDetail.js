import { DataTypes } from "sequelize";
import { sequelize } from "../database/mysql_db.js";
import User from "./User.js";

const UserDetail = sequelize.define("user_detail", {
  uid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  fullname: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  sex: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

// User.hasOne(UserDetail);
UserDetail.belongsTo(User, { foreignKey: "uid" });

export default UserDetail;

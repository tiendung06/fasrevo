import { DataTypes } from "sequelize";
import { sequelize } from "../database/mysql_db.js";
import User from "./User.js";
import Voucher from "./Voucher.js";

const UserVoucher = sequelize.define(
  "user_voucher",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    uid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "uid",
      },
    },
    vid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Voucher,
        key: "vid",
      },
    },
  },
  { timestamps: false },
);

// User.belongsToMany(Voucher, { through: UserVoucher });
// Voucher.belongsToMany(User, { through: UserVoucher });

export default UserVoucher;

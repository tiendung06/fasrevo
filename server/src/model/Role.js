import { DataTypes } from "sequelize";
import { sequelize } from "../database/mysql_db.js";

const Role = sequelize.define("role", {
  role_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  role_name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

export default Role;

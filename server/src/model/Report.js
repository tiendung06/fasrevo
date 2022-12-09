import { DataTypes } from "sequelize";
import { sequelize } from "../database/mysql_db.js";

// Làm báo cáo thu chi
const Report = sequelize.define("report", {
  report_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  order_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Report;

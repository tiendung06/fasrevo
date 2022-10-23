import { DataTypes, DATE } from "sequelize";
import { sequelize } from "../database/mysql_db.js";

const Collection = sequelize.define(
  "collection",
  {
    collection_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    collection_name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    collection_image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    heading: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  { timestamps: false },
);

export default Collection;

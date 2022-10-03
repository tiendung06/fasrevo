import { sequelize } from "../database/mysql_db.js";
import Category from "../model/Category.js";
import Product from "../model/Product.js";
import User from "../model/User.js";
import UserDetail from "../model/UserDetail.js";

try {
  await sequelize.authenticate();
  // create User
  await User.sync({ alter: true });
  // create UserDetail
  await UserDetail.sync({ alter: true });
  // create Category
  await Category.sync({ alter: true });
  // create Product
  await Product.sync({ alter: true });
  console.log("Connection has been established successfully.");
  sequelize.close();
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

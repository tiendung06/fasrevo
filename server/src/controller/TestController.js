import { sequelize } from "../database/mysql_db.js";
import User from "../model/User.js";
import Category from "../model/Category.js";
import Product from "../model/Product.js";
import ProductDetail from "../model/ProductDetail.js";
import Cart from "../model/Cart.js";
import Voucher from "../model/Voucher.js";
import UserVoucher from "../model/UserVoucher.js";

// try {
//   await sequelize.authenticate();
//   // create User
//   // await User.sync({ alter: true });
//   // create Category
//   // await Category.sync({ alter: true });
//   // create Product
//   // await Product.sync({ alter: true });
//   // create ProductDetail
//   // await ProductDetail.sync({ alter: true });
//   // create Cart
//   // await Cart.sync({ alter: true });
//   // create Voucher
//   // await Voucher.sync({ alter: true });
//   // create UserVoucher
//   // await UserVoucher.sync({ alter: true });
//   console.log("Connection has been established successfully.");
//   sequelize.close();
// } catch (error) {
//   console.log(error);
// }

var string = '{ "prop_1": "val_1", "prop_2": "val_2" }';

function testJSON(text) {
  if (typeof text !== "string") {
    return false;
  }
  try {
    JSON.parse(text);
    return true;
  } catch (error) {
    return false;
  }
}

if (testJSON(string) === true) {
  console.log(typeof JSON.parse(string));
}

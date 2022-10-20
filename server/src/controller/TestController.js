import { sequelize } from "../database/mysql_db.js";
import User from "../model/User.js";
import Product from "../model/Product.js";
import ProductDetail from "../model/ProductDetail.js";
import Cart from "../model/Cart.js";
import Voucher from "../model/Voucher.js";
import UserVoucher from "../model/UserVoucher.js";
import Color from "../model/Color.js";
import ProductType from "../model/ProductType.js";
import ProductTypeDetail from "../model/ProductTypeDetail.js";
import Sex from "../model/Sex.js";
import Size from "../model/Size.js";
import Combo from "../model/Combo.js";

try {
  await sequelize.authenticate();
  // create User
  await User.sync({ alter: true });
  // Create Color
  await Color.sync({ alter: true });
  // Create ProductType
  await ProductType.sync({ alert: true });
  // Create ProductTypeDetail
  await ProductTypeDetail.sync({ alert: true });
  // Create Sex
  await Sex.sync({ alert: true });
  // Create Size
  await Size.sync({ alert: true });
  // Create Combo
  await Combo.sync({ alter: true });
  // Create Product
  await Product.sync({ alert: true });
  // Create ProductDetail
  await ProductDetail.sync({ alert: true });
  // Create Cart
  await Cart.sync({ alter: true });
  // Create Voucher
  await Voucher.sync({ alter: true });
  // Create UserVoucher
  await UserVoucher.sync({ alter: true });
  console.log("Connection has been established successfully.");
  sequelize.close();
} catch (error) {
  console.log(error);
}

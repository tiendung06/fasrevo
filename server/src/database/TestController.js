import { sequelize } from "./mysql_db.js";
import User from "../model/User.js";
import Product from "../model/Product.js";
import ProductDetail from "../model/ProductDetail.js";
import Cart from "../model/Cart.js";
import Voucher from "../model/Voucher.js";
import UserVoucher from "../model/UserVoucher.js";
import Color from "../model/Color.js";
import Sex from "../model/Sex.js";
import Size from "../model/Size.js";
import Combo from "../model/Combo.js";
import Category from "../model/Category.js";
import CategoryDetail from "../model/CategoryDetail.js";
import Collection from "../model/Collection.js";
import ProductImage from "../model/ProductImage.js";

try {
  await sequelize.authenticate();
  // Create Color
  // await Color.sync({ alter: true });
  // await Color.create({ color_name: "pink" });
  // await Color.create({ color_name: "black" });
  // await Color.create({ color_name: "white" });
  // Create Category
  // await Category.sync({ alert: true });
  // await Category.create({ cname: "top" });
  // await Category.create({ cname: "bottom" });
  // await Category.create({ cname: "accessory" });
  // Create CategoryDetail
  // await CategoryDetail.sync({ alert: true });
  // await CategoryDetail.create({ cdname: "Hoddie", cid: "1" });
  // Create Sex
  // await Sex.sync({ alert: true });
  // await Sex.create({ sex_id: 1, sex_name: "male" });
  // await Sex.create({ sex_id: 0, sex_name: "female" });
  // Create Size
  // await Size.sync({ alert: true });
  // await Size.create({ size_name: "S" });
  // await Size.create({ size_name: "M" });
  // await Size.create({ size_name: "L" });
  // Create Combo
  // await Combo.sync({ alter: true });
  // await Combo.create({ combo_name: "A" });
  // await Combo.create({ combo_name: "B" });
  // create Collection
  // await Collection.sync({ alter: true });
  // create User
  // await User.sync({ alter: true });
  // Create Product
  // await Product.sync({ alert: true });
  // Create ProductImage
  // await ProductImage.sync({ alert: true });
  // Create ProductDetail
  // await ProductDetail.sync({ alert: true });
  // Create Cart
  // await Cart.sync({ alter: true });
  // Create Voucher
  // await Voucher.sync({ alter: true });
  // Create UserVoucher
  // await UserVoucher.sync({ alter: true });
  console.log("Connection has been established successfully.");
  sequelize.close();
} catch (error) {
  console.log(error);
}

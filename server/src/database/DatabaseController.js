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
import Role from "../model/Role.js";
import Order from "../model/Order.js";
import Report from "../model/Report.js";

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
  // await Collection.create({
  //   collection_name: "Bộ sưu tập mùa đông",
  //   collection_image: "Ảnh mùa đông",
  //   heading: "Danh cho mua dong",
  // });
  // create Role
  // await Role.sync({ alter: true });
  // await Role.create({ role_id: 0, role_name: "Khách hàng" });
  // await Role.create({ role_id: 1, role_name: "Admin" });
  // create User
  // await User.sync({ alter: true });
  // Create Product
  // await Product.sync({ alert: true });
  // await Product.create({sex_id: 0, cid: 1, cdid: 1, color_id: 1, size_id: 1, combo_id: 1, collection_id: 1, pid: 'P1', image: 'http://localhost:3030/image/image1669538193645.jpg', pname: 'pant', cost: '249000', inStoke: 23, quantity_sold: 50, isDiscount: 1, discount: 0.5})
  // await Product.create({sex_id: 0, cid: 1, cdid: 1, color_id: 1, size_id: 1, combo_id: 1, collection_id: 1, pid: 'P2', image: 'http://localhost:3030/image/image1669538193645.jpg', pname: 'pant', cost: '249000', inStoke: 23, quantity_sold: 50, isDiscount: 1, discount: 0.5})
  // await Product.create({sex_id: 0, cid: 1, cdid: 1, color_id: 1, size_id: 1, combo_id: 1, collection_id: 1, pid: 'P3', image: 'http://localhost:3030/image/image1669538193645.jpg', pname: 'pant', cost: '249000', inStoke: 23, quantity_sold: 50, isDiscount: 1, discount: 0.5})
  // await Product.create({sex_id: 0, cid: 1, cdid: 1, color_id: 1, size_id: 1, combo_id: 1, collection_id: 1, pid: 'P4', image: 'http://localhost:3030/image/image1669538193645.jpg', pname: 'pant', cost: '249000', inStoke: 23, quantity_sold: 50, isDiscount: 1, discount: 0.5})
  // await Product.create({sex_id: 0, cid: 1, cdid: 1, color_id: 1, size_id: 1, combo_id: 1, collection_id: 1, pid: 'P5', image: 'http://localhost:3030/image/image1669538193645.jpg', pname: 'pant', cost: '249000', inStoke: 23, quantity_sold: 50, isDiscount: 1, discount: 0.5})
  // await Product.create({sex_id: 0, cid: 1, cdid: 1, color_id: 1, size_id: 1, combo_id: 1, collection_id: 1, pid: 'P6', image: 'http://localhost:3030/image/image1669538193645.jpg', pname: 'pant', cost: '249000', inStoke: 23, quantity_sold: 50, isDiscount: 1, discount: 0.5})
  // await Product.create({sex_id: 0, cid: 1, cdid: 1, color_id: 1, size_id: 1, combo_id: 1, collection_id: 1, pid: 'P7', image: 'http://localhost:3030/image/image1669538193645.jpg', pname: 'pant', cost: '249000', inStoke: 23, quantity_sold: 50, isDiscount: 1, discount: 0.5})
  // await Product.create({sex_id: 0, cid: 1, cdid: 1, color_id: 1, size_id: 1, combo_id: 1, collection_id: 1, pid: 'P8', image: 'http://localhost:3030/image/image1669538193645.jpg', pname: 'pant', cost: '249000', inStoke: 23, quantity_sold: 50, isDiscount: 1, discount: 0.5})
  // await Product.create({sex_id: 0, cid: 1, cdid: 1, color_id: 1, size_id: 1, combo_id: 1, collection_id: 1, pid: 'P9', image: 'http://localhost:3030/image/image1669538193645.jpg', pname: 'pant', cost: '249000', inStoke: 23, quantity_sold: 50, isDiscount: 1, discount: 0.5})
  // await Product.create({sex_id: 0, cid: 1, cdid: 1, color_id: 1, size_id: 1, combo_id: 1, collection_id: 1, pid: 'P10', image: 'http://localhost:3030/image/image1669538193645.jpg', pname: 'pant', cost: '249000', inStoke: 23, quantity_sold: 50, isDiscount: 1, discount: 0.5})
  // await Product.create({sex_id: 0, cid: 1, cdid: 1, color_id: 1, size_id: 1, combo_id: 1, collection_id: 1, pid: 'P11', image: 'http://localhost:3030/image/image1669538193645.jpg', pname: 'pant', cost: '249000', inStoke: 23, quantity_sold: 50, isDiscount: 1, discount: 0.5})
  // await Product.create({sex_id: 0, cid: 1, cdid: 1, color_id: 1, size_id: 1, combo_id: 1, collection_id: 1, pid: 'P12', image: 'http://localhost:3030/image/image1669538193645.jpg', pname: 'pant', cost: '249000', inStoke: 23, quantity_sold: 50, isDiscount: 1, discount: 0.5})
  // await Product.create({sex_id: 0, cid: 1, cdid: 1, color_id: 1, size_id: 1, combo_id: 1, collection_id: 1, pid: 'P13', image: 'http://localhost:3030/image/image1669538193645.jpg', pname: 'pant', cost: '249000', inStoke: 23, quantity_sold: 50, isDiscount: 1, discount: 0.5})
  // await Product.create({sex_id: 0, cid: 1, cdid: 1, color_id: 1, size_id: 1, combo_id: 1, collection_id: 1, pid: 'P14', image: 'http://localhost:3030/image/image1669538193645.jpg', pname: 'pant', cost: '249000', inStoke: 23, quantity_sold: 50, isDiscount: 1, discount: 0.5})
  // await Product.create({sex_id: 0, cid: 1, cdid: 1, color_id: 1, size_id: 1, combo_id: 1, collection_id: 1, pid: 'P15', image: 'http://localhost:3030/image/image1669538193645.jpg', pname: 'pant', cost: '249000', inStoke: 23, quantity_sold: 50, isDiscount: 1, discount: 0.5})
  // await Product.create({sex_id: 0, cid: 1, cdid: 1, color_id: 1, size_id: 1, combo_id: 1, collection_id: 1, pid: 'P16', image: 'http://localhost:3030/image/image1669538193645.jpg', pname: 'pant', cost: '249000', inStoke: 23, quantity_sold: 50, isDiscount: 1, discount: 0.5})
  // await Product.create({sex_id: 0, cid: 1, cdid: 1, color_id: 1, size_id: 1, combo_id: 1, collection_id: 1, pid: 'P17', image: 'http://localhost:3030/image/image1669538193645.jpg', pname: 'pant', cost: '249000', inStoke: 23, quantity_sold: 50, isDiscount: 1, discount: 0.5})
  // await Product.create({sex_id: 0, cid: 1, cdid: 1, color_id: 1, size_id: 1, combo_id: 1, collection_id: 1, pid: 'P18', image: 'http://localhost:3030/image/image1669538193645.jpg', pname: 'pant', cost: '249000', inStoke: 23, quantity_sold: 50, isDiscount: 1, discount: 0.5})
  // await Product.create({sex_id: 0, cid: 1, cdid: 1, color_id: 1, size_id: 1, combo_id: 1, collection_id: 1, pid: 'P19', image: 'http://localhost:3030/image/image1669538193645.jpg', pname: 'pant', cost: '249000', inStoke: 23, quantity_sold: 50, isDiscount: 1, discount: 0.5})
  // await Product.create({sex_id: 0, cid: 1, cdid: 1, color_id: 1, size_id: 1, combo_id: 1, collection_id: 1, pid: 'P20', image: 'http://localhost:3030/image/image1669538193645.jpg', pname: 'pant', cost: '249000', inStoke: 23, quantity_sold: 50, isDiscount: 1, discount: 0.5})
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
  // Create Order
  // await Order.sync({ alter: true });
  // Create Report
  // await Report.sync({alter: true});
  console.log("Connection has been established successfully.");
  sequelize.close();
} catch (error) {
  console.log(error);
}

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
import DeliveryStatus from "../model/DeliveryStatus.js";

try {
  await sequelize.authenticate();
  // Create Color
  await Color.sync({ alter: true });
  await Color.create({ color_name: "pink" });
  await Color.create({ color_name: "black" });
  await Color.create({ color_name: "white" });
  // Create Category
  await Category.sync({ alert: true });
  await Category.create({ cname: "top" });
  await Category.create({ cname: "bottom" });
  await Category.create({ cname: "accessory" });
  // Create CategoryDetail
  await CategoryDetail.sync({ alert: true });
  await CategoryDetail.create({ cdname: "Hoddie", cid: "1" });
  await CategoryDetail.create({ cdname: "Phông", cid: "1" });
  await CategoryDetail.create({ cdname: "Sơ mi", cid: "1" });
  await CategoryDetail.create({ cdname: "Khoác", cid: "1" });
  await CategoryDetail.create({ cdname: "Dài", cid: "2" });
  await CategoryDetail.create({ cdname: "Bò", cid: "2" });
  await CategoryDetail.create({ cdname: "Short", cid: "2" });
  await CategoryDetail.create({ cdname: "Mũ", cid: "3" });
  await CategoryDetail.create({ cdname: "Túi xách", cid: "3" });
  await CategoryDetail.create({ cdname: "Dây chuyền", cid: "3" });
  // Create Sex
  await Sex.sync({ alert: true });
  await Sex.create({ sex_id: 1, sex_name: "male" });
  await Sex.create({ sex_id: 0, sex_name: "female" });
  // Create Size
  await Size.sync({ alert: true });
  await Size.create({ size_name: "S" });
  await Size.create({ size_name: "M" });
  await Size.create({ size_name: "L" });
  await Size.create({ size_name: "XL" });
  // Create Combo
  await Combo.sync({ alter: true });
  await Combo.create({ combo_name: "A" });
  await Combo.create({ combo_name: "B" });
  // create Collection
  await Collection.sync({ alter: true });
  await Collection.create({
    collection_name: "Bộ sưu tập mùa đông",
    collection_image: "http://localhost:3030/image/image1669538193645.jpg",
    heading: "đông",
  });
  await Collection.create({
    collection_name: "Bộ sưu tập mùa thu",
    collection_image: "http://localhost:3030/image/image1669538193645.jpg",
    heading: "Danh cho mua dong",
  });
  await Collection.create({
    collection_name: "Bộ sưu tập mùa hè",
    collection_image: "http://localhost:3030/image/image1669538193645.jpg",
    heading: "Danh cho mua dong",
  });
  await Collection.create({
    collection_name: "Bộ sưu tập mùa xuân",
    collection_image: "http://localhost:3030/image/image1669538193645.jpg",
    heading: "Danh cho mua dong",
  });
  // create Role
  await Role.sync({ alter: true });
  await Role.create({ role_id: 0, role_name: "Khách hàng" });
  await Role.create({ role_id: 1, role_name: "Admin" });
  // create User
  await User.sync({ alter: true });
  // Create Product
  await Product.sync({ alert: true });
  await Product.create({
    sex_id: 1,
    cid: 1,
    cdid: 1,
    color_id: 1,
    size_id: 1,
    combo_id: 1,
    collection_id: 1,
    pid: "P1",
    image: "http://localhost:3030/image/image1669538193645.jpg",
    pname: "Áo Hoddie: pant",
    cost: "249000",
    inStoke: 23,
    quantity_sold: 50,
    isDiscount: 1,
    discount: 0.5,
  });
  await Product.create({
    sex_id: 0,
    cid: 2,
    cdid: 1,
    color_id: 1,
    size_id: 1,
    combo_id: 1,
    collection_id: 2,
    pid: "P2",
    image: "http://localhost:3030/image/image1669538193645.jpg",
    pname: "Quần đùi: pant1",
    cost: "249000",
    inStoke: 23,
    quantity_sold: 50,
    isDiscount: 1,
    discount: 0.5,
  });
  await Product.create({
    sex_id: 0,
    cid: 1,
    cdid: 1,
    color_id: 1,
    size_id: 1,
    combo_id: 1,
    collection_id: 3,
    pid: "P3",
    image: "http://localhost:3030/image/image1669538193645.jpg",
    pname: "Phụ kiện: pant2",
    cost: "249000",
    inStoke: 23,
    quantity_sold: 50,
    isDiscount: 1,
    discount: 0.5,
  });
  await Product.create({
    sex_id: 0,
    cid: 3,
    cdid: 1,
    color_id: 1,
    size_id: 1,
    combo_id: 1,
    collection_id: 3,
    pid: "P4",
    image: "http://localhost:3030/image/image1669538193645.jpg",
    pname: "pant3",
    cost: "249000",
    inStoke: 23,
    quantity_sold: 50,
    isDiscount: 1,
    discount: 0.5,
  });
  await Product.create({
    sex_id: 0,
    cid: 1,
    cdid: 1,
    color_id: 1,
    size_id: 1,
    combo_id: 1,
    collection_id: 2,
    pid: "P5",
    image: "http://localhost:3030/image/image1669538193645.jpg",
    pname: "pant4",
    cost: "249000",
    inStoke: 23,
    quantity_sold: 50,
    isDiscount: 1,
    discount: 0.5,
  });
  await Product.create({
    sex_id: 1,
    cid: 1,
    cdid: 1,
    color_id: 1,
    size_id: 1,
    combo_id: 1,
    collection_id: 1,
    pid: "P6",
    image: "http://localhost:3030/image/image1669538193645.jpg",
    pname: "pant5",
    cost: "249000",
    inStoke: 23,
    quantity_sold: 50,
    isDiscount: 1,
    discount: 0.5,
  });
  await Product.create({
    sex_id: 0,
    cid: 1,
    cdid: 1,
    color_id: 1,
    size_id: 1,
    combo_id: 1,
    collection_id: 1,
    pid: "P7",
    image: "http://localhost:3030/image/image1669538193645.jpg",
    pname: "pant6",
    cost: "249000",
    inStoke: 23,
    quantity_sold: 50,
    isDiscount: 1,
    discount: 0.5,
  });
  await Product.create({
    sex_id: 0,
    cid: 1,
    cdid: 1,
    color_id: 1,
    size_id: 1,
    combo_id: 1,
    collection_id: 1,
    pid: "P8",
    image: "http://localhost:3030/image/image1669538193645.jpg",
    pname: "pant7",
    cost: "249000",
    inStoke: 23,
    quantity_sold: 50,
    isDiscount: 1,
    discount: 0.5,
  });
  await Product.create({
    sex_id: 0,
    cid: 3,
    cdid: 1,
    color_id: 1,
    size_id: 1,
    combo_id: 1,
    collection_id: 1,
    pid: "P9",
    image: "http://localhost:3030/image/image1669538193645.jpg",
    pname: "pant8",
    cost: "249000",
    inStoke: 23,
    quantity_sold: 50,
    isDiscount: 1,
    discount: 0.5,
  });
  await Product.create({
    sex_id: 1,
    cid: 1,
    cdid: 1,
    color_id: 1,
    size_id: 1,
    combo_id: 1,
    collection_id: 1,
    pid: "P10",
    image: "http://localhost:3030/image/image1669538193645.jpg",
    pname: "pant9",
    cost: "249000",
    inStoke: 23,
    quantity_sold: 50,
    isDiscount: 1,
    discount: 0.5,
  });
  await Product.create({
    sex_id: 0,
    cid: 1,
    cdid: 1,
    color_id: 1,
    size_id: 1,
    combo_id: 1,
    collection_id: 1,
    pid: "P11",
    image: "http://localhost:3030/image/image1669538193645.jpg",
    pname: "pant10",
    cost: "249000",
    inStoke: 23,
    quantity_sold: 50,
    isDiscount: 1,
    discount: 0.5,
  });
  await Product.create({
    sex_id: 0,
    cid: 2,
    cdid: 1,
    color_id: 1,
    size_id: 1,
    combo_id: 1,
    collection_id: 2,
    pid: "P12",
    image: "http://localhost:3030/image/image1669538193645.jpg",
    pname: "pant11",
    cost: "249000",
    inStoke: 23,
    quantity_sold: 50,
    isDiscount: 1,
    discount: 0.5,
  });
  await Product.create({
    sex_id: 0,
    cid: 1,
    cdid: 1,
    color_id: 1,
    size_id: 1,
    combo_id: 1,
    collection_id: 1,
    pid: "P13",
    image: "http://localhost:3030/image/image1669538193645.jpg",
    pname: "pant12",
    cost: "249000",
    inStoke: 23,
    quantity_sold: 50,
    isDiscount: 1,
    discount: 0.5,
  });
  await Product.create({
    sex_id: 1,
    cid: 1,
    cdid: 1,
    color_id: 1,
    size_id: 1,
    combo_id: 1,
    collection_id: 1,
    pid: "P14",
    image: "http://localhost:3030/image/image1669538193645.jpg",
    pname: "pant13",
    cost: "249000",
    inStoke: 23,
    quantity_sold: 50,
    isDiscount: 1,
    discount: 0.5,
  });
  await Product.create({
    sex_id: 0,
    cid: 1,
    cdid: 1,
    color_id: 1,
    size_id: 1,
    combo_id: 1,
    collection_id: 3,
    pid: "P15",
    image: "http://localhost:3030/image/image1669538193645.jpg",
    pname: "pant14",
    cost: "249000",
    inStoke: 23,
    quantity_sold: 50,
    isDiscount: 1,
    discount: 0.5,
  });
  await Product.create({
    sex_id: 0,
    cid: 1,
    cdid: 1,
    color_id: 1,
    size_id: 1,
    combo_id: 1,
    collection_id: 2,
    pid: "P16",
    image: "http://localhost:3030/image/image1669538193645.jpg",
    pname: "pant15",
    cost: "249000",
    inStoke: 23,
    quantity_sold: 50,
    isDiscount: 1,
    discount: 0.5,
  });
  await Product.create({
    sex_id: 1,
    cid: 2,
    cdid: 1,
    color_id: 1,
    size_id: 1,
    combo_id: 1,
    collection_id: 1,
    pid: "P17",
    image: "http://localhost:3030/image/image1669538193645.jpg",
    pname: "pant16",
    cost: "249000",
    inStoke: 23,
    quantity_sold: 50,
    isDiscount: 1,
    discount: 0.5,
  });
  await Product.create({
    sex_id: 0,
    cid: 1,
    cdid: 1,
    color_id: 1,
    size_id: 1,
    combo_id: 1,
    collection_id: 1,
    pid: "P18",
    image: "http://localhost:3030/image/image1669538193645.jpg",
    pname: "pant17",
    cost: "249000",
    inStoke: 23,
    quantity_sold: 50,
    isDiscount: 1,
    discount: 0.5,
  });
  await Product.create({
    sex_id: 0,
    cid: 1,
    cdid: 1,
    color_id: 1,
    size_id: 1,
    combo_id: 1,
    collection_id: 2,
    pid: "P19",
    image: "http://localhost:3030/image/image1669538193645.jpg",
    pname: "pant18",
    cost: "249000",
    inStoke: 23,
    quantity_sold: 50,
    isDiscount: 1,
    discount: 0.5,
  });
  await Product.create({
    sex_id: 0,
    cid: 1,
    cdid: 1,
    color_id: 1,
    size_id: 1,
    combo_id: 1,
    collection_id: 1,
    pid: "P20",
    image: "http://localhost:3030/image/image1669538193645.jpg",
    pname: "pant19",
    cost: "249000",
    inStoke: 23,
    quantity_sold: 50,
    isDiscount: 1,
    discount: 0.5,
  });
  await Product.create({
    sex_id: 1,
    cid: 1,
    cdid: 1,
    color_id: 1,
    size_id: 1,
    combo_id: 1,
    collection_id: 1,
    pid: "P21",
    image: "http://localhost:3030/image/image1669538193645.jpg",
    pname: "pant",
    cost: "249000",
    inStoke: 23,
    quantity_sold: 50,
    isDiscount: 1,
    discount: 0.5,
  });
  await Product.create({
    sex_id: 0,
    cid: 1,
    cdid: 1,
    color_id: 1,
    size_id: 1,
    combo_id: 1,
    collection_id: 2,
    pid: "P22",
    image: "http://localhost:3030/image/image1669538193645.jpg",
    pname: "pant1",
    cost: "249000",
    inStoke: 23,
    quantity_sold: 50,
    isDiscount: 1,
    discount: 0.5,
  });
  await Product.create({
    sex_id: 0,
    cid: 1,
    cdid: 1,
    color_id: 1,
    size_id: 1,
    combo_id: 1,
    collection_id: 3,
    pid: "P23",
    image: "http://localhost:3030/image/image1669538193645.jpg",
    pname: "pant2",
    cost: "249000",
    inStoke: 23,
    quantity_sold: 50,
    isDiscount: 1,
    discount: 0.5,
  });
  await Product.create({
    sex_id: 0,
    cid: 1,
    cdid: 1,
    color_id: 1,
    size_id: 1,
    combo_id: 1,
    collection_id: 3,
    pid: "P24",
    image: "http://localhost:3030/image/image1669538193645.jpg",
    pname: "pant3",
    cost: "249000",
    inStoke: 23,
    quantity_sold: 50,
    isDiscount: 1,
    discount: 0.5,
  });
  await Product.create({
    sex_id: 0,
    cid: 1,
    cdid: 1,
    color_id: 1,
    size_id: 1,
    combo_id: 1,
    collection_id: 2,
    pid: "P25",
    image: "http://localhost:3030/image/image1669538193645.jpg",
    pname: "pant4",
    cost: "249000",
    inStoke: 23,
    quantity_sold: 50,
    isDiscount: 1,
    discount: 0.5,
  });
  await Product.create({
    sex_id: 1,
    cid: 2,
    cdid: 1,
    color_id: 1,
    size_id: 1,
    combo_id: 1,
    collection_id: 1,
    pid: "P26",
    image: "http://localhost:3030/image/image1669538193645.jpg",
    pname: "pant5",
    cost: "249000",
    inStoke: 23,
    quantity_sold: 50,
    isDiscount: 1,
    discount: 0.5,
  });
  await Product.create({
    sex_id: 0,
    cid: 1,
    cdid: 1,
    color_id: 1,
    size_id: 1,
    combo_id: 1,
    collection_id: 1,
    pid: "P27",
    image: "http://localhost:3030/image/image1669538193645.jpg",
    pname: "pant6",
    cost: "249000",
    inStoke: 23,
    quantity_sold: 50,
    isDiscount: 1,
    discount: 0.5,
  });
  await Product.create({
    sex_id: 0,
    cid: 1,
    cdid: 1,
    color_id: 1,
    size_id: 1,
    combo_id: 1,
    collection_id: 1,
    pid: "P28",
    image: "http://localhost:3030/image/image1669538193645.jpg",
    pname: "pant7",
    cost: "249000",
    inStoke: 23,
    quantity_sold: 50,
    isDiscount: 1,
    discount: 0.5,
  });
  await Product.create({
    sex_id: 1,
    cid: 3,
    cdid: 1,
    color_id: 1,
    size_id: 1,
    combo_id: 1,
    collection_id: 1,
    pid: "P29",
    image: "http://localhost:3030/image/image1669538193645.jpg",
    pname: "pant8",
    cost: "249000",
    inStoke: 23,
    quantity_sold: 50,
    isDiscount: 1,
    discount: 0.5,
  });
  await Product.create({
    sex_id: 0,
    cid: 1,
    cdid: 1,
    color_id: 1,
    size_id: 1,
    combo_id: 1,
    collection_id: 1,
    pid: "P30",
    image: "http://localhost:3030/image/image1669538193645.jpg",
    pname: "pant9",
    cost: "249000",
    inStoke: 23,
    quantity_sold: 50,
    isDiscount: 1,
    discount: 0.5,
  });
  await Product.create({
    sex_id: 1,
    cid: 1,
    cdid: 1,
    color_id: 1,
    size_id: 1,
    combo_id: 1,
    collection_id: 1,
    pid: "P31",
    image: "http://localhost:3030/image/image1669538193645.jpg",
    pname: "pant10",
    cost: "249000",
    inStoke: 23,
    quantity_sold: 50,
    isDiscount: 1,
    discount: 0.5,
  });
  await Product.create({
    sex_id: 0,
    cid: 1,
    cdid: 1,
    color_id: 1,
    size_id: 1,
    combo_id: 1,
    collection_id: 2,
    pid: "P32",
    image: "http://localhost:3030/image/image1669538193645.jpg",
    pname: "pant11",
    cost: "249000",
    inStoke: 23,
    quantity_sold: 50,
    isDiscount: 1,
    discount: 0.5,
  });
  await Product.create({
    sex_id: 0,
    cid: 1,
    cdid: 1,
    color_id: 1,
    size_id: 1,
    combo_id: 1,
    collection_id: 1,
    pid: "P33",
    image: "http://localhost:3030/image/image1669538193645.jpg",
    pname: "pant12",
    cost: "249000",
    inStoke: 23,
    quantity_sold: 50,
    isDiscount: 1,
    discount: 0.5,
  });
  await Product.create({
    sex_id: 1,
    cid: 2,
    cdid: 1,
    color_id: 1,
    size_id: 1,
    combo_id: 1,
    collection_id: 1,
    pid: "P34",
    image: "http://localhost:3030/image/image1669538193645.jpg",
    pname: "pant13",
    cost: "249000",
    inStoke: 23,
    quantity_sold: 50,
    isDiscount: 1,
    discount: 0.5,
  });
  await Product.create({
    sex_id: 0,
    cid: 1,
    cdid: 1,
    color_id: 1,
    size_id: 1,
    combo_id: 1,
    collection_id: 3,
    pid: "P35",
    image: "http://localhost:3030/image/image1669538193645.jpg",
    pname: "pant14",
    cost: "249000",
    inStoke: 23,
    quantity_sold: 50,
    isDiscount: 1,
    discount: 0.5,
  });
  await Product.create({
    sex_id: 0,
    cid: 1,
    cdid: 1,
    color_id: 1,
    size_id: 1,
    combo_id: 1,
    collection_id: 2,
    pid: "P36",
    image: "http://localhost:3030/image/image1669538193645.jpg",
    pname: "pant15",
    cost: "249000",
    inStoke: 23,
    quantity_sold: 50,
    isDiscount: 1,
    discount: 0.5,
  });
  await Product.create({
    sex_id: 1,
    cid: 1,
    cdid: 1,
    color_id: 1,
    size_id: 1,
    combo_id: 1,
    collection_id: 1,
    pid: "P37",
    image: "http://localhost:3030/image/image1669538193645.jpg",
    pname: "pant16",
    cost: "249000",
    inStoke: 23,
    quantity_sold: 50,
    isDiscount: 1,
    discount: 0.5,
  });
  await Product.create({
    sex_id: 0,
    cid: 1,
    cdid: 1,
    color_id: 1,
    size_id: 1,
    combo_id: 1,
    collection_id: 1,
    pid: "P38",
    image: "http://localhost:3030/image/image1669538193645.jpg",
    pname: "pant17",
    cost: "249000",
    inStoke: 23,
    quantity_sold: 50,
    isDiscount: 1,
    discount: 0.5,
  });
  await Product.create({
    sex_id: 0,
    cid: 1,
    cdid: 1,
    color_id: 1,
    size_id: 1,
    combo_id: 1,
    collection_id: 2,
    pid: "P39",
    image: "http://localhost:3030/image/image1669538193645.jpg",
    pname: "pant18",
    cost: "249000",
    inStoke: 23,
    quantity_sold: 50,
    isDiscount: 1,
    discount: 0.5,
  });
  await Product.create({
    sex_id: 1,
    cid: 1,
    cdid: 1,
    color_id: 1,
    size_id: 1,
    combo_id: 1,
    collection_id: 1,
    pid: "P40",
    image: "http://localhost:3030/image/image1669538193645.jpg",
    pname: "pant19",
    cost: "249000",
    inStoke: 23,
    quantity_sold: 50,
    isDiscount: 1,
    discount: 0.5,
  });
  // Create ProductImage
  await ProductImage.sync({ alert: true });
  // Create ProductDetail
  await ProductDetail.sync({ alert: true });
  // Create Cart
  await Cart.sync({ alter: true });
  // Create Voucher
  await Voucher.sync({ alter: true });
  // Create UserVoucher
  await UserVoucher.sync({ alter: true });
  // Create Order
  await Order.sync({ alter: true });
  // Create DeliveryStatus
  await DeliveryStatus.sync({ alter: true });
  // Create Report
  await Report.sync({ alter: true });
  console.log("Connection has been established successfully.");
  sequelize.close();
} catch (error) {
  console.log(error);
}

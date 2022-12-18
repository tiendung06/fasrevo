import { sequelize } from './mysql_db.js';
import User from '../model/User.js';
import Product from '../model/Product.js';
import ProductDetail from '../model/ProductDetail.js';
import Cart from '../model/Cart.js';
import Voucher from '../model/Voucher.js';
import UserVoucher from '../model/UserVoucher.js';
import Color from '../model/Color.js';
import Sex from '../model/Sex.js';
import Size from '../model/Size.js';
import Combo from '../model/Combo.js';
import Category from '../model/Category.js';
import CategoryDetail from '../model/CategoryDetail.js';
import Collection from '../model/Collection.js';
import ProductImage from '../model/ProductImage.js';
import Role from '../model/Role.js';
import Order from '../model/Order.js';
import Report from '../model/Report.js';
import DeliveryStatus from '../model/DeliveryStatus.js';
import ProductColor from '../model/ProductColor.js';
import ProductSize from '../model/ProductSize.js';
import { IMAGE_URL } from '../config/configuration.js';

try {
  await sequelize.authenticate();
  // Create Color
  await Color.sync({ alter: true });
  await Color.create({ color_name: 'Hồng' });
  await Color.create({ color_name: 'Đen' });
  await Color.create({ color_name: 'Trắng' });
  // Create Category
  await Category.sync({ alert: true });
  await Category.create({ cname: 'Top' });
  await Category.create({ cname: 'Bottom' });
  await Category.create({ cname: 'Accessory' });
  // Create CategoryDetail
  await CategoryDetail.sync({ alert: true });
  await CategoryDetail.create({ cdname: 'Hoodie', cid: '1' });
  await CategoryDetail.create({ cdname: 'Áo phông', cid: '1' });
  await CategoryDetail.create({ cdname: 'Áo sơ mi', cid: '1' });
  await CategoryDetail.create({ cdname: 'Áo khoác', cid: '1' });
  await CategoryDetail.create({ cdname: 'Quần dài', cid: '2' });
  await CategoryDetail.create({ cdname: 'Quần bò', cid: '2' });
  await CategoryDetail.create({ cdname: 'Quần short', cid: '2' });
  await CategoryDetail.create({ cdname: 'Mũ', cid: '3' });
  await CategoryDetail.create({ cdname: 'Túi xách', cid: '3' });
  await CategoryDetail.create({ cdname: 'Dây chuyền', cid: '3' });
  // Create Sex
  await Sex.sync({ alert: true });
  await Sex.create({ sex_id: 1, sex_name: 'male' });
  await Sex.create({ sex_id: 0, sex_name: 'female' });
  // Create Size
  await Size.sync({ alert: true });
  await Size.create({ size_name: 'S' });
  await Size.create({ size_name: 'M' });
  await Size.create({ size_name: 'L' });
  await Size.create({ size_name: 'XL' });
  // Create Combo
  await Combo.sync({ alter: true });
  await Combo.create({ combo_id: 0, combo_name: '0' });
  await Combo.create({ combo_id: 1, combo_name: 'A' });
  await Combo.create({ combo_id: 2, combo_name: 'B' });
  // create Collection
  await Collection.sync({ alter: true });
  await Collection.create({
    collection_name: 'Winter collection',
    collection_image: IMAGE_URL + '/image1669538193645.jpg',
    heading: 'Bộ sưu tập dành cho mùa đông',
  });
  await Collection.create({
    collection_name: 'Spring collection',
    collection_image: IMAGE_URL + '/image1669198193645.jpg',
    heading: 'Bộ sưu tập dành cho mùa xuân',
  });
  await Collection.create({
    collection_name: 'Summer collection',
    collection_image: IMAGE_URL + '/image1669198191234.jpg',
    heading: 'Bộ sưu tập dành cho mùa hè',
  });
  await Collection.create({
    collection_name: 'Fall collection',
    collection_image: IMAGE_URL + '/image1249538103645.jpg',
    heading: 'Bộ sưu tập dành cho mùa thu',
  });
  // create Role
  await Role.sync({ alter: true });
  await Role.create({ role_id: 0, role_name: 'Khách hàng' });
  await Role.create({ role_id: 1, role_name: 'Admin' });
  // create User
  await User.sync({ alter: true });
  // Create Product
  await Product.sync({ alert: true });
  // Create ProductImage
  await ProductImage.sync({ alert: true });
  // Create ProductDetail
  await ProductDetail.sync({ alert: true });
  // Create ProductColor
  await ProductColor.sync({ alert: true });
  // create ProductSize
  await ProductSize.sync({ alter: true });
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
  console.log('Connection has been established successfully.');
  sequelize.close();
} catch (error) {
  console.log(error);
}

import { IMAGE_URL, PAGE_LIMIT, status } from "../config/configuration.js";
import CategoryDetail from "../model/CategoryDetail.js";
import Product from "../model/Product.js";
import ProductColor from "../model/ProductColor.js";
import ProductDetail from "../model/ProductDetail.js";
import ProductSize from "../model/ProductSize.js";

class ProductController {
  // doGet: lấy tất cả các sản phẩm
  async getAllProducts(req, res) {
    try {
      const products = await Product.findAll({
        offset: (parseInt(req.query.page) - 1) * PAGE_LIMIT,
        limit: PAGE_LIMIT,
      });
      res.status(200).send(products);
    } catch (error) {
      res.status(400).send(error);
    }
  }
  // doPost
  async addProduct(req, res) {
    try {
      const {
        sex_id,
        cid,
        cdid,
        combo_id,
        collection_id,
        pname,
        cost,
        inStoke,
        quantity_sold,
        isDiscount,
        discount,
        color_id,
        size_id,
      } = req.body;
      const cdname = await CategoryDetail.findOne(
        { attributes: ["cdname"] },
        { where: { cdid: cdid } }
      );
      const ranCode = randomCode(6);
      const image = req.file.filename;
      await Product.create({
        sex_id: sex_id,
        cid: cid,
        cdid: cdid,
        combo_id: combo_id,
        collection_id: collection_id,
        pid: `P${ranCode}${sex_id}${cid}`,
        image: `${IMAGE_URL}/${image}`,
        pname: `${cdname.cdname.toString()}: ${pname}`,
        cost: cost,
        inStoke: inStoke,
        quantity_sold: quantity_sold,
        isDiscount: isDiscount,
        discount: discount,
      });
      await ProductDetail.create({ pid: `P${ranCode}${sex_id}${cid}` });
      const colorIdArr = color_id.toString().split(",");
      colorIdArr.map(async (item) => {
        await ProductColor.create({
          pid: `P${ranCode}${sex_id}${cid}`,
          color_id: parseInt(item),
        });
      });
      const sizeIdArr = size_id.toString().split(",");
      sizeIdArr.map(async (item) => {
        await ProductSize.create({
          pid: `P${ranCode}${sex_id}${cid}`,
          size_id: parseInt(item),
        });
      });
      res.status(200).send({ message: "Success", status: status.OK });
    } catch (error) {
      res.status(400).send(error);
    }
  }
}

const randomCode = (len) => {
  let res = "";
  const s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < len; i++) {
    res += s.charAt(Math.floor(Math.random() * s.length));
  }
  return res;
};

export default new ProductController();

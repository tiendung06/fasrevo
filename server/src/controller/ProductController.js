import { IMAGE_URL, PAGE_LIMIT, status } from "../config/configuration.js";
import CategoryDetail from "../model/CategoryDetail.js";
import Product from "../model/Product.js";
import ProductDetail from "../model/ProductDetail.js";

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
        color_id,
        size_id,
        combo_id,
        collection_id,
        pname,
        cost,
        inStoke,
        quantity_sold,
        isDiscount,
        discount,
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
        color_id: color_id,
        size_id: size_id,
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

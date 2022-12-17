import { IMAGE_URL, PAGE_LIMIT, status } from '../config/configuration.js';
import CategoryDetail from '../model/CategoryDetail.js';
import Product from '../model/Product.js';
import ProductColor from '../model/ProductColor.js';
import ProductDetail from '../model/ProductDetail.js';
import ProductSize from '../model/ProductSize.js';

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
      const cdname = await CategoryDetail.findOne(
        { attributes: ['cdname'] },
        { where: { cdid: cdid } }
      );
      const ranCode = randomCode(6);
      const image = req.file.filename;
      console.log(req.file);
      await Product.create({
        pid: `P${ranCode}${req.body.sex_id}${req.body.cid}`,
        sex_id: req.body.sex_id,
        cid: req.body.cid,
        cdid: req.body.cdid,
        combo_id: req.body.combo_id,
        image: `${IMAGE_URL}/${image}`,
        collection_id: req.body.collection_id,
        pname: `${cdname.cdname.toString()}: ${req.body.pname}`,
        cost: req.body.cost,
        inStoke: req.body.inStoke,
        quantity_sold: req.body.quantity_sold,
        isDiscount: req.body.isDiscount,
        discount: req.body.discount ? req.body.discount : null,
      });
      await ProductDetail.create({ pid: `P${ranCode}${sex_id}${cid}` });
      const colorIdArr = color_id.toString().split(',');
      colorIdArr.map(async (item) => {
        await ProductColor.create({
          pid: `P${ranCode}${sex_id}${cid}`,
          color_id: parseInt(item),
        });
      });
      const sizeIdArr = size_id.toString().split(',');
      sizeIdArr.map(async (item) => {
        await ProductSize.create({
          pid: `P${ranCode}${sex_id}${cid}`,
          size_id: parseInt(item),
        });
      });
      res.status(200).send({ message: 'Success', status: status.OK });
    } catch (error) {
      res.status(400).send(error);
    }
  }
}

const randomCode = (len) => {
  let res = '';
  const s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < len; i++) {
    res += s.charAt(Math.floor(Math.random() * s.length));
  }
  return res;
};

export default new ProductController();

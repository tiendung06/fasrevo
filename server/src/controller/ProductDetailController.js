import { status } from '../config/configuration.js';
import Product from '../model/Product.js';
import ProductDetail from '../model/ProductDetail.js';
import ProductColor from '../model/ProductColor.js';
import ProductSize from '../model/ProductSize.js';
import Color from '../model/Color.js';
import Size from '../model/Size.js';

class ProductDetailController {
  // doGet
  async getProductDetailByPid(req, res) {
    try {
      const product = await Product.findOne({
        where: { pid: req.query.pid },
      });
      const productDetail = await ProductDetail.findOne({
        where: { pid: req.query.pid },
      });
      const productColor = await ProductColor.findAll({
        where: { pid: req.query.pid },
      });
      const productSize = await ProductSize.findAll({
        where: { pid: req.query.pid },
      });
      const colorList = await Color.findAll();
      const sizeList = await Size.findAll();

      res.status(200).send({
        product: product,
        productDetail: productDetail,
        productColor,
        productSize,
        colorList,
        sizeList,
      });
    } catch (error) {
      res.status(400).send(error);
    }
  }

  // doPut
  async updateProductDetail(req, res) {
    try {
      const { pid, description, origin, texture, small_detail } = req.body;
      await ProductDetail.update(
        {
          description: description,
          origin: origin,
          texture: texture,
          small_detail: small_detail,
        },
        { where: { pid: pid } }
      );
      res.status(200).send({ message: 'Success', status: status.OK });
    } catch (error) {
      res.status(400).send(error);
    }
  }
}

export default new ProductDetailController();

import { Op } from "sequelize";
import { status } from "../config/configuration.js";
import Product from "../model/Product.js";
import ProductDetail from "../model/ProductDetail.js";

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
      res.status(200).send({ product: product, productDetail: productDetail });
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
      res.status(200).send({ message: "Success", status: status.OK });
    } catch (error) {
      res.status(400).send(error);
    }
  }
}

export default new ProductDetailController();

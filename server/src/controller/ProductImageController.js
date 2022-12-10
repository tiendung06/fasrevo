import { where } from "sequelize";
import { IMAGE_URL } from "../config/configuration.js";
import ProductImage from "../model/ProductImage.js";

class ProductImageController {
  // doGet
  async getProductImages(req, res) {
    try {
      const productImages = await ProductImage.findAll({
        where: { pid: req.query.pid },
      });
      res.status(200).send(productImages);
    } catch (error) {
      res.status(400).send(error);
    }
  }
  // doPost
  async addProductImages(req, res) {
    try {
      await req.files.map((item) => {
        ProductImage.create({
          pid: req.body.pid,
          piname: `${IMAGE_URL}/${item.filename}`,
        });
      });
      res.status(200).send(req.files);
    } catch (error) {
      res.status(400).send(error);
    }
  }
  // doPut
  async updateProductImages(req, res) {
    try {
      await req.files.map((item) => {
        ProductImage.update(
          {
            piname: `${IMAGE_URL}/${item.filename}`,
          },
          { where: { pid: req.body.pid } }
        );
      });
    } catch (error) {}
  }
}

export default new ProductImageController();

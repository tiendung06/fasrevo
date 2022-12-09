import Product from "../model/Product.js";

class ProductController {
  // doGet: lấy tất cả các sản phẩm
  async getAllProducts(req, res) {
    try {
      const products = await Product.findAll();
      res.status(200).send(products);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  // doGet: Lấy sản phẩm theo collection
  async getProductByCollection(req, res) {
    try {
      const products = await Product.findAll({
        where: { cid: req.body.collection_id },
      });
      res.status(200).send(products);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  // doGet: Lấy sản phẩm theo giới tính
  async getProductBySex(req, res) {
    try {
      const products = await Product.findAll({
        where: { cid: req.body.sex_id },
      });
      res.status(200).send(products);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  // doGet: Lấy sản phẩm theo cid
  async getProductByCid(req, res) {
    try {
      const products = await Product.findAll({ where: { cid: req.body.cid } });
      res.status(200).send(products);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  // doGet: Lấy sản phẩm theo cdid
  async getProductByCdid(req, res) {
    try {
      const products = await Product.findAll({ where: { cid: req.body.cdid } });
      res.status(200).send(products);
    } catch (error) {
      res.status(400).send(error);
    }
  }
}

export default new ProductController();

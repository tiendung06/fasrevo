import { sequelize } from "../database/mysql_db.js"
import Product from "../model/Product.js"

class ProductController{
  // doGet
  async getAllProducts(req, res) {
    const products = await Product.findAll();
    res.status(200).send(products);
  }

  // doGet
  async getProductByCid(req, res){

  }

  // doGet
  async getProductByCdid(req, res){

  }


}

export default new ProductController()
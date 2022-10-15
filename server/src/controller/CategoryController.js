import { okConfig } from "../config/configuration.js";
import Category from "../model/Category.js";

class CategoryController {
  // GET
  async getAllCategory(req, res) {
    
  }

  // GET
  async getCategoryByCid(req, res) {}

  // POST
  async addCategory(req, res) {
    try {
      await Category.create({
        cname: req.body.cname,
        cname_type: req.body.cname_type,
      })
      res.status(200).send({ message: okConfig.category.addCategory });
    } catch (error) {
      res.status(400).send({ message: error });
    }
  }

  // PUT
  async updateCategory(req, res) {}

  // DELETE
  async deleteCategory(req, res) {}
}

export default new CategoryController();

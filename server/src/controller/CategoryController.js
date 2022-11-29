import { status } from "../config/configuration.js";
import Category from "../model/Category.js";

class CategoryController {
  // GET
  async getAllCategory(req, res) {
    const categories = await Category.findAll();
    res.status(200).send(categories);
  }

  // GET
  async getCategoryByCid(req, res) {
    const category = await Category.findOne({where: {
      cid: req.params.cid
    }})
    res.status(200).send(category);
  }

  // POST
  async addCategory(req, res) {
    try {
      await Category.create({cname: req.body.cname});
      res.status(200).send({status: status.OK})
    } catch (error) {
      res.status(400).send({message: error, status: status.OK})
    }
  }

  // PUT
  async updateCategory(req, res) {
    try {
      await Category.update({cname: req.body.cname}, {where: {
        cid: req.params.cid,
      }});
      res.status(200).send({status: status.OK})
    } catch (error) {
      res.status(400).send({message: error, status: status.OK})
    }
  }

  // DELETE
  async deleteCategory(req, res) {
    try {
      await Category.destroy({where: {
        cid: req.params.cid,
      }});
      res.status(200).send({status: status.OK})
    } catch (error) {
      res.status(400).send({message: error, status: status.OK})
    }
  }
}

export default new CategoryController();

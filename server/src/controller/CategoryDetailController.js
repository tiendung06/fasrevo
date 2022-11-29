import CategoryDetail from "../model/CategoryDetail.js";
import { status } from "../config/configuration.js";


class CategoryDetailController {
  // doGet
  async getAllCategoryDetail(req, res) {
    const results = await CategoryDetail.findAll();
    res.status(200).send(results)
  }
  // doGet
  async getCategoryDetailByCdid(req, res) {
    const result = await CategoryDetail.findOne({where: {
      cdid: req.params.cdid
    }})
    res.status(200).send(result);
  }

   // POST
   async addCategoryDetail(req, res) {
    try {
      await CategoryDetail.create({cdname: req.body.cdname, cid: req.body.cid});
      res.status(200).send({status: status.OK})
    } catch (error) {
      res.status(400).send({message: error, status: status.OK})
    }
  }

  // PUT
  async updateCategoryDetail(req, res) {
    try {
      await CategoryDetail.update({cdname: req.body.cdname}, {where: {
        cdid: req.params.cdid,
      }});
      res.status(200).send({status: status.OK})
    } catch (error) {
      res.status(400).send({message: error, status: status.OK})
    }
  }

  // DELETE
  async deleteCategoryDetail(req, res) {
    try {
      await Category.destroy({where: {
        cdid: req.params.cdid,
      }});
      res.status(200).send({status: status.OK})
    } catch (error) {
      res.status(400).send({message: error, status: status.OK})
    }
  }
}

export default new CategoryDetailController();
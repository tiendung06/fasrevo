import { QueryTypes } from 'sequelize';
import { IMAGE_URL, PAGE_LIMIT, status } from '../config/configuration.js';
import { sequelize } from '../database/mysql_db.js';
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
        { where: { cdid: req.body.cdid } }
      );
      const ranCode = randomCode(6);
      const image = req.file.filename;
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
        discount: !isNaN(req.body.discount) ? req.body.discount : 0,
      });
      await ProductDetail.create({
        pid: `P${ranCode}${req.body.sex_id}${req.body.cid}`,
      });
      await ProductColor.create({
        pid: `P${ranCode}${req.body.sex_id}${req.body.cid}`,
        color_id: req.body.color_id,
      });
      await ProductSize.create({
        pid: `P${ranCode}${req.body.sex_id}${req.body.cid}`,
        size_id: req.body.size_id,
      });
      await ProductDetail.update(
        {
          description: req.body.description,
          origin: req.body.origin,
          texture: req.body.texture,
          small_detail: req.body.small_detail,
        },
        { where: { pid: `P${ranCode}${req.body.sex_id}${req.body.cid}` } }
      );
      res.status(200).send({ message: 'Success', status: status.OK });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }

  // doPut
  async updateProduct(req, res) {
    try {
      const { pid, combo_id, collection_id, cost, inStoke } = req.body;
      await Product.update(
        {
          combo_id: combo_id,
          collection_id: collection_id,
          cost: cost,
          inStoke: inStoke,
        },
        { where: { pid: pid } }
      );
      res.status(200).send({ message: 'Success', status: status.OK });
    } catch (error) {
      res.status(400).send(error);
    }
  }

  // doDelete
  async deleteProduct(req, res) {
    try {
      await ProductColor.destroy({ where: { pid: req.body.pid } });
      await ProductSize.destroy({ where: { pid: req.body.pid } });
      await Product.destroy({ where: { pid: req.body.pid } });
      res.status(200).send({ message: 'Success', status: status.OK });
    } catch (error) {
      res.status(400).send(error);
    }
  }

  //doPut
  async updateProductColor(req, res) {
    try {
      const colorIdArr = req.body.color_id.toString().split(',');
      colorIdArr.map(async (item) => {
        await ProductColor.create({
          pid: req.body.pid,
          color_id: parseInt(item),
        });
      });
      res.status(200).send({ message: 'Success', status: status.OK });
    } catch (error) {
      res.status(400).send(error);
    }
  }

  //doDelete
  async deleteProductColor(req, res) {
    try {
      const colorIdArr = req.body.color_id.toString().split(',');
      await ProductColor.destroy({
        where: { pid: req.body.pid, color_id: colorIdArr },
      });
      res.status(200).send({ message: 'Success', status: status.OK });
    } catch (error) {
      res.status(400).send(error);
    }
  }

  //doPut
  async updateProductSize(req, res) {
    try {
      const sizeIdArr = req.body.size_id.toString().split(',');
      sizeIdArr.map(async (item) => {
        await ProductColor.create({
          pid: req.body.pid,
          size_id: parseInt(item),
        });
      });
      res.status(200).send({ message: 'Success', status: status.OK });
    } catch (error) {
      res.status(400).send(error);
    }
  }

  //doDelete
  async deleteProductSize(req, res) {
    try {
      const sizeIdArr = req.body.size_id.toString().split(',');
      await ProductSize.destroy({
        where: { pid: req.body.pid, size_id: sizeIdArr },
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

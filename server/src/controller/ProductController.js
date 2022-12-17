import { where } from 'sequelize';
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
        pname: `${req.body.pname}`,
        cost: req.body.cost,
        inStoke: req.body.inStoke,
        quantity_sold: req.body.quantity_sold,
        isDiscount: req.body.isDiscount,
        discount: !isNaN(req.body.discount) ? req.body.discount : 0,
      });
      await ProductDetail.create({
        pid: `P${ranCode}${req.body.sex_id}${req.body.cid}`,
      });
      const colorId = req.body.color_id;
      const colorIdArr = colorId.toString().split(',');
      colorIdArr.map(async (item) => {
        await ProductColor.create({
          pid: `P${ranCode}${req.body.sex_id}${req.body.cid}`,
          color_id: parseInt(item),
        });
      });
      const sizeId = req.body.size_id;
      const sizeIdArr = sizeId.toString().split(',');
      sizeIdArr.map(async (item) => {
        await ProductSize.create({
          pid: `P${ranCode}${req.body.sex_id}${req.body.cid}`,
          size_id: parseInt(item),
        });
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

  //getProductByPid
  async getProductByPid(req, res) {
    try {
      const product = await Product.findOne({ where: { pid: req.body.pid } });
      const productColor = await ProductColor.findAll({
        where: { pid: req.body.pid },
      });
      const productSize = await ProductSize.findAll({
        where: { pid: req.body.pid },
      });
      res.status(200).send({
        product: product,
        productColor: productColor,
        productSize: productSize,
      });
    } catch (error) {
      res.status(400).send(error);
    }
  }

  // doPut
  async updateProduct(req, res) {
    try {
      // const tmp = {
      //   sex_id: req.body.sex_id,
      //   cid: req.body.cid,
      //   cdid: req.body.cdid,
      //   combo_id: req.body.combo_id,
      //   // image: `${IMAGE_URL}/${image}`,
      //   collection_id: req.body.collection_id,
      //   pname: `${req.body.pname}`,
      //   cost: req.body.cost,
      //   inStoke: req.body.inStoke,
      //   quantity_sold: req.body.quantity_sold,
      //   isDiscount: req.body.isDiscount,
      //   discount: !isNaN(req.body.discount) ? req.body.discount : 0,
      // };
      // Object.keys(tmp).forEach((key) => {
      //   if (tmp[key] === '') {
      //     delete tmp[key];
      //   }
      // });
      // console.log(tmp);
      await Product.update(
        {
          sex_id: req.body.sex_id,
          cid: req.body.cid,
          cdid: req.body.cdid,
          combo_id: req.body.combo_id,
          image: `${IMAGE_URL}/${image}`,
          collection_id: req.body.collection_id,
          pname: `${req.body.pname}`,
          cost: req.body.cost,
          inStoke: req.body.inStoke,
          quantity_sold: req.body.quantity_sold,
          isDiscount: req.body.isDiscount,
          discount: !isNaN(req.body.discount) ? req.body.discount : 0,
        },
        { where: { pid: req.body.pid } }
      );
      await ProductDetail.update(
        {
          description: req.body.description,
          origin: req.body.origin,
          texture: req.body.texture,
          small_detail: req.body.small_detail,
        },
        { where: { pid: req.body.pid } }
      );
      const colorId = req.body.color_id;
      const colorIdArr = colorId.toString().split(',');
      colorIdArr.map(async (item) => {
        await ProductColor.update(
          {
            color_id: parseInt(item),
          },
          { where: { pid: req.body.pid } }
        );
      });
      const sizeId = req.body.size_id;
      const sizeIdArr = sizeId.toString().split(',');
      sizeIdArr.map(async (item) => {
        await ProductSize.update(
          {
            size_id: parseInt(item),
          },
          { where: { pid: req.body.pid } }
        );
      });
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

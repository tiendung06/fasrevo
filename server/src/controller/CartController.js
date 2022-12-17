import { status } from '../config/configuration.js';
import Cart from '../model/Cart.js';
import Product from '../model/Product.js';
import ProductColor from '../model/ProductColor.js';
import ProductSize from '../model/ProductSize.js';

class CartController {
  //doGet
  async getAllCart(req, res) {
    try {
      const carts = await Cart.findAll();
      res.status(200).send(carts);
    } catch (error) {
      res.status(400).send(error);
    }
  }
  //doGet
  async getCartByUid(req, res) {
    try {
      const carts = await Cart.findAll({ where: { uid: req.body.uid } });
      let subtotal = 0;
      carts.map((item) => {
        subtotal += item.total;
      });
      res.status(200).send({ carts: carts, subtotal: subtotal });
    } catch (error) {
      res.status(400).send(error);
    }
  }

  //doPost
  async addCart(req, res) {
    try {
      const { uid, pid, color_id, size_id } = req.body;
      const cart = await Cart.findOne({
        where: { uid: uid, pid: pid, color_id: color_id, size_id: size_id },
      });
      if (cart === null) {
        const product = await Product.findOne({ where: { pid: pid } });
        let price_tmp = 0;
        if (product.isDiscount == 1) {
          price_tmp = product.cost - product.cost * (product.discount / 100);
        } else {
          price_tmp = product.cost;
        }
        if (req.body.quantity === undefined) {
          await Cart.create({
            uid: uid,
            pid: pid,
            image: product.image.toString(),
            pname: product.pname.toString(),
            color_id: color_id,
            size_id: size_id,
            price: parseFloat(price_tmp),
            total: parseFloat(price_tmp),
          });
        } else {
          await Cart.create({
            uid: uid,
            pid: pid,
            image: product.image.toString(),
            pname: product.pname.toString(),
            olor_id: color_id,
            size_id: size_id,
            price: parseFloat(price_tmp),
            quantity: parseInt(req.body.quantity),
            total: parseFloat(price_tmp) * parseInt(req.body.quantity),
          });
        }
        res.status(200).send({ message: 'Success', status: status.OK });
      } else {
        res
          .status(400)
          .send({ messgae: 'Giỏ hàng đã tồn tại', status: status.ERROR });
      }
    } catch (error) {
      res.status(400).send(error);
    }
  }

  // doPut
  async udpateQuantity(req, res) {
    try {
      const { uid, pid, color_id, size_id, quantity } = req.body;
      await Cart.update(
        { quantity: quantity },
        { where: { uid: uid, pid: pid, color_id: color_id, size_id: size_id } }
      );
      res.status(200).send({ message: 'Success', status: status.OK });
    } catch (error) {
      res.status(400).send(error);
    }
  }
}

export default new CartController();

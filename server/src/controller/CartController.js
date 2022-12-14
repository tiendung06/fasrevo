import { status } from '../config/configuration.js';
import Cart from '../model/Cart.js';
import Color from '../model/Color.js';
import Product from '../model/Product.js';
import ProductColor from '../model/ProductColor.js';
import ProductSize from '../model/ProductSize.js';
import Size from '../model/Size.js';

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
      const colorList = await Color.findAll();
      const sizeList = await Size.findAll();
      res
        .status(200)
        .send({ carts: carts, subtotal: subtotal, colorList, sizeList });
    } catch (error) {
      res.status(400).send(error);
    }
  }

  //doPost
  async addCart(req, res) {
    try {
      const { uid, pid, color_id, size_id } = req.body;
      const cart = await Cart.findOne({
        where: { uid: uid, pid: pid, color_id, size_id },
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
            color_id: color_id,
            size_id: size_id,
            price: parseFloat(price_tmp),
            quantity: parseInt(req.body.quantity),
            total: parseFloat(price_tmp) * parseInt(req.body.quantity),
          });
        }
        res
          .status(200)
          .send({ message: 'Th??m v??o gi??? h??ng th??nh c??ng', status: status.OK });
      } else {
        const newQuantity = req.body.quantity + cart.quantity;

        await Cart.update(
          { quantity: newQuantity, total: cart.price * newQuantity },
          { where: { uid: uid, pid: pid, color_id, size_id } }
        );

        res.status(200).send({
          message:
            'S???n ph???m ???? c?? trong gi??? v?? s??? l?????ng s???n ph???m ???? ???????c c???p nh???t',
          status: status.OK,
        });
      }
    } catch (error) {
      res.status(400).send(error);
    }
  }

  async deleteCart(req, res) {
    try {
      await Cart.destroy({ where: { uid: req.body.uid, pid: req.body.pid } });
      res.status(200).send({ message: 'Success', status: status.OK });
    } catch (error) {
      res.status(400).send(error);
    }
  }

  // doPut
  async updateQuantity(req, res) {
    try {
      const { uid, pid, quantity, price } = req.body;
      await Cart.update(
        { quantity: quantity, total: price * quantity },
        { where: { uid: uid, pid: pid } }
      );
      res.status(200).send({ message: 'Success', status: status.OK });
    } catch (error) {
      res.status(400).send(error);
    }
  }
}

export default new CartController();

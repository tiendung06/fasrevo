import { status } from "../config/configuration.js";
import Cart from "../model/Cart.js";
import Product from "../model/Product.js";

class CartController {
  //doGet
  async getCartByUid(req, res) {}

  //doPost
  async addCart(req, res) {
    try {
      const { uid, pid } = req.body;
      const cart = await Cart.findOne({ where: { uid: uid, pid: pid } });
      if (cart === null) {
        const product = await Product.findOne({ where: { pid: pid } });
        let price_tmp = 0;
        if (product.isDiscount == 1) {
          price_tmp = product.cost - product.cost * (product.discount / 100);
        } else {
          price_tmp = product.cost;
        }
        // console.log(price);
        if (req.body.quantity === undefined) {
          await Cart.create({
            uid: uid,
            pid: pid,
            image: product.image.toString(),
            pname: product.pname.toString(),
            price: parseFloat(price_tmp),
            total: parseFloat(price_tmp),
          });
        } else {
          await Cart.create({
            uid: uid,
            pid: pid,
            image: product.image.toString(),
            pname: product.pname.toString(),
            price: parseFloat(price_tmp),
            quantity: parseInt(req.body.quantity),
            total: parseFloat(price_tmp) * parseInt(req.body.quantity),
          });
        }
        res.send({ message: "Success", status: status.OK });
      } else {
        res
          .status(400)
          .send({ messgae: "Giỏ hàng đã tồn tại", status: status.ERROR });
      }
    } catch (error) {
      res.status(400).send(error);
    }
  }
}

export default new CartController();

import { QueryTypes } from 'sequelize';
import { PAGE_LIMIT, status } from '../config/configuration.js';
import { sequelize } from '../database/mysql_db.js';
import Order from '../model/Order.js';

class OrderController {
  // doPost
  async addOrder(req, res) {
    try {
      const { uid, pid, quantity, message, total } = req.body;
      // const pidArr = pid.toString().split(',');
      // const carts = await sequelize.query(
      //   'select * from carts where uid = :uid and pid in(:pid)',
      //   {
      //     replacements: {
      //       uid: uid,
      //       pid: pidArr,
      //     },
      //     type: QueryTypes.SELECT,
      //   }
      // );
      // let total = 0;
      // carts.map((item) => {
      //   total += parseFloat(item.total);
      // });
      await Order.create({
        uid: uid,
        pid: pid,
        quantity: quantity,
        total: total,
        message: message !== '' ? message : null,
      });
      res.status(200).send({ message: 'Success', status: status.OK });
    } catch (error) {
      res.status(400).send(error);
    }
  }

  //doGet
  async getAllOrder(req, res) {
    try {
      const orders = await Order.findAll({
        offset: (parseInt(req.query.page) - 1) * PAGE_LIMIT,
        order: [[sequelize.col('createdAt'), 'DESC']],
        limit: PAGE_LIMIT,
      });
      res.status(200).send(orders);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  async getOrderByUid(req, res) {
    try {
      const orders = await Order.findAll({ where: { uid: req.query.uid } });
      res.status(200).send(orders);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  // doDelete
  async deleteOrder(req, res) {
    try {
      await Order.destroy({
        where: { uid: req.body.uid, order_id: req.body.order_id },
      });
      res.status(200).send({ message: 'Success', status: status.OK });
    } catch (error) {
      res.status(400).send(error);
    }
  }

  async updateOrder(req, res) {
    try {
      await Order.update(
        { message: req.body.message, status: req.body.status },
        {
          where: { uid: req.body.uid, order_id: req.body.order_id },
        }
      );
      res
        .status(200)
        .send({ message: 'Cập nhật đơn hàng thành công', status: status.OK });
    } catch (error) {
      res.status(400).send(error);
    }
  }
}

export default new OrderController();

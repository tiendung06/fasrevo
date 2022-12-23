import { QueryTypes } from 'sequelize';
import { status } from '../config/configuration.js';
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

  // doDelete
}

export default new OrderController();

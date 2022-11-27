import { DataTypes } from "sequelize";
import { sequelize } from "../database/mysql_db.js";
import Product from "./Product.js";
import User from "./User.js";

const Cart = sequelize.define("cart", {
  uid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "uid",
    },
  },
  pid: {
    type: DataTypes.STRING(10),
    allowNull: false,
    references: {
      model: Product,
      key: "pid",
    },
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pname: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  total: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  subtotal: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
});

Cart.removeAttribute('id');

export default Cart;

/* Mô tả trường status
- Nếu người dùng hủy đơn hàng thì db sẽ lưu trạng thái Hủy (0)
- Nếu người dùng thanh toán hết tiền thì db sẽ lưu trạng thái Thành công (1)
- Nếu người dùng thanh toán 1 nửa (cọc) trạng thái là Đặt cọc (2)
*/

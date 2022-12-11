import { DataTypes } from "sequelize";
import { sequelize } from "../database/mysql_db.js";
import Product from "./Product.js";
import User from "./User.js";
import Color from "./Color.js";
import Size from "./Size.js";

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
  color_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Color,
      key: "color_id",
    },
  },
  size_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Size,
      key: "size_id",
    },
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
  total: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
});

Cart.removeAttribute("id");

export default Cart;

/* Mô tả trường status
- Nếu người dùng hủy đơn hàng thì db sẽ lưu trạng thái Hủy (0)
- Nếu người dùng thanh toán hết tiền thì db sẽ lưu trạng thái Thành công (1)
- Nếu người dùng thanh toán 1 nửa (cọc) trạng thái là Đặt cọc (2)
*/

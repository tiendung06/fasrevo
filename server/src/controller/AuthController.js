import { errorConfig, okConfig } from "../config/configuration.js";
import User from "../model/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { transporter, isEmailValid } from "../config/EmailConfig.js";

class AuthController {
  async register(req, res) {
    const email = req.body.email;
    const { valid, reason, validators } = await isEmailValid(email);
    if (valid) {
      try {
        const user = await User.findOne({
          where: { username: req.body.username, email: email },
        });
        if (user != null) {
          res.status(422).send(errorConfig.register.isExist);
        } else {
          const salt = await bcrypt.genSalt(10);
          const hassPass = await bcrypt.hash(req.body.password, salt);
          try {
            await User.create({
              email: req.body.email,
              username: req.body.username,
              password: hassPass,
              role: req.body.role,
            });
            await transporter.sendMail({
              from: "fasrevo@gmail.com",
              to: req.body.email,
              subject: okConfig.email.register.isOkRegister,
              html: `<h1>Chúc mừng bạn đã đăng kí thành công tài khoản ${req.body.username}<h1>
                  <h3>Vui lòng bấm vào đường link dưới đây để tiến hàng mua hàng</h3>
                  <a href="${okConfig.email.register.url}">Fasrevo</a>
                `,
            });
            res.status(200).send({
              message: okConfig.register.isOK,
            });
          } catch (error) {
            res.status(400).send({ message: { error } });
          }
        }
      } catch (error) {
        res.status(400).send({ message: { error } });
      }
    } else {
      return res.status(400).send({
        message: errorConfig.email.notExist,
        reason: validators[reason].reason,
      });
    }
  }
}

export default new AuthController();

/*
  Mô tả chức năng
  - Đăng kí:
   + Cho phép người dùng đăng kí tài khoản sử dụng email cá nhân để đăng kí (Nếu email ko tồn tại thì sẽ không được đăng kí)
   + Sau khi tạo mới tài khoản thành công sẽ gửi email cho người dùng xác nhận và có link để người dùng truy cập vào mua hàng
   + Mật khẩu của người dùng sẽ được mã hóa và lưu về phía database 
*/

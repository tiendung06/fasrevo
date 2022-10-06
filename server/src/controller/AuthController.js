import { errorConfig, okConfig } from "../config/configuration.js";
import User from "../model/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import transporter from "../config/EmailConfig.js";

class AuthController {
  async register(req, res) {
    try {
      const user = await User.findOne({
        where: { username: req.body.username, email: req.body.email },
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
            role: req.body.role
          })
          await transporter.sendMail({
            from: "fasrevo@gmail.com",
            to: req.body.email,
            subject: okConfig.email.register.isOkRegister,
            html: `<h1>Chúc mừng bạn đã đăng kí thành công tài khoản ${req.body.username}<h1>
              <h3>Vui lòng bấm vào đường link dưới đây để tiến hàng mua hàng</h3>
              <a href="${okConfig.email.register.url}">Fasrevo</a>
            `
          })
          res.status(200).send(okConfig.register.isOK);
        } catch (error) {
          res.status(400).send(error);
        }
      }
    } catch (error) {
      res.status(400).send(error);
    }
  }
}

export default new AuthController();

/*
  Mô tả chức năng
  - Đăng kí:
   + Cho phép người dùng đăng kí tài khoản sử dụng email cá nhân để đăng kí
   + Sau khi tạo mới tài khoản thành công sẽ gửi email cho người dùng xác nhận
   + Mật khẩu của người dùng sẽ được mã hóa và lưu về phía database 
*/

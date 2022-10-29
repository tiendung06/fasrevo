import {
  errorConfig,
  okConfig,
  status,
  TOKEN_SECRET,
} from "../config/configuration.js";
import User from "../model/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { transporter, isEmailValid } from "../config/EmailConfig.js";

class AuthController {
  // register
  async register(req, res) {
    const { valid, reason, validators } = await isEmailValid(req.body.email);
    if (valid) {
      try {
        const user = await User.findOne({
          where: { email: req.body.email },
        });
        if (user !== null) {
          res.status(422).send({
            message: errorConfig.register.isExist,
            status: status.error,
          });
        } else {
          const salt = await bcrypt.genSalt(10);
          const hassPass = await bcrypt.hash(req.body.password, salt);
          try {
            await User.create({
              fullname: req.body.fullname,
              password: hassPass,
              email: req.body.email,
              phone: req.body.phone,
              address: req.body.address,
              sex: req.body.sex,
              role: req.body.role,
            });
            try {
              await transporter.sendMail({
                from: "fasrevo@gmail.com",
                to: req.body.email,
                subject: okConfig.email.register.isOkRegister,
                html: `<h1>Chúc mừng ${req.body.fullname} đã đăng kí thành công tài khoản<h1>
                    <h3>Vui lòng bấm vào đường link dưới đây để tiến hành mua hàng</h3>
                    <a href="${okConfig.email.register.url}">Fasrevo</a>
                  `,
              });
            } catch (error) {
              res.status(400).send({
                message: errorConfig.email.notSend,
                status: status.error,
              });
            }
            res.status(200).send({
              message: okConfig.register.isOK,
              status: status.ok,
            });
          } catch (error) {
            // console.log(error);
            res.status(400).send({ message: { error }, status: status.error });
          }
        }
      } catch (error) {
        console.log(error);
        res.status(400).send({ message: { error }, status: status.error });
      }
    } else {
      return res.status(400).send({
        message: errorConfig.email.notExist,
        reason: validators[reason].reason,
        status: status.error,
      });
    }
  }

  // login
  async login(req, res) {
    const user = await User.findOne({
      where: { email: req.body.email },
    });
    if (user == null) {
      res.status(422).send({
        message: errorConfig.login.accountExist,
        status: status.error,
      });
    } else {
      const checkPass = await bcrypt.compare(req.body.password, user.password);
      if (!checkPass) {
        res
          .status(422)
          .send({ message: errorConfig.login.password, status: status.error });
      } else {
        const token = jwt.sign({ _id: user.uid }, TOKEN_SECRET, {
          expiresIn: 60 * 60 * 24,
        });
        res.header("auth-token", token).send({ authToken: token });
      }
    }
  }

  // Change password
  async changePassword(req, res) {
    const user = await User.findOne({ where: { uid: req.params.uid } });
    if (user === null) {
      res.status(422).send({
        message: errorConfig.login.accountExist,
        status: status.error,
      });
    } else {
      const hassPassOld = await bcrypt.compare(
        req.body.passwordOld,
        user.password,
      );
      if (!hassPassOld) {
        res
          .status(422)
          .send({ message: errorConfig.login.password, status: status.error });
      } else {
        const salt = await bcrypt.genSalt(10);
        const hassPass = await bcrypt.hash(req.body.passwordNew, salt);
        try {
          await User.update(
            { password: hassPass },
            {
              where: {
                uid: req.params.uid,
              },
            },
          );
          res
            .status(200)
            .send({ message: okConfig.password.changeOK, status: status.ok });
        } catch (error) {
          res.status(400).send({
            message: errorConfig.password.notChange,
            status: status.error,
          });
        }
      }
    }
  }

  // Forgot password
  async forgotPassword(req, res) {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (user === null) {
      res.status(422).send({
        message: errorConfig.login.accountExist,
        status: status.error,
      });
    } else {
      try {
        await transporter.sendMail({
          from: "fasrevo@gmail.com",
          to: req.body.email,
          subject: okConfig.email.register.isOkRegister,
          html: `
                <h1>Quên mật khẩu<h1>
                <h3>Bấm vào đường link bên dưới để đổi mật khẩu</h3>
                <a href="${okConfig.email.register.url}">Fasrevo</a>
              `,
        });
      } catch (error) {
        res
          .status(400)
          .send({ message: errorConfig.email.notSend, status: status.error });
      }
      res.status(200).send({
        uid: user.uid,
        message: okConfig.password.forgotPassMes,
        status: status.ok,
      });
    }
  }

  // handle forgot password
  async handleForgotPassword(req, res) {
    const user = User.findOne({
      where: {
        uid: req.params.uid,
      },
    });
    if (user === null) {
      res.status(400).send({
        message: errorConfig.login.accountExist,
        status: status.error,
      });
    } else {
      const salt = await bcrypt.genSalt(10);
      const hassPass = await bcrypt.hash(req.body.password, salt);
      try {
        await User.update(
          { password: hassPass },
          { where: { uid: req.params.uid } },
        );
        res
          .status(200)
          .send({ message: okConfig.password.changeOK, status: status.ok });
      } catch (error) {
        res.status(400).send({
          message: errorConfig.password.notChange,
          status: status.error,
        });
      }
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
  - Đăng nhập
   + Sử dụng tài khoản người dùng đã đăng kí để tiến hành đăng nhập vào web
   + Sử dụng jwt để authenticate và authorization
*/

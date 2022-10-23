import User from "../model/User.js";

class UserController {
  //doGet
  async getAllUser(req, res) {
    try {
      const users = await User.findAll();
      res.status(200).send(users);
    } catch (error) {
      res.status(400).send(error)
    }
  }
  //doGet
  async getUserByUid(req, res) {
    try {
      const user = await User.findOne({ where: { uid: req.params.uid } });
      res.status(200).send(user);
    } catch (error) {
      res.status(400).send(error)
    }
  }
  //doPost: Thêm tài khoản là admin
  async addUserAdmin(req, res){
    const { valid, reason, validators } = await isEmailValid(req.body.email);
    if (valid) {
      try {
        const user = await User.findOne({
          where: { username: req.body.username, email: req.body.email },
        });
        if (user != null) {
          res.status(422).send({ message: errorConfig.register.isExist });
        } else {
          const salt = await bcrypt.genSalt(10);
          const hassPass = await bcrypt.hash(req.body.password, salt);
          try {
            await User.create({
              email: req.body.email,
              username: req.body.username,
              password: hassPass,
              phone: req.body.phone,
              address: req.body.address,
              role: req.body.role,
            });
            await transporter.sendMail({
              from: "fasrevo@gmail.com",
              to: req.body.email,
              subject: okConfig.email.register.isOkRegister,
              html: `<h1>Chúc mừng bạn đã đăng kí thành công tài khoản Admin ${req.body.username}<h1>
                  <h3>Vui lòng bấm vào đường link dưới đây để tiến hành mua hàng</h3>
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
  //doPut: Sửa thông tin người dùng

  //doPut: Chức năng quên mật khẩu

  //doDelete: Chức năng xóa tài khoản
}

export default new UserController();

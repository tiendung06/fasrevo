import { errorConfig, okConfig, status } from "../config/configuration.js";
import User from "../model/User.js";
import bcrypt from "bcryptjs";

class UserController {
  //doGet
  async getAllUser(req, res) {
    try {
      const users = await User.findAll();
      res.status(200).send({ users: users, status: status.OK });
    } catch (error) {
      res.status(400).send({ message: error, status: status.ERROR });
    }
  }
  //doGet
  async getUserByUid(req, res) {
    try {
      const user = await User.findOne({ where: { uid: req.params.uid } });
      res.status(200).send({ user: user, status: status.OK });
    } catch (error) {
      res.status(400).send({ message: error, status: status.ERROR });
    }
  }
  //doPut: Sửa thông tin người dùng
  async updateUserByUid(req, res) {
    const user = await User.findOne({ where: { uid: req.params.uid } });
    if (user !== null) {
      await user.update({
        fullname: req.body.fullname,
        phone: req.body.phone,
        address: req.body.address,
        image: req.file.filename,
        sex: req.body.sex,
      });
      res
        .status(200)
        .send({ message: okConfig.user.UPDATE_USER, status: status.OK });
    } else {
      res.status(400).send({
        message: errorConfig.email.EXIST_ERROR,
        status: status.ERROR,
      });
    }
  }
  //doPut: Chức năng đổi mật khẩu
  async updatePassByEmail(req, res) {
    const user = await User.findOne({ where: { email: req.body.email } });
    console.log(req.body);
    if (user !== null) {
      const checkPass = await bcrypt.compare(req.body.password, user.password);
      if (checkPass) {
        const salt = await bcrypt.genSalt(10);
        const hassPass = await bcrypt.hash(req.body.passwordNew, salt);
        await user.update({ password: hassPass });
        res.send({ message: okConfig.password.CHANGE_OK, status: status.OK });
      } else {
        res.status(400).send({
          message: errorConfig.login.PASSWORD_ERROR,
          status: status.ERROR,
        });
      }
    } else {
      res.status(400).send({
        message: errorConfig.login.ACCOUNT_ERROR,
        status: status.ERROR,
      });
    }
  }
  //doDelete: Chức năng xóa tài khoản
}

export default new UserController();

import { errorConfig, okConfig } from "../config/configuration.js";
import UserDetail from "../model/UserDetail.js";

class UserDetailController {
  // get
  async getUserDetailByUid(req, res) {}
  // post
  async addUserDetail(req, res) {
    try {
      await UserDetail.create({
        uid: req.params.uid,
      });
      res.status(200).send({ message: okConfig.userDetail.addUserDetail });
    } catch (error) {
      res
        .status(400)
        .send({ message: errorConfig.userDetail.notAddUserDetail });
    }
  }
  // put
  async updateUserDetail(req, res) {}
  // delete
  async deleteUserDetail(req, res) {}
}

export default new UserDetailController();

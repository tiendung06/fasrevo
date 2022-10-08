import express from "express";
import UserDetailController from "../controller/UserDetailController.js";

const router = express.Router();

router.get("/getUserDetailByUid/:uid", UserDetailController.getUserDetailByUid);
router.post("/addUserDetail/:uid", UserDetailController.addUserDetail);
router.put("/updateUserDetail/:uid", UserDetailController.updateUserDetail);
router.delete("/deleteUserDetail/:uid", UserDetailController.deleteUserDetail);

export default router;

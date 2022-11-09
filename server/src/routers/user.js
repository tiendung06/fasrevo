import express from "express";
import UserController from "../controller/UserController.js";
import upload from "../middleware/handleFile.js";

const router = express.Router();

router.get("/getAllUser", UserController.getAllUser);
router.get("/getUserByUid/:uid", UserController.getUserByUid);
router.put(
  "/updateUserByUid/:uid",
  upload.single("image"),
  UserController.updateUserByUid,
);
router.put("/updatePassByEmail", UserController.updatePassByEmail);

export default router;

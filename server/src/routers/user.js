import express from "express";
import UserController from "../controller/UserController.js";

const router = express.Router();

router.get("/getAllUser", UserController.getAllUser);
router.get("/getUserByUid/:uid", UserController.getUserByUid);

export default router;
import express from "express";
import HomeController from "../controller/HomeController.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/", verifyToken, HomeController.home);

export default router;

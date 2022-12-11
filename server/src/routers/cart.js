import express from "express";
import CartController from "../controller/CartController.js";

const router = express.Router();

router.post("/add", CartController.addCart);

export default router;
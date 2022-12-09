import express from "express";
import ProductController from "../controller/ProductController.js";

const router = express.Router();

router.get("/getAllProducts", ProductController.getAllProducts);
router.post("/getProductsByCid", ProductController.getProductByCid);

export default router;

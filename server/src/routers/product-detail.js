import express from "express";
import ProductDetailController from "../controller/ProductDetailController.js";

const router = express.Router();

router.get("/get-pid", ProductDetailController.getProductDetailByPid);

router.put("/update-pid", ProductDetailController.updateProductDetail);

export default router;

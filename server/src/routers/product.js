import express from "express";
import ProductController from "../controller/ProductController.js";
import upload from "../middleware/handleFile.js";

const router = express.Router();

router.get("/get-all", ProductController.getAllProducts);
router.post(
  "/add-product",
  upload.single("image"),
  ProductController.addProduct
);

export default router;

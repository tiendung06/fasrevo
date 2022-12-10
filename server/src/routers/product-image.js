import express from "express";
import ProductImageController from "../controller/ProductImageController.js";
import upload from "../middleware/handleFile.js";

const router = express.Router();

router.post(
  "/add",
  upload.array("images", 3),
  ProductImageController.addProductImages
);

export default router;

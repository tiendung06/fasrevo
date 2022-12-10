import express from "express";
import CategoryController from "../controller/CategoryController.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/get-all", verifyToken, CategoryController.getAllCategory);
router.get("/get-cid/:cid", verifyToken, CategoryController.getCategoryByCid);
router.post("/add", verifyToken, CategoryController.addCategory);
router.put("/update/:cid", verifyToken, CategoryController.updateCategory);
router.delete("/delete/:cid", verifyToken, CategoryController.deleteCategory);

export default router;

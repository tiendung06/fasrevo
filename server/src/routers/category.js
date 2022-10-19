import express from "express";
import CategoryController from "../controller/CategoryController.js";

const router = express.Router();

router.get("/getAllCategory", CategoryController.getAllCategory);
router.get("/getCategoryByCid", CategoryController.getCategoryByCid);
router.post("/postCategory", CategoryController.addCategory);
router.put("/updateCategory", CategoryController.updateCategory);
router.delete("/deleteCategory", CategoryController.deleteCategory);

export default router;

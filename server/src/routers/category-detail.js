import express from "express";
import CategoryDetailController from "../controller/CategoryDetailController.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

router.get(
  "/get-all",
  verifyToken,
  CategoryDetailController.getAllCategoryDetail
);
router.get(
  "/get-cid/:cdid",
  verifyToken,
  CategoryDetailController.getCategoryDetailByCdid
);
router.post("/add", verifyToken, CategoryDetailController.addCategoryDetail);
router.put(
  "/update/:cdid",
  verifyToken,
  CategoryDetailController.updateCategoryDetail
);
router.delete(
  "/delete/:cdid",
  verifyToken,
  CategoryDetailController.deleteCategoryDetail
);

export default router;

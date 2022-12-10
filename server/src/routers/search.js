import express from "express";
import SearchController from "../controller/SearchController.js";

const router = express.Router();

router.get("/search-by-collection", SearchController.getProductByCollection);
router.get("/search-by-sex", SearchController.getProductBySex);
router.get("/search-by-cid", SearchController.getProductByCid);
router.get("/search-by-cdid", SearchController.getProductByCdid);
router.get("/search-by-name", SearchController.SearchByName);

router.get("/filter", SearchController.filter);
router.get("/sort", SearchController.sort);

export default router;

import express from 'express';
import SearchController from '../controller/SearchController.js';

const router = express.Router();

router.get('/search-by-collection', SearchController.getProductByCollection);
router.get('/search-by-sex', SearchController.getProductBySex);
router.get('/search-by-cid', SearchController.getProductByCid);
router.get('/search-by-cdid', SearchController.getProductByCdid);
router.get('/search-by-name', SearchController.SearchByName);
router.get('/search-user-by-uid', SearchController.SearchUserById);
router.get('/search-user-by-phone', SearchController.SearchUserByPhone);
router.get('/search-product-by-pid', SearchController.SearchProductByPid);
router.get('/search-product-by-pname', SearchController.SearchProductByPname);
router.get('/search-order-by-id', SearchController.SearchOrderById);
router.get('/filter', SearchController.filter);
router.get('/sort', SearchController.sort);

export default router;

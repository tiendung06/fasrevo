import express from 'express'
import CategoryDetailController from '../controller/CategoryDetailController.js';
import verifyToken from '../middleware/verifyToken.js'

const router = express.Router();

router.get('/getAllCategoryDetail', verifyToken, CategoryDetailController.getAllCategoryDetail);
router.get(
  '/getCategoryDetailByCid/:cdid',
  verifyToken,
  CategoryDetailController.getCategoryDetailByCdid
);
router.post('/postCategoryDetail', verifyToken, CategoryDetailController.addCategoryDetail);
router.put('/updateCategoryDetail/:cdid', verifyToken, CategoryDetailController.updateCategoryDetail);
router.delete(
  '/deleteCategoryDetail/:cdid',
  verifyToken,
  CategoryDetailController.deleteCategoryDetail
);

export default router;
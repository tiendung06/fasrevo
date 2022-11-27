import express from 'express';
import CategoryController from '../controller/CategoryController.js';
import verifyToken from '../middleware/verifyToken.js';

const router = express.Router();

router.get('/getAllCategory', verifyToken, CategoryController.getAllCategory);
router.get(
  '/getCategoryByCid/:cid',
  verifyToken,
  CategoryController.getCategoryByCid
);
router.post('/postCategory', verifyToken, CategoryController.addCategory);
router.put('/updateCategory/:cid', verifyToken, CategoryController.updateCategory);
router.delete(
  '/deleteCategory/:cid',
  verifyToken,
  CategoryController.deleteCategory
);

export default router;

import express from 'express';
import CategoryController from '../controller/CategoryController.js';
import verifyToken from '../middleware/verifyToken.js';

const router = express.Router();

router.get('/getAllCategory', verifyToken, CategoryController.getAllCategory);
router.get(
  '/getCategoryByCid',
  verifyToken,
  CategoryController.getCategoryByCid
);
router.post('/postCategory', verifyToken, CategoryController.addCategory);
router.put('/updateCategory', verifyToken, CategoryController.updateCategory);
router.delete(
  '/deleteCategory',
  verifyToken,
  CategoryController.deleteCategory
);

export default router;

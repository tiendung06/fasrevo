import express from 'express';
import CartController from '../controller/CartController.js';

const router = express.Router();

router.post('/get', CartController.getCartByUid);
router.post('/add', CartController.addCart);
router.post('/delete', CartController.deleteCart);
router.post('/update-quantity', CartController.updateQuantity);

export default router;

import express from 'express';
import OrderController from '../controller/OrderController.js';

const router = express.Router();

router.post('/add-order', OrderController.addOrder);
router.get('/get-order-by-uid', OrderController.getOrderByUid);
router.get('/get-all-order', OrderController.getAllOrder);
router.post('/delete-order', OrderController.deleteOrder);
router.put('/update-order', OrderController.updateOrder);

export default router;

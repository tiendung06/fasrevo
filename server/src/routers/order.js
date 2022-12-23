import express from 'express';
import OrderController from '../controller/OrderController.js';

const router = express.Router();

router.post('/add-order', OrderController.addOrder);

router.get('/get-all-order', OrderController.getAllOrder);

export default router;

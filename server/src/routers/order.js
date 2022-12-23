import express from 'express';
import OrderController from '../controller/OrderController.js';

const router = express.Router();

router.post('/add-order', OrderController.addOrder);

export default router;

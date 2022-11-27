import express from 'express'
import ProductController from '../controller/ProductController.js';

const router = express.Router();

router.get('/getAllProducts', ProductController.getAllProducts)

export default router;
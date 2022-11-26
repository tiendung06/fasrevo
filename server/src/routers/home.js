import express from 'express';
import HomeController from '../controller/HomeController.js';
import verifyToken from '../middleware/verifyToken.js';

const router = express.Router();

export default router;

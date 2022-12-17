import express from 'express';
import AuthController from '../controller/AuthController.js';
import verifyToken from '../middleware/verifyToken.js';

const router = express.Router();

router.get('/', verifyToken, AuthController.authenticate);
router.post('/register', AuthController.register);
router.post('/login', AuthController.login);
router.get('/logout', verifyToken, AuthController.logOut);
router.post('/forgotPass', AuthController.forgotPassword);
router.put('/handleForgotPass/:uid', AuthController.handleForgotPassword);

export default router;

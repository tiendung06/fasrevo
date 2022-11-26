import express from 'express';
import UserController from '../controller/UserController.js';
import upload from '../middleware/handleFile.js';
import verifyToken from '../middleware/verifyToken.js';

const router = express.Router();

router.get('/getAllUser', verifyToken, UserController.getAllUser);
router.get('/getUserByUid/:uid', verifyToken, UserController.getUserByUid);
router.put(
  '/updateUserByUid/:uid',
  verifyToken,
  upload.single('image'),
  UserController.updateUserByUid
);
router.put('/updatePassByEmail', verifyToken, UserController.updatePassByEmail);

export default router;

import express from 'express';
import UserController from '../controller/UserController.js';
import upload from '../middleware/handleFile.js';
import verifyToken from '../middleware/verifyToken.js';

const router = express.Router();

router.get('/get-all', verifyToken, UserController.getAllUser);
router.get('/get-uid/:uid', verifyToken, UserController.getUserByUid);
router.put(
  '/update/:uid',
  verifyToken,
  upload.single('image'),
  UserController.updateUserByUid
);
router.put('/update-pass-email', verifyToken, UserController.updatePassByEmail);

export default router;

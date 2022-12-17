import express from 'express';
import CollectionController from '../controller/CollectionController.js';

const router = express.Router();

router.get('/get-collections', CollectionController.getCollection);
router.get(
  '/get-collection-details',
  CollectionController.getCollectionDetails
);

export default router;

import { PAGE_LIMIT } from '../config/configuration.js';
import Collection from '../model/Collection.js';

class CollectionController {
  // doGet: get all collection
  async getAllCollection(req, res) {
    try {
      const collections = await Collection.findAll({
        offset: (parseInt(req.query.page) - 1) * PAGE_LIMIT,
        limit: PAGE_LIMIT,
      });
      res.status(200).send(collections);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  async getCollection(req, res) {
    try {
      const collections = await Collection.findAll();
      res.status(200).send({
        collections: collections,
      });
    } catch (error) {
      res.status(400).send(error);
    }
  }

  async getCollectionDetails(req, res) {
    try {
      const collections = await Collection.findAll({
        where: { collection_id: req.query.collection_id },
      });
      res.status(200).send({ collections: collections });
    } catch (error) {
      res.status(400).send(error);
    }
  }
}

export default new CollectionController();

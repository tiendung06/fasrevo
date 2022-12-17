import { Op, QueryTypes } from 'sequelize';
import { PAGE_LIMIT } from '../config/configuration.js';
import { sequelize } from '../database/mysql_db.js';
import Product from '../model/Product.js';

class SearchController {
  // doGet: Lấy sản phẩm theo collection
  async getProductByCollection(req, res) {
    try {
      const products = await Product.findAll({
        where: { cid: req.query.collection_id },
        offset: (parseInt(req.query.page) - 1) * PAGE_LIMIT,
        limit: PAGE_LIMIT,
      });

      const count = Product.count();

      const totalPageNumber = Math.ceil(count / PAGE_LIMIT);

      res.status(200).send({ products, totalPageNumber });
    } catch (error) {
      res.status(400).send(error);
    }
  }

  // doGet: Lấy sản phẩm theo giới tính
  async getProductBySex(req, res) {
    try {
      const products = await Product.findAll({
        where: { cid: req.query.sex_id },
        offset: (parseInt(req.query.page) - 1) * PAGE_LIMIT,
        limit: PAGE_LIMIT,
      });
      res.status(200).send(products);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  // doGet: Lấy sản phẩm theo cid
  async getProductByCid(req, res) {
    try {
      const products = await Product.findAll({
        where: { cid: req.query.cid },
        offset: (parseInt(req.query.page) - 1) * PAGE_LIMIT,
        limit: PAGE_LIMIT,
      });
      res.status(200).send(products);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  // doGet: Lấy sản phẩm theo cdid
  async getProductByCdid(req, res) {
    try {
      const products = await Product.findAll({
        where: { cid: req.query.cdid },
        offset: (parseInt(req.query.page) - 1) * PAGE_LIMIT,
        limit: PAGE_LIMIT,
      });
      res.status(200).send(products);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  // doGet
  async SearchByName(req, res) {
    try {
      const products = await Product.findAll({
        where: {
          pname: { [Op.like]: `%${req.query.pname}%` },
        },
        offset: (parseInt(req.query.page) - 1) * PAGE_LIMIT,
        limit: PAGE_LIMIT,
      });
      res.status(200).send(products);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  //doGet: Filter
  async filter(req, res) {
    try {
      const { page, sex_id, cid, collection_id, color_id, size_id } = req.query;
      const products = await filterProduct(
        page,
        sex_id,
        cid,
        collection_id,
        color_id,
        size_id
      );
      res.status(200).send(products);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  // doGet: Filter Sort Cost ASC
  async sort(req, res) {
    try {
      const {
        page,
        sex_id,
        cid,
        cdid,
        collection_id,
        color_id,
        size_id,
        sort_name,
        sort_by,
      } = req.query;
      const products = await sortFilter(
        page,
        sex_id,
        cid,
        cdid,
        collection_id,
        color_id,
        size_id,
        sort_name,
        sort_by
      );
      res.status(200).send(products);
    } catch (error) {
      res.status(400).send(error);
    }
  }
}

const sortFilter = async (
  page,
  sex_id,
  cid,
  // cdid,
  collection_id,
  color_id,
  size_id,
  sort_name,
  sort_by
) => {
  let collectionId = collection_id;
  const collectionIdArr = collectionId.toString().split(',');
  let colorId = color_id;
  const colorIdArr = colorId.toString().split(',');
  let sizeId = size_id;
  const sizeIdArr = sizeId.toString().split(',');

  let products = null;
  if (collection_id !== '' && color_id !== '' && size_id !== '') {
    products = await sequelize.query(
      `select distinct * from products as p
      where p.sex_id = :sex_id and p.cid = :cid and p.collection_id IN(:collection_id)
      and p.pid IN(select pc.pid from product_colors as pc where pc.color_id IN(:color_id))
      and p.pid IN(select ps.pid from product_sizes as ps where ps.size_id IN(:size_id))`,
      {
        replacements: {
          sex_id: sex_id,
          cid: cid,
          collection_id: collectionIdArr,
          color_id: colorIdArr,
          size_id: sizeIdArr,
        },
        type: QueryTypes.SELECT,
        order: [[sort_name, sort_by]],
        offset: (parseInt(page) - 1) * PAGE_LIMIT,
        limit: PAGE_LIMIT,
      }
    );
  } else {
    products = await sequelize.query(
      `select distinct * from products as p
      where p.sex_id = :sex_id and p.cid = :cid`,
      {
        replacements: {
          sex_id: sex_id,
          cid: cid,
        },
        type: QueryTypes.SELECT,
        order: [[sort_name, sort_by]],
        offset: (parseInt(page) - 1) * PAGE_LIMIT,
        limit: PAGE_LIMIT,
      }
    );
  }
  return products;
};

const filterProduct = async (
  page,
  sex_id,
  cid,
  // cdid,
  collection_id,
  color_id,
  size_id
) => {
  // console.log(size_id);
  let collectionId = collection_id;
  const collectionIdArr = collectionId.toString().split(',');
  let colorId = color_id;
  const colorIdArr = colorId.toString().split(',');
  let sizeId = size_id;
  const sizeIdArr = sizeId.toString().split(',');

  let products = null;
  if (collection_id !== '' && color_id !== '' && size_id !== '') {
    products = await sequelize.query(
      `select distinct * from products as p
      where p.sex_id = :sex_id and p.cid = :cid and p.collection_id IN(:collection_id)
      and p.pid IN(select pc.pid from product_colors as pc where pc.color_id IN(:color_id))
      and p.pid IN(select ps.pid from product_sizes as ps where ps.size_id IN(:size_id))`,
      {
        replacements: {
          sex_id: sex_id,
          cid: cid,
          collection_id: collectionIdArr,
          color_id: colorIdArr,
          size_id: sizeIdArr,
        },
        type: QueryTypes.SELECT,
        offset: (parseInt(page) - 1) * PAGE_LIMIT,
        limit: PAGE_LIMIT,
      }
    );
  } else {
    products = await sequelize.query(
      `select distinct * from products as p
      where p.sex_id = :sex_id and p.cid = :cid`,
      {
        replacements: {
          sex_id: sex_id,
          cid: cid,
        },
        type: QueryTypes.SELECT,
        offset: (parseInt(page) - 1) * PAGE_LIMIT,
        limit: PAGE_LIMIT,
      }
    );
  }
  // console.log(products);
  return products;
};

export default new SearchController();

import { Op } from "sequelize";
import { PAGE_LIMIT } from "../config/configuration.js";
import Product from "../model/Product.js";

class SearchController {
  // doGet: Lấy sản phẩm theo collection
  async getProductByCollection(req, res) {
    try {
      const products = await Product.findAll({
        where: { cid: req.query.collection_id },
        offset: (parseInt(req.query.page) - 1) * PAGE_LIMIT,
        limit: PAGE_LIMIT,
      });
      res.status(200).send(products);
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
      const { page, sex_id, cid, cdid, collection_id, color_id, size_id } =
        req.query;
      const products = await filterProduct(
        page,
        sex_id,
        cid,
        cdid,
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
  cdid,
  collection_id,
  color_id,
  size_id,
  sort_name,
  sort_by
) => {
  let collectionId = collection_id;
  const collectionIdArr = collectionId.toString().split(",");
  let colorId = color_id;
  const colorIdArr = colorId.toString().split(",");
  let sizeId = size_id;
  const sizeIdArr = sizeId.toString().split(",");
  let cd_id = cdid;
  const cdidArr = cd_id.toString().split(",");
  const products = await Product.findAll({
    where: {
      [Op.and]: [{ sex_id: sex_id }],
      [Op.or]: [
        {
          cid: cid !== "" ? cid : null,
        },
        { cdid: cdidArr.length > 0 ? cdidArr : null },
        {
          collection_id: collectionIdArr.length > 0 ? collectionIdArr : null,
        },
        { color_id: colorIdArr.length > 0 ? colorIdArr : null },
        {
          size_id: sizeIdArr.length > 0 ? sizeIdArr : null,
        },
      ],
    },
    order: [[sort_name, sort_by]],
    offset: (parseInt(page) - 1) * PAGE_LIMIT,
    limit: PAGE_LIMIT,
  });
  return products;
};

const filterProduct = async (
  page,
  sex_id,
  cid,
  cdid,
  collection_id,
  color_id,
  size_id
) => {
  let collectionId = collection_id;
  const collectionIdArr = collectionId.toString().split(",");
  let colorId = color_id;
  const colorIdArr = colorId.toString().split(",");
  let sizeId = size_id;
  const sizeIdArr = sizeId.toString().split(",");
  let cd_id = cdid;
  const cdidArr = cd_id.toString().split(",");
  const products = await Product.findAll({
    where: {
      [Op.and]: [{ sex_id: sex_id }],
      [Op.or]: [
        {
          cid: cid !== "" ? cid : null,
        },
        { cdid: cdidArr.length > 0 ? cdidArr : null },
        {
          collection_id: collectionIdArr.length > 0 ? collectionIdArr : null,
        },
        { color_id: colorIdArr.length > 0 ? colorIdArr : null },
        {
          size_id: sizeIdArr.length > 0 ? sizeIdArr : null,
        },
      ],
    },
    offset: (parseInt(page) - 1) * PAGE_LIMIT,
    limit: PAGE_LIMIT,
  });
  return products;
};

export default new SearchController();

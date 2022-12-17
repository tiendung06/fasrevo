// const domain = 'http://localhost:3030';
const domain = process.env.SERVER_HOST;
const authenticate = `${domain}/auth`;
const login = `${domain}/auth/login`;
const logout = `${domain}/auth/logout`;
const register = `${domain}/auth/register`;
const demo = `${domain}/demo`;
const search = `${domain}/search`;
const product = `${domain}/product-detail`;
const collection = `${domain}/collections`;
const addProduct = `${domain}/product/add-product`;
const searchItem = {
  getCollection: (page = 1, collection_id) =>
    `${search}/search-by-collection?page=${page}&collection_id=${collection_id}`,
  //collection_id = []
  getFilter: (page = 1, sex_id, cid, cdid, collection_id, color_id, size_id) =>
    `${search}/filter?page=${page}&sex_id=${sex_id}&cid=${cid}&cdid=${cdid}&collection_id=${collection_id}&color_id=${color_id}&size_id=${size_id}`,
  getSearchByCollection: (page = 1, collection_id) =>
    `${search}/search-by-collection?page=${page}&&collection_id=${collection_id}`,
  getSearchBySex: (page = 1, sex_id) =>
    `${search}/search-by-sex?page=${page}&sex_id=${sex_id}`,
  getSearchByCid: (page = 1, cid) =>
    `${search}/search-by-cid?page=${page}&cid=${cid}`,
  getSearchByCdid: (page = 1, cdid) =>
    `${search}/search-by-cdid?page=${page}&cdid=${cdid}`,
  getSearchByName: (page = 1, pname = '') =>
    `${search}/search-by-name?page=${page}&pname=${pname}`,
  getSort: (
    page = 1,
    sex_id,
    cid,
    cdid,
    collection_id,
    color_id,
    size_id,
    sort_name,
    sort_by
  ) =>
    `${search}/sort?page=${page}&sex_id=${sex_id}&cid=${cid}&cdid=${cdid}&collection_id=${collection_id}&color_id=${color_id}&size_id=${size_id}&sort_name=${sort_name}&sort_by=${sort_by}`,
  getFilter: (page = 1, sex_id, cid, cdid, collection_id, color_id, size_id) =>
    `${search}/filter?page=${page}&sex_id=${sex_id}&cid=${cid}&cdid=${cdid}&collection_id=${collection_id}&color_id=${color_id}&size_id=${size_id}`,
};
const productDetail = {
  getProductDetail: (pid) => `${product}/get-pid?pid=${pid}`,
  getAllProduct: () => `${domain}/product/get-all?page=1`,
  addProduct: () => `${domain}/product/add-product`,
};
const collections = {
  getAllCollections: () => `${collection}/get-collections`,
  getCollectionDetails: (collection_id) =>
    `${collection}/get-collection-details?collection_id=${collection_id}`,
};
export {
  login,
  demo,
  register,
  logout,
  authenticate,
  searchItem,
  productDetail,
  collections,
  addProduct,
};

const serverDomain = process.env.SERVER_HOST;
const authenticate = `${serverDomain}/auth`;
const login = `${serverDomain}/auth/login`;
const logout = `${serverDomain}/auth/logout`;
const register = `${serverDomain}/auth/register`;
const demo = `${serverDomain}/demo`;
const search = `${serverDomain}/search`;
const productDetails = `${serverDomain}/product-detail`;
const collection = `${serverDomain}/collections`;
const addProduct = `${serverDomain}/product/add-product`;
const updateProduct = `${serverDomain}/product/update-product`;
const userEditPassword = `${serverDomain}/user/update-pass-email`;
const getCart = `${serverDomain}/cart/get`;
const addCart = `${serverDomain}/cart/add`;
const featured_product = `${serverDomain}/product/get-featured-products?page=1`;
const updateQuantity = `${serverDomain}/cart/update-quantity`;
const getUser = `${serverDomain}/user/get-all`;
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
  getProductDetail: (pid) => `${productDetails}/get-pid?pid=${pid}`,
  getAllProduct: () => `${serverDomain}/product/get-all?page=1`,
  getAllProductDetails: () => `${serverDomain}/product/get-all-details?page=1`,
  addProduct: () => `${serverDomain}/product/add-product`,
};
const collections = {
  getAllCollections: () => `${collection}/get-collections`,
  getCollectionDetails: (collection_id) =>
    `${collection}/get-collection-details?collection_id=${collection_id}`,
};
export {
  serverDomain,
  login,
  demo,
  register,
  logout,
  authenticate,
  searchItem,
  productDetail,
  collections,
  addProduct,
  userEditPassword,
  getCart,
  addCart,
  featured_product,
  updateQuantity,
  updateProduct,
  getUser,
};

// const domain = 'http://localhost:3030';
const domain = 'http://26.139.40.205:3030';
const authenticate = `${domain}/auth`;
const login = `${domain}/auth/login`;
const logout = `${domain}/auth/logout`;
const register = `${domain}/auth/register`;
const demo = `${domain}/demo`;
const search = `${domain}/search`;
const product = `${domain}/product-detail`;
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
};
export {
  login,
  demo,
  register,
  logout,
  authenticate,
  searchItem,
  productDetail,
};

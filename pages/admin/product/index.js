import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from '../../../src/components/admin/Button';
import Input from '../../../src/components/Input';
import Modal from '../../../src/components/Modal';
import Select from '../../../src/components/Select';
import Main from '../../../src/layout/admin/Main';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  addProduct,
  deleteProduct,
  productDetail,
  searchItem,
  updateProduct,
} from '../../../src/constants/constants';
import Checkbox from '../../../src/components/Checkbox';
import { getImageUrl } from '../../../src/helpers';
import useDebounce from '../../../hooks/useDebounce';

const ProductReport = () => {
  const [product, setProduct] = useState();
  const [pid, setPid] = useState();
  const [productDetails, setProductDetails] = useState([]);
  const [productColors, setProductColors] = useState([]);
  const [productSizes, setProductSizes] = useState([]);
  const [currentImage, setCurrentImage] = useState();
  const [currentImageBase64, setCurrentImageBase64] = useState();
  const [filter, setFilter] = useState('');
  const [url, setUrl] = useState(productDetail.getAllProduct());
  const filterDebounce = useDebounce(filter);
  const [typeSearch, setTypeSearch] = useState(1);

  useEffect(() => {
    init();
  }, [url]);

  const init = () => {
    axios.get(url).then((resp) => {
      setProduct(resp.data);
    });
    axios.get(productDetail.getAllProductDetails()).then((resp) => {
      setProductDetails(resp.data);
    });
    axios.get(productDetail.getAllProductColorsAndSizes(1)).then((resp) => {
      setProductColors(resp.data.productColors);
      setProductSizes(resp.data.productSizes);
    });
  };

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    if (filterDebounce !== '') {
      if (typeSearch === 1) {
        setUrl(searchItem.getProductByPid(filterDebounce.trim()));
      } else {
        setUrl(searchItem.getProductByPname(filterDebounce.trim()));
      }
    } else {
      setUrl(productDetail.getAllProduct());
    }
  }, [typeSearch, filterDebounce]);

  const formik = useFormik({
    initialValues: {
      sex_id: 1,
      cid: 1,
      cdid: 1,
      combo_id: 1,
      collection_id: 1,
      pname: '',
      cost: 0,
      color_id: 1,
      size_id: 1,
      inStoke: 0,
      isDiscount: 0,
      discount: 0,
      origin: '',
      description: '',
      texture: '',
      small_detail: '',
      quantity_sold: 0,
    },
    validationSchema: Yup.object({}),
    onSubmit: (values, actions) => {
      handleAddProduct(values);
      actions.resetForm({
        sex_id: 1,
        cid: 1,
        cdid: 1,
        combo_id: 1,
        collection_id: 1,
        pname: '',
        cost: 0,
        color_id: 1,
        size_id: 1,
        inStoke: 0,
        isDiscount: 0,
        discount: 0,
        origin: '',
        description: '',
        texture: '',
        small_detail: '',
        quantity_sold: 0,
      });
    },
  });

  const updateProductFormik = useFormik({
    initialValues: {
      sex_id: 1,
      cid: 1,
      cdid: 1,
      combo_id: 1,
      collection_id: 1,
      pname: '',
      cost: 0,
      color_id: 1,
      size_id: 1,
      inStoke: 0,
      isDiscount: 0,
      discount: 0,
      origin: '',
      description: '',
      texture: '',
      small_detail: '',
      quantity_sold: 0,
    },
    validationSchema: Yup.object({}),
    onSubmit: (values) => {
      handleUpdateProduct(values);
    },
  });

  const handleAddProduct = (values) => {
    var image = document.querySelector('#exampleModal .image').files[0];
    upLoad(values, image);
    console.log(values);
  };

  const handleUpdateProduct = (values) => {
    var image =
      currentImage ?? document.querySelector('#updateProduct .image').files[0];

    upLoad(values, image, true);

    console.log(values);
  };

  const handleDeleteProduct = (pid) => {
    if (confirm('Xác nhận xóa sản phẩm?') == true) {
      try {
        axios.delete(`${deleteProduct}/${pid}`).then((resp) => {
          init();
        });
      } catch {
        alert('Không thể thực hiện tác vụ này, vui lòng thử lại');
      }
    }
  };

  const upLoad = (values, image, isUpdate = false) => {
    var formData = new FormData();
    formData.append('sex_id', values.sex_id);
    formData.append('cid', values.cid);
    formData.append('cdid', values.cdid);
    formData.append('combo_id', values.combo_id);
    formData.append('image', image);
    formData.append('collection_id', values.collection_id);
    formData.append('color_id', values.color_id);
    formData.append('size_id', values.size_id);
    formData.append('pname', values.pname);
    formData.append('cost', values.cost);
    formData.append('inStoke', values.inStoke);
    formData.append('quantity_sold', 0);
    formData.append('isDiscount', values.isDiscount);
    formData.append('discount', values.isDiscount === 1 ? values.discount : 0);
    formData.append('origin', values.origin);
    formData.append('texture', values.texture);
    formData.append('description', values.description);
    formData.append('small_detail', values.small_detail);

    console.log({ image: formData.get('image') });

    const modalId = isUpdate ? 'updateProduct' : 'exampleModal';

    if (isUpdate) {
      axios.put(`${updateProduct}/${pid}`, formData).then((res) => {
        if (res.status === 200 && res.data.status === 1) {
          console.log(res.data);
          document.querySelector(`#modal-${modalId}-close-button`).click();
          init();
        }
      });
    } else {
      axios.post(addProduct, formData).then((res) => {
        if (res.status === 200 && res.data.status === 1) {
          console.log(res.data);
          document.querySelector(`#modal-${modalId}-close-button`).click();
          init();
        }
      });
    }
  };

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  return (
    <Main heading="Quản lý sản phẩm">
      <>
        <h1 className="text-xl font-bold">Quản lý sản phẩm</h1>
        <div className="w-full bg-white rounded-lg h-20 mt-5 shadow-sm flex items-center gap-x-5 px-5">
          <input
            type="text"
            className="h-10 px-5 text-sm border-border_input border outline-none text-header rounded-lg"
            placeholder="Nhập thông tin tìm kiếm"
            value={filter}
            onChange={handleSearchChange}
          />
          <select
            name="typeSearch"
            id="typeSearch"
            className="border-border_input border outline-none h-10 text-sm text-header rounded-lg"
            value={typeSearch}
            onChange={(e) => setTypeSearch(e.target.value)}
          >
            <option value={1}>Tìm kiếm theo mã sản phẩm</option>
            <option value={2}>Tìm kiếm theo tên sản phẩm</option>
          </select>
          <select
            name=""
            id=""
            className="border-border_input border outline-none h-10 text-sm text-header rounded-lg px-5"
          >
            <option value="">Sắp xếp theo tên</option>
            <option value="">Sắp xếp theo giới tính</option>
          </select>

          <button
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            className="bg-primary_blue h-10 text-sm text-white px-5 rounded-lg truncate"
          >
            Thêm sản phẩm
          </button>
          <Modal
            id="exampleModal"
            aria-labelledby="exampleModalLabel"
            title="Thêm sản phẩm"
          >
            <form onSubmit={formik.handleSubmit}>
              <Input
                type="text"
                name="pname"
                label="Tên sản phẩm"
                placeholder="Nhập tên sản phẩm*"
                value={formik.values.pname}
                onChange={formik.handleChange}
              />
              <Select
                label="Giới tính"
                name="sex_id"
                value={formik.values.sex_id}
                onChange={formik.handleChange}
              >
                <option value={1}>Nam</option>
                <option value={0}>Nữ</option>
              </Select>
              <Input
                type="text"
                name="cost"
                label="Giá tiền"
                placeholder="Nhập giá tiền*"
                value={formik.values.cost}
                onChange={formik.handleChange}
              />
              <Checkbox
                name={'isDiscount'}
                label={'Giảm giá'}
                values={formik.values.isDiscount}
                onChange={(e) => {
                  formik.setFieldValue('isDiscount', e.target.checked ? 1 : 0);
                }}
              />
              {Boolean(formik.values.isDiscount) && (
                <Input
                  type="text"
                  name="discount"
                  label="Giảm giá"
                  placeholder="Nhập phần trăm giảm giá*"
                  value={formik.values.discount}
                  onChange={formik.handleChange}
                />
              )}
              <Select
                label="Màu sắc"
                name="color_id"
                value={formik.values.color_id}
                onChange={formik.handleChange}
              >
                <option value={1}>Hồng</option>
                <option value={2}>Đen</option>
                <option value={3}>Trắng</option>
              </Select>
              <Select
                label="Kích thước"
                name="size_id"
                value={formik.values.size_id}
                onChange={formik.handleChange}
              >
                <option value={1}>S</option>
                <option value={2}>M</option>
                <option value={3}>L</option>
                <option value={4}>XL</option>
              </Select>
              <Select
                label="Danh mục"
                name="cid"
                value={formik.values.cid}
                onChange={formik.handleChange}
              >
                <option value={1}>Top</option>
                <option value={2}>Bottom</option>
                <option value={3}>Accessory</option>
              </Select>
              <Select
                label="Chi tiết danh mục"
                name="cdid"
                value={formik.values.cdid}
                onChange={formik.handleChange}
              >
                <option value={1}>Hoddie</option>
                <option value={2}>Phông</option>
                <option value={3}>Sơ mi</option>
                <option value={4}>Khoác</option>
                <option value={5}>Dài</option>
                <option value={6}>Bò</option>
                <option value={7}>Short</option>
                <option value={8}>Mũ</option>
                <option value={9}>Túi xách</option>
                <option value={'10'}>Dây chuyền</option>
              </Select>
              <Input
                type="text"
                label="Số lượng"
                name="inStoke"
                placeholder="Nhập số lượng"
                value={formik.values.inStoke}
                onChange={formik.handleChange}
              />
              <Input
                type="textarea"
                label="Mô tả sản phẩm"
                name="description"
                placeholder="Nhập mô tả sản phẩm"
                value={formik.values.description}
                onChange={formik.handleChange}
              />
              <Select
                label="Bộ sưu tập"
                name="collection_id"
                value={formik.values.collection_id}
                onChange={formik.handleChange}
              >
                <option value={1}>Bộ sưu tập mùa đông</option>
                <option value={2}>Bộ sưu tập mùa thu</option>
                <option value={3}>Bộ sưu tập mùa hè</option>
                <option value={4}>Bộ sưu tập mùa xuân</option>
              </Select>
              <Input
                type="textarea"
                label="Xuất xứ"
                name="origin"
                placeholder="Nhập xuất xứ sản phẩm"
                value={formik.values.origin}
                onChange={formik.handleChange}
              />
              <Input
                type="textarea"
                label="Chất liệu"
                name="texture"
                placeholder="Nhập chất liệu sản phẩm"
                value={formik.values.texture}
                onChange={formik.handleChange}
              />
              <Input
                type="textarea"
                label="Chi tiết nhỏ"
                name="small_detail"
                placeholder="Nhập chi tiết nhỏ (nếu có)"
                value={formik.values.small_detail}
                onChange={formik.handleChange}
              />
              <input type="file" className="image mb-5" />
              <Button type="submit">Thêm sản phẩm</Button>
            </form>
          </Modal>
          <Button
            onClick={() => {
              alert('Tính năng hiện không khả dụng');
            }}
          >
            Xuất báo cáo
          </Button>
        </div>
        <div className="w-full overflow-x-auto">
          <table className="w-full my-5 shadow-sm">
            <thead>
              <tr>
                <th>STT</th>
                <th>Mã sản phẩm</th>
                <th>Tên sản phẩm</th>
                <th>Giới tính</th>
                <th>Danh mục</th>
                <th>Chi tiết danh mục</th>
                {/* <th>Màu sắc</th>
                <th>Kích cỡ</th> */}
                <th>Số lượng</th>
                <th>Giá tiền</th>
                <th>Đã bán</th>
                <th>Tác vụ</th>
              </tr>
            </thead>
            <tbody>
              {product?.map((product, index) => {
                const {
                  sex_id,
                  cid,
                  cdid,
                  cost,
                  inStoke,
                  pid,
                  pname,
                  quantity_sold,
                } = product;
                return (
                  <tr key={pid}>
                    <td>{index + 1}</td>
                    <td>{pid}</td>
                    <td>{pname}</td>
                    <td>{sex_id === 0 ? 'Nữ' : 'Nam'}</td>
                    <td>
                      {cid === 1 && 'Áo'}
                      {cid === 2 && 'Quần'}
                      {cid === 3 && 'Phụ kiện'}
                    </td>
                    <td>{cdid}</td>
                    <td>{inStoke}</td>
                    <td>{cost}</td>
                    <td>{quantity_sold}</td>
                    <td>
                      <div className="flex items-center gap-x-5">
                        <div className="">
                          <button
                            className="text-primary_blue"
                            data-bs-toggle="modal"
                            data-bs-target="#updateProduct"
                            onClick={() => {
                              const details = productDetails.find(
                                (pd) => pd.pid === pid
                              );
                              setPid(pid);
                              const productColor = productColors.find(
                                (pc) => pc.pid === pid
                              );

                              const productSize = productSizes.find(
                                (ps) => ps.pid === pid
                              );

                              updateProductFormik.setValues({
                                ...product,
                                description: details?.description,
                                origin: details?.origin,
                                small_detail: details?.small_detail,
                                texture: details?.texture,
                                color_id: productColor?.color_id,
                                size_id: productSize?.size_id,
                              });

                              const imageUrl = getImageUrl(product.image);

                              fetch(imageUrl)
                                .then((res) => res.blob())
                                .then((res) => {
                                  const file = new File(
                                    [res],
                                    product.image.split('/').reverse()[0],
                                    { type: res.type }
                                  );

                                  setCurrentImage(file);

                                  getBase64(file).then((data) =>
                                    setCurrentImageBase64(data)
                                  );
                                });
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                              />
                            </svg>
                          </button>
                          <Modal
                            id="updateProduct"
                            aria-labelledby="updateProductLabel"
                            title="Chỉnh sửa chi tiết sản phẩm"
                          >
                            <form onSubmit={updateProductFormik.handleSubmit}>
                              <Input
                                type="text"
                                name="pname"
                                label="Tên sản phẩm"
                                placeholder="Nhập tên sản phẩm*"
                                value={updateProductFormik.values.pname}
                                onChange={updateProductFormik.handleChange}
                              />
                              <Select
                                label="Giới tính"
                                name="sex_id"
                                value={updateProductFormik.values.sex_id}
                                onChange={updateProductFormik.handleChange}
                              >
                                <option value={1}>Nam</option>
                                <option value={0}>Nữ</option>
                              </Select>
                              <Input
                                type="text"
                                name="cost"
                                label="Giá tiền"
                                placeholder="Nhập giá tiền*"
                                value={updateProductFormik.values.cost}
                                onChange={updateProductFormik.handleChange}
                              />
                              <Select
                                label="Màu sắc"
                                name="color_id"
                                value={updateProductFormik.values.color_id}
                                onChange={(e) => {
                                  updateProductFormik.setFieldValue(
                                    'color_id',
                                    parseInt(e.target.value)
                                  );
                                }}
                              >
                                <option value={1}>Hồng</option>
                                <option value={2}>Đen</option>
                                <option value={3}>Trắng</option>
                              </Select>
                              <Select
                                label="Kích thước"
                                name="size_id"
                                value={updateProductFormik.values.size_id}
                                onChange={(e) => {
                                  updateProductFormik.setFieldValue(
                                    'size_id',
                                    parseInt(e.target.value)
                                  );
                                }}
                              >
                                <option value={1}>S</option>
                                <option value={2}>M</option>
                                <option value={3}>L</option>
                                <option value={4}>XL</option>
                              </Select>
                              <Select
                                label="Danh mục"
                                name="cid"
                                values={updateProductFormik.values.cid}
                                onChange={updateProductFormik.handleChange}
                              >
                                <option value={1}>Top</option>
                                <option value={2}>Bottom</option>
                                <option value={3}>Accessory</option>
                              </Select>
                              <Select
                                label="Chi tiết danh mục"
                                name="cdid"
                                values={updateProductFormik.values.cdid}
                                onChange={updateProductFormik.handleChange}
                              >
                                <option value={1}>Hoodie</option>
                                <option value={2}>Phông</option>
                                <option value={3}>Sơ mi</option>
                                <option value={4}>Khoác</option>
                                <option value={5}>Dài</option>
                                <option value={6}>Bò</option>
                                <option value={7}>Short</option>
                                <option value={8}>Mũ</option>
                                <option value={9}>Túi xách</option>
                                <option value={10}>Dây chuyền</option>
                              </Select>
                              <Input
                                type="text"
                                label="Số lượng"
                                name="inStoke"
                                placeholder="Nhập số lượng"
                                value={updateProductFormik.values.inStoke}
                                onChange={updateProductFormik.handleChange}
                              />
                              <Input
                                type="textarea"
                                label="Mô tả sản phẩm"
                                name="description"
                                placeholder="Nhập mô tả sản phẩm"
                                value={updateProductFormik.values.description}
                                onChange={updateProductFormik.handleChange}
                              />
                              <Select
                                name="collection"
                                label="Bộ sưu tập"
                                values={
                                  updateProductFormik.values.collection_id
                                }
                                onChange={updateProductFormik.handleChange}
                              >
                                <option value={1}>Bộ sưu tập mùa đông</option>
                                <option value={2}>Bộ sưu tập mùa thu</option>
                                <option value={3}>Bộ sưu tập mùa hè</option>
                                <option value={4}>Bộ sưu tập mùa xuân</option>
                              </Select>
                              <Input
                                type="textarea"
                                label="Xuất xứ"
                                name="origin"
                                placeholder="Nhập xuất xứ sản phẩm"
                                value={updateProductFormik.values.origin}
                                onChange={updateProductFormik.handleChange}
                              />
                              <Input
                                type="textarea"
                                label="Chất liệu"
                                name="texture"
                                placeholder="Nhập chất liệu sản phẩm"
                                value={updateProductFormik.values.texture}
                                onChange={updateProductFormik.handleChange}
                              />
                              <Input
                                type="textarea"
                                label="Chi tiết nhỏ"
                                name="small_detail"
                                placeholder="Nhập chi tiết nhỏ (nếu có)"
                                value={updateProductFormik.values.small_detail}
                                onChange={updateProductFormik.handleChange}
                              />
                              {!(currentImage && currentImageBase64) ? (
                                <input type="file" className="image mb-5" />
                              ) : (
                                <div className="relative w-40">
                                  <picture>
                                    <img
                                      src={currentImageBase64}
                                      alt={product.id}
                                      className="mb-5"
                                    />
                                  </picture>
                                  <button
                                    type="button"
                                    className="btn-close box-content text-white absolute top-2 right-2 w-4 h-4 border-none opacity-50"
                                    aria-label="Close"
                                    onClick={() => {
                                      setCurrentImage(undefined);
                                      setCurrentImageBase64(undefined);
                                    }}
                                  ></button>
                                </div>
                              )}
                              <Button type="submit">Cập nhật sản phẩm</Button>
                            </form>
                          </Modal>
                        </div>
                        <button
                          className="text-primary_red"
                          onClick={() => {
                            setPid(pid);
                            handleDeleteProduct(pid);
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    </Main>
  );
};

export default ProductReport;

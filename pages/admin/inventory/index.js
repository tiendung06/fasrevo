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
    onSubmit: (values) => {},
  });

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  return (
    <Main heading="Qu???n l?? t???n kho">
      <>
        <h1 className="text-xl font-bold">Qu???n l?? t???n kho</h1>
        <div className="w-full bg-white rounded-lg h-20 mt-5 shadow-sm flex items-center gap-x-5 px-5">
          <input
            type="text"
            className="h-10 px-5 text-sm border-border_input border outline-none text-header rounded-lg"
            placeholder="Nh???p th??ng tin t??m ki???m"
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
            <option value={1}>T??m ki???m theo m?? s???n ph???m</option>
            <option value={2}>T??m ki???m theo t??n s???n ph???m</option>
          </select>
          <select
            name=""
            id=""
            className="border-border_input border outline-none h-10 text-sm text-header rounded-lg px-5"
          >
            <option value="">S???p x???p theo t??n</option>
            <option value="">S???p x???p theo gi???i t??nh</option>
          </select>
          <Button
            onClick={() => {
              alert('T??nh n??ng hi???n kh??ng kh??? d???ng');
            }}
          >
            Xu???t b??o c??o
          </Button>
        </div>
        <div className="w-full overflow-x-auto">
          <table className="w-full my-5 shadow-sm">
            <thead>
              <tr>
                <th>STT</th>
                <th>M?? s???n ph???m</th>
                <th>T??n s???n ph???m</th>
                <th>Gi???i t??nh</th>
                <th>Danh m???c</th>
                <th>Chi ti???t danh m???c</th>
                {/* <th>M??u s???c</th>
                <th>K??ch c???</th> */}
                <th>S??? l?????ng</th>
                <th>Gi?? ti???n</th>
                <th>???? b??n</th>
                <th>Ng??y t???o</th>
                <th>T??c v???</th>
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
                  createdAt,
                } = product;
                return (
                  <tr key={pid}>
                    <td>{index + 1}</td>
                    <td>{pid}</td>
                    <td>{pname}</td>
                    <td>{sex_id === 0 ? 'N???' : 'Nam'}</td>
                    <td>{cid}</td>
                    <td>{cdid}</td>
                    <td>{inStoke}</td>
                    <td>{cost}</td>
                    <td>{quantity_sold}</td>
                    <td>{createdAt}</td>
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
                                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                              />
                            </svg>
                          </button>
                          <Modal
                            id="updateProduct"
                            aria-labelledby="updateProductLabel"
                            title="Ch???nh s???a chi ti???t s???n ph???m"
                          >
                            <form onSubmit={updateProductFormik.handleSubmit}>
                              <Input
                                type="text"
                                name="pname"
                                label="T??n s???n ph???m"
                                placeholder="Nh???p t??n s???n ph???m*"
                                value={updateProductFormik.values.pname}
                                onChange={updateProductFormik.handleChange}
                              />
                              <Select
                                label="Gi???i t??nh"
                                name="sex_id"
                                value={updateProductFormik.values.sex_id}
                                onChange={updateProductFormik.handleChange}
                              >
                                <option value={1}>Nam</option>
                                <option value={0}>N???</option>
                              </Select>
                              <Input
                                type="text"
                                name="cost"
                                label="Gi?? ti???n"
                                placeholder="Nh???p gi?? ti???n*"
                                value={updateProductFormik.values.cost}
                                onChange={updateProductFormik.handleChange}
                              />
                              <Select
                                label="M??u s???c"
                                name="color_id"
                                value={updateProductFormik.values.color_id}
                                onChange={(e) => {
                                  updateProductFormik.setFieldValue(
                                    'color_id',
                                    parseInt(e.target.value)
                                  );
                                }}
                              >
                                <option value={1}>H???ng</option>
                                <option value={2}>??en</option>
                                <option value={3}>Tr???ng</option>
                              </Select>
                              <Select
                                label="K??ch th?????c"
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
                                label="Danh m???c"
                                name="cid"
                                values={updateProductFormik.values.cid}
                                onChange={updateProductFormik.handleChange}
                              >
                                <option value="1">Top</option>
                                <option value="2">Bottom</option>
                                <option value="3">Accessory</option>
                              </Select>
                              <Select
                                label="Chi ti???t danh m???c"
                                name="cdid"
                                values={updateProductFormik.values.cdid}
                                onChange={updateProductFormik.handleChange}
                              >
                                <option value={1}>Hoodie</option>
                                <option value={2}>Ph??ng</option>
                                <option value={3}>S?? mi</option>
                                <option value={4}>Kho??c</option>
                                <option value={5}>D??i</option>
                                <option value={6}>B??</option>
                                <option value={7}>Short</option>
                                <option value={8}>M??</option>
                                <option value={9}>T??i x??ch</option>
                                <option value={10}>D??y chuy???n</option>
                              </Select>
                              <Input
                                type="text"
                                label="S??? l?????ng"
                                name="inStoke"
                                placeholder="Nh???p s??? l?????ng"
                                value={updateProductFormik.values.inStoke}
                                onChange={updateProductFormik.handleChange}
                              />
                              <Input
                                type="textarea"
                                label="M?? t??? s???n ph???m"
                                name="description"
                                placeholder="Nh???p m?? t??? s???n ph???m"
                                value={updateProductFormik.values.description}
                                onChange={updateProductFormik.handleChange}
                              />
                              <Select
                                name="collection"
                                label="B??? s??u t???p"
                                values={
                                  updateProductFormik.values.collection_id
                                }
                                onChange={updateProductFormik.handleChange}
                              >
                                <option value={1}>B??? s??u t???p m??a ????ng</option>
                                <option value={2}>B??? s??u t???p m??a thu</option>
                                <option value={3}>B??? s??u t???p m??a h??</option>
                                <option value={4}>B??? s??u t???p m??a xu??n</option>
                              </Select>
                              <Input
                                type="textarea"
                                label="Xu???t x???"
                                name="origin"
                                placeholder="Nh???p xu???t x??? s???n ph???m"
                                value={updateProductFormik.values.origin}
                                onChange={updateProductFormik.handleChange}
                              />
                              <Input
                                type="textarea"
                                label="Ch???t li???u"
                                name="texture"
                                placeholder="Nh???p ch???t li???u s???n ph???m"
                                value={updateProductFormik.values.texture}
                                onChange={updateProductFormik.handleChange}
                              />
                              <Input
                                type="textarea"
                                label="Chi ti???t nh???"
                                name="small_detail"
                                placeholder="Nh???p chi ti???t nh??? (n???u c??)"
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
                            </form>
                          </Modal>
                        </div>
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

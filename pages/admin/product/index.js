import axios, { Axios } from 'axios';
import React from 'react';
import Button from '../../../src/components/admin/Button';
import Input from '../../../src/components/Input';
import Modal from '../../../src/components/Modal';
import Select from '../../../src/components/Select';
import Main from '../../../src/layout/admin/Main';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { productDetail } from '../../../src/constants/constants';

const tableData = [
  {
    id: 'SP001',
    name: 'Áo khoác hoodie tay dài dáng rộng họa tiết hoạt hình',
    sex: 'Nam',
    color: 'Đen',
    size: 'L',
    quantity: 76,
    total: '249.000 VND',
    quantity_sold: 24,
  },
  {
    id: 'SP001',
    name: 'Áo khoác hoodie tay dài dáng rộng họa tiết hoạt hình',
    sex: 'Nam',
    color: 'Đen',
    size: 'L',
    quantity: 76,
    total: '249.000 VND',
    quantity_sold: 24,
  },
  {
    id: 'SP001',
    name: 'Áo khoác hoodie tay dài dáng rộng họa tiết hoạt hình',
    sex: 'Nam',
    color: 'Đen',
    size: 'L',
    quantity: 76,
    total: '249.000 VND',
    quantity_sold: 24,
  },
  {
    id: 'SP001',
    name: 'Áo khoác hoodie tay dài dáng rộng họa tiết hoạt hình',
    sex: 'Nam',
    color: 'Đen',
    size: 'L',
    quantity: 76,
    total: '249.000 VND',
    quantity_sold: 24,
  },
  {
    id: 'SP001',
    name: 'Áo khoác hoodie tay dài dáng rộng họa tiết hoạt hình',
    sex: 'Nam',
    color: 'Đen',
    size: 'L',
    quantity: 76,
    total: '249.000 VND',
    quantity_sold: 24,
  },
  {
    id: 'SP001',
    name: 'Áo khoác hoodie tay dài dáng rộng họa tiết hoạt hình',
    sex: 'Nam',
    color: 'Đen',
    size: 'L',
    quantity: 76,
    total: '249.000 VND',
    quantity_sold: 24,
  },
  {
    id: 'SP001',
    name: 'Áo khoác hoodie tay dài dáng rộng họa tiết hoạt hình',
    sex: 'Nam',
    color: 'Đen',
    size: 'L',
    quantity: 76,
    total: '249.000 VND',
    quantity_sold: 24,
  },
  {
    id: 'SP001',
    name: 'Áo khoác hoodie tay dài dáng rộng họa tiết hoạt hình',
    sex: 'Nam',
    color: 'Đen',
    size: 'L',
    quantity: 76,
    total: '249.000 VND',
    quantity_sold: 24,
  },
  {
    id: 'SP001',
    name: 'Áo khoác hoodie tay dài dáng rộng họa tiết hoạt hình',
    sex: 'Nam',
    color: 'Đen',
    size: 'L',
    quantity: 76,
    total: '249.000 VND',
    quantity_sold: 24,
  },
  {
    id: 'SP001',
    name: 'Áo khoác hoodie tay dài dáng rộng họa tiết hoạt hình',
    sex: 'Nam',
    color: 'Đen',
    size: 'L',
    quantity: 76,
    total: '249.000 VND',
    quantity_sold: 24,
  },
];
const ProductReport = () => {
  const formik = useFormik({
    initialValues: {
      sex_id: 1,
      cid: 1,
      cdid: 1,
      combo_id: 1,
      collection_id: 1,
      pname: 'ABC',
      cost: 2435,
      inStoke: 20,
      quantity_sold: 0,
      isDiscount: 0,
      discount: null,
    },
    validationSchema: Yup.object({}),
    onSubmit: (values) => {
      handleAddProduct(values);
    },
  });

  const handleAddProduct = (values) => {
    var image = document.querySelector('.image').files[0];
    upLoad(values, image);
  };

  const upLoad = (values, image) => {
    // console.log(values, image);
    var formData = new FormData();
    formData.append('sex_id', values.sex_id);
    formData.append('cid', values.cid);
    formData.append('cdid', values.cdid);
    formData.append('combo_id', values.combo_id);
    formData.append('image', image);
    formData.append('collection_id', values.collection_id);
    formData.append('pname', values.pname);
    formData.append('cost', values.cost);
    formData.append('inStoke', values.inStoke);
    formData.append('quantity_sold', values.quantity_sold);
    formData.append('isDiscount', values.isDiscount);
    formData.append('discount', values.discount);

    console.log({ image: formData.get('image') });

    fetch(`http://localhost:3030/product/add-product`, {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'multipart/form-data',
      // },
      body: formData,
    });
    console.log(formData);
  };
  return (
    <Main heading="Quản lý sản phẩm">
      <>
        <h1 className="text-xl font-bold">Quản lý sản phẩm</h1>
        <div className="w-full bg-white rounded-lg h-20 mt-5 shadow-sm flex items-center gap-x-5 px-5">
          <input
            type="text"
            className="h-10 px-5 text-sm border-border_input border outline-none text-header rounded-lg"
            placeholder="Nhập thông tin tìm kiếm"
          />
          <select
            name=""
            id=""
            className="border-border_input border outline-none h-10 text-sm text-header rounded-lg px-5"
          >
            <option value="">Áo</option>
            <option value="">Quần</option>
            <option value="">Phụ kiện</option>
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
              <Input
                type="text"
                name="cost"
                label="Giá tiền"
                placeholder="Nhập giá tiền*"
                value={formik.values.cost}
                onChange={formik.handleChange}
              />
              <Select label="Màu sắc">
                <option value="1">Hồng</option>
                <option value="2">Đen</option>
                <option value="3">Trắng</option>
              </Select>
              <Select label="Kích thước">
                <option value="1">S</option>
                <option value="2">M</option>
                <option value="3">L</option>
                <option value="4">XL</option>
              </Select>
              <Select
                label="Danh mục"
                values={formik.values.cid}
                onChange={formik.handleChange}
              >
                <option value="1">Top</option>
                <option value="2">Bottom</option>
                <option value="3">Accessory</option>
              </Select>
              <Select label="Chi tiết danh mục">
                <option value="1">Hoddie</option>
                <option value="2">Phông</option>
                <option value="3">Sơ mi</option>
                <option value="4">Khoác</option>
                <option value="5">Dài</option>
                <option value="6">Bò</option>
                <option value="7">Short</option>
                <option value="8">Mũ</option>
                <option value="9">Túi xách</option>
                <option value="10">Dây chuyền</option>
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
              <Select label="Bộ sưu tập">
                <option value="1">Bộ sưu tập mùa đông</option>
                <option value="2">Bộ sưu tập mùa thu</option>
                <option value="3">Bộ sưu tập mùa hè</option>
                <option value="4">Bộ sưu tập mùa xuân</option>
              </Select>
              <Input
                type="textarea"
                label="Xuất xứ"
                name="origin"
                placeholder="Nhập xuất xứ sản phẩm"
                value={formik.values.description}
                onChange={formik.handleChange}
              />
              <Input
                type="textarea"
                label="Chất liệu"
                name="origin"
                placeholder="Nhập chất liệu sản phẩm"
                value={formik.values.description}
                onChange={formik.handleChange}
              />
              <Input
                type="textarea"
                label="Chi tiết nhỏ"
                name="origin"
                placeholder="Nhập chi tiết nhỏ (nếu có)"
                value={formik.values.description}
                onChange={formik.handleChange}
              />
              <input type="file" className="image mb-5" />
              <Button type="submit">Thêm sản phẩm</Button>
            </form>
          </Modal>
          <Button>Xuất báo cáo</Button>
        </div>
        <div className="w-full overflow-x-auto">
          <table className="w-full my-5 shadow-sm">
            <thead>
              <tr>
                <th>STT</th>
                <th>Mã sản phẩm</th>
                <th>Tên sản phẩm</th>
                <th>Giới tính</th>
                <th>Màu sắc</th>
                <th>Kích cỡ</th>
                <th>Số lượng</th>
                <th>Giá tiền</th>
                <th>Đã bán</th>
                <th>Tác vụ</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.sex}</td>
                  <td>{item.color}</td>
                  <td>{item.size}</td>
                  <td>{item.quantity}</td>
                  <td>{item.total}</td>
                  <td>{item.quantity_sold}</td>
                  <td>
                    <div className="flex items-center gap-x-5">
                      <div className="">
                        <button
                          className="text-primary_blue"
                          data-bs-toggle="modal"
                          data-bs-target="#updateProduct"
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
                          <form onSubmit={formik.handleSubmit}>
                            <Input
                              type="text"
                              name="pname"
                              label="Tên sản phẩm"
                              placeholder="Nhập tên sản phẩm*"
                              value={formik.values.pname}
                              onChange={formik.handleChange}
                            />
                            <Input
                              type="text"
                              name="cost"
                              label="Giá tiền"
                              placeholder="Nhập giá tiền*"
                              value={formik.values.cost}
                              onChange={formik.handleChange}
                            />
                            <Select label="Màu sắc">
                              <option value="1">Hồng</option>
                              <option value="2">Đen</option>
                              <option value="3">Trắng</option>
                            </Select>
                            <Select label="Kích thước">
                              <option value="1">S</option>
                              <option value="2">M</option>
                              <option value="3">L</option>
                              <option value="4">XL</option>
                            </Select>
                            <Select
                              label="Danh mục"
                              values={formik.values.cid}
                              onChange={formik.handleChange}
                            >
                              <option value="1">Top</option>
                              <option value="2">Bottom</option>
                              <option value="3">Accessory</option>
                            </Select>
                            <Select label="Chi tiết danh mục">
                              <option value="1">Hoddie</option>
                              <option value="2">Phông</option>
                              <option value="3">Sơ mi</option>
                              <option value="4">Khoác</option>
                              <option value="5">Dài</option>
                              <option value="6">Bò</option>
                              <option value="7">Short</option>
                              <option value="8">Mũ</option>
                              <option value="9">Túi xách</option>
                              <option value="10">Dây chuyền</option>
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
                            <Select label="Bộ sưu tập">
                              <option value="1">Bộ sưu tập mùa đông</option>
                              <option value="2">Bộ sưu tập mùa thu</option>
                              <option value="3">Bộ sưu tập mùa hè</option>
                              <option value="4">Bộ sưu tập mùa xuân</option>
                            </Select>
                            <Input
                              type="textarea"
                              label="Xuất xứ"
                              name="origin"
                              placeholder="Nhập xuất xứ sản phẩm"
                              value={formik.values.description}
                              onChange={formik.handleChange}
                            />
                            <Input
                              type="textarea"
                              label="Chất liệu"
                              name="origin"
                              placeholder="Nhập chất liệu sản phẩm"
                              value={formik.values.description}
                              onChange={formik.handleChange}
                            />
                            <Input
                              type="textarea"
                              label="Chi tiết nhỏ"
                              name="origin"
                              placeholder="Nhập chi tiết nhỏ (nếu có)"
                              value={formik.values.description}
                              onChange={formik.handleChange}
                            />
                            <input type="file" className="image mb-5" />
                            <Button type="submit">Thêm sản phẩm</Button>
                          </form>
                        </Modal>
                      </div>
                      <button className="text-primary_red">
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
              ))}
            </tbody>
          </table>
        </div>
      </>
    </Main>
  );
};

export default ProductReport;

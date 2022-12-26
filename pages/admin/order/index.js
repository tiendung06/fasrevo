import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useMemo, useState } from 'react';
import Button from '../../../src/components/admin/Button';
import Input from '../../../src/components/Input';
import Modal from '../../../src/components/Modal';
import Select from '../../../src/components/Select';
import {
  getOrder,
  getUser,
  productDetail,
} from '../../../src/constants/constants';
import { formatMoney, getImageUrl, getPrice } from '../../../src/helpers';
import Main from '../../../src/layout/admin/Main';
const statusOrder = [
  {
    id: 0,
    name: 'Đơn hàng đang được chuẩn bị',
  },
  {
    id: 1,
    name: 'Đang giao hàng',
  },
  {
    id: 2,
    name: 'Giao hàng thành công',
  },
  {
    id: 3,
    name: 'Đã hủy hàng',
  },
];
const Order = () => {
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    axios.get(getOrder.getAllOrder(1)).then((resp) => {
      setOrders(resp.data);
    });
    axios.get(productDetail.getAllProduct(1)).then((resp) => {
      setProducts(resp.data);
    });
    axios.get(getUser).then((resp) => {
      setUsers(resp.data.users);
    });
  };

  const data = useMemo(
    () =>
      orders.map((order) => {
        const pidList = order.pid.split(',');

        return {
          ...order,
          products: products.filter((p) => pidList.includes(p.pid)),
          users: users.find((u) => u.uid === order.uid),
        };
      }),
    [orders, products, users]
  );

  const formik = useFormik({
    initialValues: {
      uid: '',
      order_id: '',
      message: '',
      status: '',
    },
    onSubmit: (values) => {
      updateOrder(values);
    },
  });

  const handleDelete = (uid, order_id) => {
    if (confirm('Xác nhận xóa đơn hàng?') == true) {
      axios
        .post(`${getOrder.deleteOrder()}`, { uid: uid, order_id: order_id })
        .then((resp) => {
          init();
        });
    }
  };

  const updateOrder = (values) => {
    axios.put(`${getOrder.updateOrder()}`, values).then((resp) => {
      init();
    });
  };

  return (
    <Main heading="Quản lý đơn hàng">
      <>
        <h1 className="text-xl font-bold">Quản lý đơn hàng</h1>
        <div className="w-full bg-white rounded-lg h-20 mt-5 shadow-sm flex items-center gap-x-5 px-5">
          <input
            type="text"
            className="h-10 px-5 text-sm border-border_input border outline-none text-header rounded-lg"
            placeholder="Nhập thông tin tìm kiếm"
          />
          <select
            name=""
            id=""
            className="border-border_input border outline-none h-10 text-sm text-header rounded-lg"
          >
            <option value="">Sắp xếp theo tên</option>
            <option value="">Sắp xếp theo giới tính</option>
          </select>
          <Button
            onClick={() => {
              alert('Tính năng hiện không khả dụng');
            }}
          >
            Xuất báo cáo
          </Button>
          <Button
            onClick={() => {
              alert('Tính năng hiện không khả dụng');
            }}
          >
            Xuất báo cáo cho đơn vị vận chuyển
          </Button>
        </div>
        <div className="w-full overflow-x-auto">
          <table className="w-full my-5 shadow-sm">
            <thead>
              <tr>
                <th>STT</th>
                <th>Mã đơn hàng</th>
                <th>Tên khách hàng</th>
                <th>Giới tính</th>
                <th>Số điện thoại</th>
                <th>Email</th>
                <th>Địa chỉ</th>
                <th>Ngày đặt hàng</th>
                <th>Tổng tiền đã thanh toán</th>
                <th>Trạng thái đơn hàng</th>
                <th>Tác vụ</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item.order_id}>
                  <td>{index + 1}</td>
                  <td>{item.order_id}</td>
                  <td>{item.users?.fullname}</td>
                  <td>{item.users?.sex === 1 ? 'Nam' : 'Nữ'}</td>
                  <td>{item.users?.phone}</td>
                  <td>{item.users?.email}</td>
                  <td>{item.users?.address}</td>
                  <td>{item.createdAt}</td>
                  <td>{formatMoney(item.total)}</td>
                  <td>{statusOrder[item.status].name}</td>
                  <td>
                    <div className="flex items-center gap-x-5">
                      <button
                        className="text-primary_blue"
                        data-bs-toggle="modal"
                        data-bs-target={`#orderDetails-${item.order_id}`}
                        onClick={() => {
                          formik.setValues({
                            uid: item.users?.uid,
                            order_id: item.order_id,
                            message: item.message,
                            status: item.status,
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
                        id={`orderDetails-${item.order_id}`}
                        aria-labelledby="updateProductLabel"
                        title="Thông tin chi tiết đơn hàng"
                      >
                        <form onSubmit={formik.handleSubmit}>
                          <div className="w-full mb-5">
                            Tên khách hàng: {item.users?.fullname}
                          </div>
                          <div className="w-full mb-5">
                            Email: {item.users?.email}
                          </div>
                          <div className="w-full mb-5">
                            Giới tính: {item.users?.sex === 1 ? 'Nam' : 'Nữ'}
                          </div>
                          <div className="w-full mb-5">
                            Số điện thoại: {item.users?.phone}
                          </div>
                          <div className="w-full mb-5">
                            Địa chỉ: {item.users?.address}
                          </div>
                          <Input
                            type="textarea"
                            label="Ghi chú đơn hàng"
                            name="message"
                            placeholder="Nhập xuất xứ sản phẩm"
                            value={formik.values.message}
                            onChange={formik.handleChange}
                          />
                          <Select
                            label="Trạng thái đơn hàng"
                            name="status"
                            value={formik.values.status}
                            onChange={formik.handleChange}
                          >
                            <option value={0}>
                              Đơn hàng đang được chuẩn bị
                            </option>
                            <option value={1}>Đang giao hàng</option>
                            <option value={2}>Giao hàng thành công</option>
                            <option value={3}>Hủy hàng</option>
                          </Select>
                          <div className="w-full mb-5">
                            Thời gian đặt hàng: {item.createdAt}
                          </div>
                          <div className="w-full font-medium mb-3">
                            Chi tiết sản phẩm
                          </div>
                          {item.products.map(
                            ({
                              pid,
                              pname,
                              image,
                              cost,
                              isDiscount,
                              discount,
                            }) => {
                              return (
                                <div
                                  className="flex h-40 w-full mb-5"
                                  key={pid}
                                >
                                  <picture>
                                    <img
                                      src={getImageUrl(image)}
                                      alt={pname}
                                      className="h-full w-[100px] object-cover"
                                    />
                                  </picture>
                                  <div className="pl-3">
                                    <p className="text-xs text-header">{pid}</p>
                                    <p className="break-words text-base">
                                      {pname}
                                    </p>
                                    <div className="flex items-center pt-2">
                                      <span
                                        className={`${
                                          isDiscount === 1
                                            ? 'text-xs md:text-sm line-through mr-3 md:mr-4 text-header'
                                            : 'text-xs md:text-base'
                                        }`}
                                      >
                                        {formatMoney(cost)}
                                      </span>
                                      <span
                                        className={`${
                                          isDiscount
                                            ? 'text-primary_red font-medium text-xs md:text-base'
                                            : 'hidden'
                                        } `}
                                      >
                                        {formatMoney(
                                          getPrice(discount, cost, isDiscount)
                                        )}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                          <div className="w-full mb-5 font-medium text-base">
                            Tổng tiền thanh toán: {formatMoney(item.total)}
                          </div>
                          <Button type="submit">Cập nhật đơn hàng</Button>
                        </form>
                      </Modal>
                      <button
                        className="text-primary_red"
                        onClick={() => {
                          handleDelete(item.users.uid, item.order_id);
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
              ))}
            </tbody>
          </table>
        </div>
      </>
    </Main>
  );
};

export default Order;

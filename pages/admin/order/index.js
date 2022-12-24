import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import Button from '../../../src/components/admin/Button';
import { getOrder, productDetail } from '../../../src/constants/constants';
import Main from '../../../src/layout/admin/Main';

const tableData = [
  {
    id: 'DH001',
    name: 'Đỗ Tiến Dũng',
    sex: 'Nam',
    phone: '0344536552',
    email: 'dungdotien14@gmail.com',
    address: 'Ngõ 3, Giao Tác, Liên Hà, Đông Anh, Hà Nội',
    dateOrder: '15/08/2022',
    total: '249.000 VND',
    status: 'Giao hàng thành công',
  },
  {
    id: 'DH002',
    name: 'Đỗ Tiến Dũng',
    sex: 'Nam',
    phone: '0344536552',
    email: 'dungdotien14@gmail.com',
    address: 'Ngõ 3, Giao Tác, Liên Hà, Đông Anh, Hà Nội',
    dateOrder: '15/08/2022',
    total: '249.000 VND',
    status: 'Giao hàng thành công',
  },
  {
    id: 'DH001',
    name: 'Đỗ Tiến Dũng',
    sex: 'Nam',
    phone: '0344536552',
    email: 'dungdotien14@gmail.com',
    address: 'Ngõ 3, Giao Tác, Liên Hà, Đông Anh, Hà Nội',
    dateOrder: '15/08/2022',
    total: '249.000 VND',
    status: 'Giao hàng thành công',
  },
  {
    id: 'DH001',
    name: 'Đỗ Tiến Dũng',
    sex: 'Nam',
    phone: '0344536552',
    email: 'dungdotien14@gmail.com',
    address: 'Ngõ 3, Giao Tác, Liên Hà, Đông Anh, Hà Nội',
    dateOrder: '15/08/2022',
    total: '249.000 VND',
    status: 'Giao hàng thành công',
  },
  {
    id: 'DH001',
    name: 'Đỗ Tiến Dũng',
    sex: 'Nam',
    phone: '0344536552',
    email: 'dungdotien14@gmail.com',
    address: 'Ngõ 3, Giao Tác, Liên Hà, Đông Anh, Hà Nội',
    dateOrder: '15/08/2022',
    total: '249.000 VND',
    status: 'Giao hàng thành công',
  },
  {
    id: 'DH001',
    name: 'Đỗ Tiến Dũng',
    sex: 'Nam',
    phone: '0344536552',
    email: 'dungdotien14@gmail.com',
    address: 'Ngõ 3, Giao Tác, Liên Hà, Đông Anh, Hà Nội',
    dateOrder: '15/08/2022',
    total: '249.000 VND',
    status: 'Giao hàng thành công',
  },
  {
    id: 'DH001',
    name: 'Đỗ Tiến Dũng',
    sex: 'Nam',
    phone: '0344536552',
    email: 'dungdotien14@gmail.com',
    address: 'Ngõ 3, Giao Tác, Liên Hà, Đông Anh, Hà Nội',
    dateOrder: '15/08/2022',
    total: '249.000 VND',
    status: 'Giao hàng thành công',
  },
  {
    id: 'DH001',
    name: 'Đỗ Tiến Dũng',
    sex: 'Nam',
    phone: '0344536552',
    email: 'dungdotien14@gmail.com',
    address: 'Ngõ 3, Giao Tác, Liên Hà, Đông Anh, Hà Nội',
    dateOrder: '15/08/2022',
    total: '249.000 VND',
    status: 'Giao hàng thành công',
  },
  {
    id: 'DH001',
    name: 'Đỗ Tiến Dũng',
    sex: 'Nam',
    phone: '0344536552',
    email: 'dungdotien14@gmail.com',
    address: 'Ngõ 3, Giao Tác, Liên Hà, Đông Anh, Hà Nội',
    dateOrder: '15/08/2022',
    total: '249.000 VND',
    status: 'Giao hàng thành công',
  },
  {
    id: 'DH001',
    name: 'Đỗ Tiến Dũng',
    sex: 'Nam',
    phone: '0344536552',
    email: 'dungdotien14@gmail.com',
    address: 'Ngõ 3, Giao Tác, Liên Hà, Đông Anh, Hà Nội',
    dateOrder: '15/08/2022',
    total: '249.000 VND',
    status: 'Giao hàng thành công',
  },
];

const Order = () => {
  const [orders, setOrders] = useState([]);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    axios.get(getOrder.getAllOrder(1)).then((resp) => {
      setOrders(resp.data);
      console.log(resp.data);
    });
    axios.get(productDetail.getAllProduct(1)).then((resp) => {
      setProducts(resp.data);
    });
  };

  const data = useMemo(
    () =>
      orders.map((order) => {
        const pidList = order.pid.split(',');

        return {
          ...order,
          products: products.filter((p) => pidList.includes(p.pid)),
        };
      }),
    [orders, products]
  );

  console.log({ data });

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
              {tableData.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.sex}</td>
                  <td>{item.phone}</td>
                  <td>{item.email}</td>
                  <td>{item.address}</td>
                  <td>{item.dateOrder}</td>
                  <td>{item.total}</td>
                  <td>{item.status}</td>
                  <td>
                    <div className="flex items-center gap-x-5">
                      <button
                        className="text-primary_blue"
                        onClick={() => {
                          alert('Tính năng hiện không khả dụng');
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
                      <button
                        className="text-primary_red"
                        onClick={() => {
                          alert('Tính năng hiện không khả dụng');
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

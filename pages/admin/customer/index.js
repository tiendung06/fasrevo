import axios from 'axios';
import React, { useState, useEffect, useMemo } from 'react';
import useDebounce from '../../../hooks/useDebounce';
import Button from '../../../src/components/admin/Button';
import Modal from '../../../src/components/Modal';
import {
  getOrder,
  getUser,
  productDetail,
  searchItem,
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
const Customer = () => {
  const [filter, setFilter] = useState('');
  const [customers, setCustomers] = useState();
  const [url, setUrl] = useState(getUser);
  const filterDebounce = useDebounce(filter);
  const [typeSearch, setTypeSearch] = useState(1);
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(url).then((resp) => {
      setCustomers(resp.data.users);
    });
  }, [url]);

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    if (filterDebounce !== '') {
      if (typeSearch === 1) {
        setUrl(searchItem.getUserByUid(filterDebounce.trim()));
      } else {
        setUrl(searchItem.getUserByPhone(filterDebounce.trim()));
      }
    } else {
      setUrl(getUser);
    }
  }, [typeSearch, filterDebounce]);

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

  return (
    <Main heading="Tổng quan khách hàng">
      <>
        <h1 className="text-xl font-bold">Tổng quan khách hàng</h1>
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
            <option value={1}>Tìm kiếm theo mã khách hàng</option>
            <option value={2}>Tìm kiếm theo số điện thoại</option>
          </select>
          <select
            name=""
            id=""
            className="border-border_input border outline-none h-10 text-sm text-header rounded-lg"
          >
            <option value="">Sắp xếp theo tên</option>
            <option value="">Sắp xếp theo giới tinh</option>
          </select>
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
                <th>Mã khách hàng</th>
                <th>Tên khách hàng</th>
                <th>Giới tính</th>
                <th>Số điện thoại</th>
                <th>Email</th>
                <th>Địa chỉ</th>
                <th>Tác vụ</th>
              </tr>
            </thead>
            <tbody>
              {customers?.map(
                ({ uid, fullname, email, phone, sex, address }, index) => (
                  <tr key={uid}>
                    <td>{index + 1}</td>
                    <td>{uid}</td>
                    <td>{fullname}</td>
                    <td>{sex === 1 ? 'Nam' : 'Nữ'}</td>
                    <td>{phone}</td>
                    <td>{email}</td>
                    <td>{address}</td>
                    <td>
                      <div className="flex items-center gap-x-5">
                        <button
                          className="text-primary_blue"
                          data-bs-toggle="modal"
                          data-bs-target={`#customer-${uid}`}
                          onClick={() => {
                            axios
                              .get(`${getOrder.getOrderByUid(uid)}`)
                              .then((resp) => {
                                setOrders(resp.data);
                                console.log(data);
                              });
                            axios
                              .get(productDetail.getAllProduct(1))
                              .then((resp) => {
                                setProducts(resp.data);
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
                          id={`customer-${uid}`}
                          aria-labelledby="updateCustomer"
                          title="Thông tin chi tiết khách hàng"
                        >
                          <div className="w-full mb-5">
                            Tên khách hàng: {fullname}
                          </div>
                          <div className="w-full mb-5">Email: {email}</div>
                          <div className="w-full mb-5">
                            Giới tính: {sex === 1 ? 'Nam' : 'Nữ'}
                          </div>
                          <div className="w-full mb-5">
                            Số điện thoại: {phone}
                          </div>
                          <div className="w-full mb-5 break-words">
                            Địa chỉ: {address}
                          </div>
                          <div className="w-full mb-5">
                            <p className="font-medium mb-5">Lịch sử mua hàng</p>
                            <div className="overflow-y-auto max-h-80">
                              {data.map((item) => {
                                return (
                                  <div className="mb-5" key={item.order_id}>
                                    <div className="md:flex item-center text-sm lg:text-sm font-medium">
                                      <p className="mr-5">
                                        Đơn hàng: {item.order_id}
                                      </p>
                                      <p>
                                        Tổng tiền thanh toán:{' '}
                                        <span className="text-primary_red font-bold">
                                          {formatMoney(item.total)}
                                        </span>
                                      </p>
                                    </div>
                                    {item.products.map(
                                      ({
                                        pid,
                                        pname,
                                        image,
                                        cost,
                                        discount,
                                        isDiscount,
                                      }) => {
                                        return (
                                          <OrderItem
                                            key={pid}
                                            pid={pid}
                                            pname={pname}
                                            image={image}
                                            status={item.status}
                                            dateOrder={item.createdAt}
                                            cost={cost}
                                            isDiscount={isDiscount}
                                            discount={discount}
                                          />
                                        );
                                      }
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </Modal>
                      </div>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </>
    </Main>
  );
};

function OrderItem({
  pid,
  pname,
  image,
  cost,
  discount,
  isDiscount,

  status,
  quantity,
  dateOrder,
}) {
  return (
    <div className="w-full h-32 flex justify-between py-3 border-b border-b-border_input">
      <div className="h-full flex">
        <picture>
          <img
            src={getImageUrl(image)}
            alt=""
            className="w-full h-full object-cover"
          />
        </picture>
        <div className="px-3 flex justify-between flex-col">
          <div>
            <a className="font-medium block lg:text-base text-sm pb-1 max-w-[700px] break-words">
              {pname}
            </a>
            <div className="flex items-center">
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
                {formatMoney(getPrice(discount, cost, isDiscount))}
              </span>
            </div>
            <p className="text-xs lg:text-sm text-primary pt-1">
              Ngày đặt hàng: {dateOrder}
            </p>
          </div>
          <p
            className={`${status === 2 && 'text-primary_green'} ${
              status === 3 && 'text-primary_red'
            } ${
              status === 1 && 'text-primary_blue'
            } font-medium text-sm text-left`}
          >
            {statusOrder[status].name}
          </p>
        </div>
      </div>
      <span className="text-primary_red font-bold text-sm lg:text-base">
        {/* 747.000 VND */}
      </span>
    </div>
  );
}

export default Customer;

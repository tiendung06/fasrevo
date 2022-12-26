import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import MainAccount from '../../../src/layout/MainAccount';
import axios from 'axios';
import { getOrder, productDetail } from '../../../src/constants/constants';
import { useSelector } from 'react-redux';
import { formatMoney, getImageUrl, getPrice } from '../../../src/helpers';
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
const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    axios.get(`${getOrder.getOrderByUid(user?.uid)}`).then((resp) => {
      setOrders(resp.data);
    });
    axios.get(productDetail.getAllProduct(1)).then((resp) => {
      setProducts(resp.data);
    });
  }, [user]);

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
  console.log(data);
  return (
    <MainAccount heading="Đơn hàng của tôi">
      {data.map((item) => {
        return (
          <div className="mb-5" key={item.order_id}>
            <div className="md:flex item-center text-base lg:text-lg font-medium">
              <p className="mr-5">Đơn hàng: {item.order_id}</p>
              <p>
                Tổng tiền thanh toán:{' '}
                <span className="text-primary_red font-bold">
                  {formatMoney(item.total)}
                </span>
              </p>
            </div>
            {item.products.map(
              ({ pid, pname, image, cost, discount, isDiscount }) => {
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
    </MainAccount>
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
    <div className="w-full h-48 flex justify-between py-5 border-b border-b-border_input">
      <div className="h-full flex">
        <picture>
          <img
            src={getImageUrl(image)}
            alt=""
            className="w-full h-full object-cover"
          />
        </picture>
        <div className="px-3 lg:px-5 flex justify-between flex-col">
          <div>
            <Link href={`/products/${pid}`}>
              <a className="font-medium block lg:text-base text-sm pb-1 max-w-[700px] break-words hover:text-primary_red transition-all">
                {pname}
              </a>
            </Link>
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

export default MyOrder;

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Main from '../../src/layout/Main';
import Section from '../../src/layout/Section';
import {
  addOrder,
  deleteItemCart,
  getCart,
} from '../../src/constants/constants';
import Button from '../../src/components/Button';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { formatMoney, getImageUrl } from '../../src/helpers';

const Order = () => {
  const { user } = useSelector((state) => state.auth);
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const [message, setMessage] = useState();
  const [subtotal, setSubtotal] = useState(0);

  const init = () => {
    axios.post(getCart, { uid: user.uid }).then((res) => {
      setProducts(res.data.carts);
      setSubtotal(res.data.subtotal);
    });
  };

  useEffect(() => {
    if (user) {
      init();
    }
  }, [user]);

  const handleBuy = () => {
    if (products.length > 0) {
      const orderId = [];
      const quantityItem = [];
      products?.map(({ pid, quantity }) => {
        orderId.push(pid);
        quantityItem.push(quantity);
      });
      axios
        .post(addOrder, {
          uid: user.uid,
          pid: orderId.join(','),
          total: subtotal,
          quantity: quantityItem.join(','),
          message: message,
        })
        .then((res) => {
          if (res.data.status === 1) {
            handleDelete(orderId.join(','));
            init();
            router.push('/order/receipt');
          }
        });
    } else {
      alert('Không có sản phẩm trong giỏ hàng!');
    }
  };

  const handleDelete = (value) => {
    const productId = value.split(',');
    productId.map((item) => {
      axios
        .post(deleteItemCart, {
          uid: user.uid,
          pid: item,
        })
        .then((res) => {});
    });
  };

  return (
    <Main heading="Đơn hàng">
      <Section>
        <h1 className="text-primary font-bold text-2xl py-10">Đơn hàng</h1>
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-y-10 lg:gap-5">
          <div className="lg:col-span-3">
            {products.map(
              ({
                pid,
                image,
                pname,
                size_id,
                color_id,
                quantity,
                price,
                total,
              }) => {
                return (
                  <OrderItem
                    key={pid}
                    pid={pid}
                    image={image}
                    pname={pname}
                    size_id={size_id}
                    color_id={color_id}
                    quantity={quantity}
                    price={price}
                    total={total}
                  />
                );
              }
            )}
          </div>
          <div className="lg:col-span-3 justify-end">
            <div className="w-full flex justify-end">
              <div className="w-full max-w-[500px]">
                <div className="text-sm md:text-sm pb-5 border-b border-t-border_input">
                  <div className="flex items-center justify-between pb-2">
                    <p>Họ và tên:</p>
                    <p>{user?.fullname}</p>
                  </div>
                  <div className="flex items-center justify-between pb-2">
                    <p>Số điện thoại:</p>
                    <p>{user?.phone}</p>
                  </div>
                  <div className="flex items-center justify-between pb-2">
                    <p>Email:</p>
                    <p>{user?.email}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p>Địa chỉ:</p>
                    <p>{user?.address}</p>
                  </div>
                </div>
                <div className="py-5 text-sm border-b border-t-border_input">
                  <div className="flex items-center justify-between">
                    <p className="pr-1">Mã giảm giá:</p>
                  </div>
                </div>
                <div className="py-5 text-sm border-b border-t-border_input">
                  <label htmlFor="note" className="text-sm font-medium">
                    Ghi chú đơn hàng
                  </label>
                  <textarea
                    name="note"
                    id="note"
                    className={`bg-transparent w-full min-h-[80px] p-5 block outline-none border border-border_input text-sm text-secondary_text`}
                    placeholder="Ghi chú đơn hàng"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  ></textarea>
                </div>
                <div className="py-5 text-sm border-b border-t-border_input">
                  <div className="flex items-center justify-between">
                    <p>Giá trị</p>
                    <span>{formatMoney(subtotal)}</span>
                  </div>
                </div>
                <div className="py-5 text-lg">
                  <div className="flex items-center justify-between font-bold">
                    <p>Tổng</p>
                    <span className="text-primary_red">
                      {formatMoney(subtotal)}
                    </span>
                  </div>
                </div>
                <Button onClick={handleBuy}>Tiến hành đặt hàng</Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Main>
  );
};

function OrderItem({
  pid,
  image,
  pname,
  size_id,
  color_id,
  quantity,
  price,
  total,
}) {
  return (
    <div className="h-40 w-full flex pb-5">
      <picture>
        <img
          src={getImageUrl(image)}
          alt=""
          className="w-full h-full object-cover"
        />
      </picture>
      <div className="pl-5 w-full flex justify-between">
        <div>
          <Link href={`./products/${pid}`}>
            <p className="font-medium text-sm md:text-lg pb-1 cursor-pointer hover:text-primary_red transition-all">
              {pname}
            </p>
          </Link>
          <div className="flex items-center">
            <span className="text-primary text-sm md:text-base">
              {formatMoney(price)}
            </span>
          </div>
          <p className="text-xs md:text-sm text-primary">
            Màu: {color_id === 1 && 'Hồng'} {color_id === 2 && 'Đen'}{' '}
            {color_id === 3 && 'Trắng'}
          </p>
          <p className="text-xs md:text-sm text-primary">
            Size: {size_id === 1 && 'S'} {size_id === 2 && 'M'}{' '}
            {size_id === 3 && 'L'} {size_id === 4 && 'XL'}
          </p>
          <p className="text-xs md:text-sm text-primary">
            Số lượng: {quantity}
          </p>
        </div>
        <p className="text-primary font-medium text-sm md:text-base">
          <span className="text-primary_red">{formatMoney(total)}</span>
        </p>
      </div>
    </div>
  );
}

export default Order;

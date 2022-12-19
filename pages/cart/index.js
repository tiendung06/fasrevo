import React, { useEffect, useState } from 'react';
import Main from '../../src/layout/Main';
import Section from '../../src/layout/Section';
import styles from './cart.module.scss';
import Button from '../../src/components/Button';
import Input from '../../src/components/Input';
import Select from '../../src/components/Select';
import Link from 'next/link';
import axios from 'axios';
import { getCart, updateQuantity } from '../../src/constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import { getImageUrl } from '../../src/helpers';
import { useRouter } from 'next/router';
import { setCartQuantity } from '../../redux/cartSlide';

const Cart = () => {
  const { authenticated, user } = useSelector((state) => state.auth);
  const router = useRouter();
  const [products, setProducts] = useState([]);

  const [subtotal, setSubtotal] = useState(0);

  const [colorList, setColorList] = useState([]);

  const [sizeList, setSizeList] = useState([]);

  const dispatch = useDispatch();
  const init = () => {
    axios.post(getCart, { uid: user.uid }).then((res) => {
      setProducts(res.data.carts);
      dispatch(setCartQuantity(res.data.carts.length));
      setSubtotal(res.data.subtotal);

      setColorList(res.data.colorList);

      setSizeList(res.data.sizeList);
    });
  };

  useEffect(() => {
    if (user) {
      init();
    }
  }, [user]);

  if (typeof window !== 'undefined') {
    if (!authenticated) {
      router.push('/sign-in');
    }
  }

  return (
    <Main heading="Giỏ hàng">
      <Section>
        <div className="w-full">
          <div className={`${styles.cart}`}>
            <h1 className="text-primary font-bold text-2xl py-10">Giỏ hàng</h1>
            <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-5 gap-10">
              <div className="col-span-4 lg:col-span-3">
                <div className="w-full overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr>
                        <th>Sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Giá tiền</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product, index) => (
                        <CartItem
                          product={product}
                          key={index}
                          color={
                            colorList.find(
                              (c) => c.color_id === product.color_id
                            )?.color_name
                          }
                          size={
                            sizeList.find((s) => s.size_id === product.size_id)
                              ?.size_name
                          }
                          reload={init}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="w-full col-span-4 lg:col-span-1">
                <Input
                  type="textarea"
                  name="note"
                  label="Ghi chú đơn hàng"
                  placeholder="Ghi chú đơn hàng"
                />
                <Select label="Chọn mã giảm giá" name="voucher"></Select>
                <div className="mt-4">
                  <div className="flex justify-between text-sm mb-5">
                    <span className="font-medium">Giảm giá:</span>
                    <span>0 VND</span>
                  </div>
                  <div className="flex justify-between mb-5">
                    <span className="font-bold text-xl">Tổng tiền:</span>
                    <span className="font-bold text-xl">{subtotal} VND</span>
                  </div>
                  <Button>Mua hàng</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Main>
  );
};

function CartItem({ product, color, size, reload }) {
  const handleUpdateQuantity = (newQuantity) => {
    if (newQuantity > 0) {
      axios
        .post(updateQuantity, {
          uid: product.uid,
          pid: product.pid,
          quantity: newQuantity,
          price: product.price,
        })
        .then((res) => {
          reload();
        });
    } else {
      // gọi api xóa
    }
  };

  return (
    <tr>
      <td>
        <div className="w-full h-40 flex">
          <div className="h-full flex">
            <picture>
              <img
                src={getImageUrl(product.image)}
                alt=""
                className="w-full min-w-[100px] h-full object-cover"
              />
            </picture>
            <div className="pl-5 flex justify-between flex-col">
              <div>
                <Link href={`/products/${product.pid}`}>
                  <a className="font-medium text-lg pb-1 block">
                    {product.pname}
                  </a>
                </Link>
                <div className="flex text-sm">
                  <span className="text-header pr-3 line-through">
                    {product.price}
                  </span>
                  <span className="text-primary">{product.price} VND</span>
                </div>
                <span className="flex text-sm text-primary">Màu: {color}</span>
                <span className="flex text-sm text-primary">Size: {size}</span>
              </div>
              <button className="text-primary_red font-medium underline text-left">
                Xóa bỏ
              </button>
            </div>
          </div>
        </div>
      </td>
      <td>
        <div className="flex justify-between text-header w-40 border border-border_input p-3">
          <button
            onClick={() => {
              handleUpdateQuantity(product.quantity - 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
            </svg>
          </button>
          <span>{product.quantity}</span>
          <button
            onClick={() => {
              handleUpdateQuantity(product.quantity + 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg>
          </button>
        </div>
      </td>
      <td>
        <span className="font-medium text-primary_red">
          {product.total} VND
        </span>
      </td>
    </tr>
  );
}

export default Cart;

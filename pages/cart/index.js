import React from 'react';
import Main from '../../src/layout/Main';
import Section from '../../src/layout/Section';
import styles from './cart.module.scss';
import Button from '../../src/components/Button';
import Input from '../../src/components/Input';
import Select from '../../src/components/Select';
import Link from 'next/link';

const Cart = () => {
  return (
    <Main heading='Giỏ hàng'>
      <Section>
        <div className='w-full'>
          <div className={`${styles.cart}`}>
            <h1 className='text-primary font-bold text-2xl py-10'>Giỏ hàng</h1>
            <div className='grid grid-cols-1 lg:grid-cols-4 lg:gap-5 gap-10'>
              <div className='col-span-4 lg:col-span-3'>
                <div className='w-full overflow-x-auto'>
                  <table className='w-full text-left'>
                    <thead>
                      <tr>
                        <th>Sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Giá tiền</th>
                      </tr>
                    </thead>
                    <tbody>
                      <CartItem />
                      <CartItem />
                      <CartItem />
                      <CartItem />
                      <CartItem />
                    </tbody>
                  </table>
                </div>
              </div>
              <div className='w-full col-span-4 lg:col-span-1'>
                <Input
                  type='textarea'
                  name='note'
                  label='Ghi chú đơn hàng'
                  placeholder='Ghi chú đơn hàng'
                />
                <Select label='Chọn mã giảm giá' name='voucher'></Select>
                <div className='mt-4'>
                  <div className='flex justify-between text-sm mb-5'>
                    <span className='font-medium'>Giảm giá:</span>
                    <span>0 VND</span>
                  </div>
                  <div className='flex justify-between mb-5'>
                    <span className='font-bold text-xl'>Tổng tiền:</span>
                    <span className='font-bold text-xl'>747.000 VND</span>
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

function CartItem() {
  return (
    <tr>
      <td>
        <div className='w-full h-40 flex'>
          <div className='h-full flex'>
            <picture>
              <img
                src='/images/product1.webp'
                alt=''
                className='w-full min-w-[100px] h-full object-cover'
              />
            </picture>
            <div className='pl-5 flex justify-between flex-col'>
              <div>
                <Link href={'/products/123'}>
                  <a className='font-medium text-lg pb-1 block'>Trouser Pant</a>
                </Link>
                <div className='flex text-sm'>
                  <span className='text-header pr-3 line-through'>
                    349.000 VND
                  </span>
                  <span className='text-primary'>249.000 VND</span>
                </div>
                <span className='flex text-sm text-primary'>Màu: Be</span>
                <span className='flex text-sm text-primary'>Size: L</span>
              </div>
              <button className='text-primary_red font-medium underline text-left'>
                Xóa bỏ
              </button>
            </div>
          </div>
        </div>
      </td>
      <td>
        <div className='flex justify-between text-header w-40 border border-border_input p-3'>
          <button>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M18 12H6' />
            </svg>
          </button>
          <span>3</span>
          <button>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 6v12m6-6H6'
              />
            </svg>
          </button>
        </div>
      </td>
      <td>
        <span className='font-medium text-primary_red'>747.000 VND</span>
      </td>
    </tr>
  );
}

export default Cart;

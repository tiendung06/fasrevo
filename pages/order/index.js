import React from 'react';
import Link from 'next/link';
import Main from '../../src/layout/Main';
import Section from '../../src/layout/Section';
import styles from './order.module.scss';
import Button from '../../src/components/Button';

const Order = () => {
  return (
    <Main heading='Đơn hàng'>
      <Section>
        <h1 className='text-primary font-bold text-2xl py-10'>Đơn hàng</h1>
        <div className='grid grid-cols-1 lg:grid-cols-6 gap-y-10 lg:gap-5'>
          <div className='lg:col-span-3 xl:col-span-2'>
            <OrderItem />
            <OrderItem />
            <OrderItem />
          </div>
          <div className='hidden xl:block invisible'></div>
          <div className='lg:col-span-3 justify-end'>
            <div className='w-full flex justify-end'>
              <div className='w-full max-w-[500px]'>
                <div className='text-sm md:text-sm pb-5 border-b border-t-border_input'>
                  <div className='flex items-center justify-between pb-2'>
                    <p>Họ và tên:</p>
                    <p>Nguyễn Văn A</p>
                  </div>
                  <div className='flex items-center justify-between pb-2'>
                    <p>Số điện thoại:</p>
                    <p>0344536552</p>
                  </div>
                  <div className='flex items-center justify-between pb-2'>
                    <p>Email:</p>
                    <p>nguyenvana@gmail.com</p>
                  </div>
                  <div className='flex items-center justify-between'>
                    <p>Địa chỉ:</p>
                    <p>Giao Tác, Liên Hà, Đông Anh, Hà Nội</p>
                  </div>
                </div>
                <div className='py-5 text-sm border-b border-t-border_input'>
                  <div className='flex items-center justify-between'>
                    <p className='pr-1'>Mã giảm giá:</p>
                    <p>Mã giảm giá 123</p>
                  </div>
                </div>
                <div className='py-5 text-sm border-b border-t-border_input'>
                  <div className='flex items-center justify-between pb-2'>
                    <p>Giá trị</p>
                    <span>349.300 VND</span>
                  </div>
                  <div className='flex items-center justify-between'>
                    <p>Vận chuyển</p>
                    <span>30.000 VND</span>
                  </div>
                </div>
                <div className='py-5 text-lg'>
                  <div className='flex items-center justify-between font-bold'>
                    <p>Tổng</p>
                    <span className='text-primary_red'>379.300 VND</span>
                  </div>
                </div>
                <div className='flex gap-x-5'>
                  <Button colorRed={true}>Hủy đặt hàng</Button>
                  <Button>Tiến hành thanh toán</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Main>
  );
};

function OrderItem() {
  return (
    <div className='h-[200px] flex pb-5'>
      <picture>
        <img
          src='/images/product1.webp'
          alt=''
          className='w-full h-full object-cover'
        />
      </picture>
      <div className='pl-5 flex justify-between flex-col'>
        <div>
          <p className='font-medium text-base md:text-xl pb-1'>
            Bondi Outdoor Lounge Ottoman Chair & Set
          </p>
          <div className='flex items-center'>
            <span className='text-header pr-3 line-through text-sm'>
              349.000 VND
            </span>
            <span className='text-primary text-sm md:text-base'>
              249.000 VND
            </span>
          </div>
          <p className='text-sm text-primary'>Màu: Be</p>
          <p className='text-sm text-primary'>Size: L</p>
        </div>
        <div className=''>
          <p className='text-sm text-primary'>Số lượng: 3</p>
          <p className='text-primary font-medium text-sm md:text-base'>
            Số tiền: <span className='text-primary_red'>747.000 VND</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Order;

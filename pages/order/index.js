import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Main from '../../src/layout/Main';
import Section from '../../src/layout/Section';
import product from '../../public/images/product1.jpg';
import styles from './order.module.scss';

const Order = () => {
  return (
    <Main>
      <Section>
        <div className={`${styles.order}`}>
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-20 xl:gap-40 gap-10 py-5'>
            <div className='text-header_hover'>
              <h2 className='text-xl font-base py-5 uppercase border-b border-t-[rgba(0,0,0,0.12)]'>
                Thông tin sản phẩm
              </h2>
              <div
                className={`${styles.product} w-full py-5 flex relative border-b border-t-[rgba(0,0,0,0.12)]`}
              >
                <Image
                  src={product.src}
                  alt=''
                  width={100}
                  height={150}
                  className='object-cover w-[100px] h-[150px]'
                />
                <div className='w-full h-full text-sm text-header_hover pl-5'>
                  <p className='text-base font-bold'>IDLE LOOSE PANT</p>
                  <p className='pb-2'>549.000 VND</p>
                  <div className='flex'>
                    <p className='w-[80px]'>Size:</p>
                    <p>L</p>
                  </div>
                  <div className='flex'>
                    <p className='w-[80px]'>Màu sắc:</p>
                    <p>Đen</p>
                  </div>
                  <div className='flex justify-between'>
                    <div className='flex'>
                      <p className='w-[80px]'>Số lượng:</p>
                      <p>3</p>
                    </div>
                    <div className='font-bold'>549.000 VND</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='text-header_hover'>
              <h2 className='text-xl font-base py-5 uppercase border-b border-t-[rgba(0,0,0,0.12)]'>
                Thông tin thanh toán
              </h2>
              <div className='py-5 text-sm border-b border-t-[rgba(0,0,0,0.12)]'>
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
                  <label>Địa chỉ:</label>
                  <select className='outline-none'>
                    <option value=''>
                      Giao Tác, Liên Hà, Đông Anh, Hà Nội
                    </option>
                    <option value=''>130 Xuân Thủy, Cầu Giấy, Hà Nội</option>
                  </select>
                </div>
              </div>
              <div className='py-5 text-sm border-b border-t-[rgba(0,0,0,0.12)]'>
                <div className='flex items-center justify-between'>
                  <label className='pr-1'>Mã giảm giá:</label>
                  <select className='outline-none'>
                    <option value=''>Mã giảm giá 123</option>
                  </select>
                </div>
              </div>
              <div className='py-5 border-b border-t-[rgba(0,0,0,0.12)]'>
                <div className='flex items-center justify-between pb-2 text-sm'>
                  <p>Giá trị</p>
                  <span>349.300 VND</span>
                </div>
                <div className='flex items-center justify-between text-sm'>
                  <p>Vận chuyển</p>
                  <span>30.000 VND</span>
                </div>
              </div>
              <div className='py-5'>
                <div className='flex items-center justify-between text-sm font-bold mb-3'>
                  <p>Tổng</p>
                  <span>379.300 VND</span>
                </div>
                <Link href='/order'>
                  <a className='w-full h-10 inline-block bg-header_hover text-white font-bold uppercase leading-10 text-center'>
                    Tiến hành đặt hàng
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Main>
  );
};

export default Order;

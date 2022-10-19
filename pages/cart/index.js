import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Main from '../../src/layout/Main';
import Section from '../../src/layout/Section';
import icon_close from '../../public/assets/icon-times.svg';
import product from '../../public/images/product1.jpg';
import styles from './cart.module.scss';

const Cart = () => {
  return (
    <Main>
      <Section>
        <div className='w-full'>
          {/* <div
            className={`${styles.empty_cart} w-full flex justify-center items-center`}
          >
            <div className='text-center w-full max-w-[500px]'>
              <h1 className='text-3xl text-header_hover font-bold py-10'>
                Chưa có sản phẩm
              </h1>
              <p></p>
              <Link href='/products'>
                <a className='w-full h-10 leading-10 inline-block bg-header_hover text-white'>
                  Tiếp tục mua hàng
                </a>
              </Link>
            </div>
          </div> */}
          <div className={`${styles.cart}`}>
            <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-20 xl:gap-40 gap-10 py-5'>
              <div className='text-primary'>
                <h2 className='text-xl font-base py-5 uppercase border-b border-t-[rgba(0,0,0,0.12)]'>
                  Giỏ hàng
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
                  <div className='w-full h-full text-sm text-primary px-5'>
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
                        <div className='flex'>
                          <span className='font-bold text-center cursor-pointer block w-5'>
                            -
                          </span>
                          <input
                            type='text'
                            className='text-center outline-none w-10'
                            value={3}
                          />
                          <span className='font-bold text-center cursor-pointer block w-5'>
                            +
                          </span>
                        </div>
                      </div>
                      <div className='font-bold'>549.000 VND</div>
                    </div>
                  </div>
                  <div className='absolute right-0 top-0 w-10 h-10 flex justify-center items-center cursor-pointer'>
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
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className='text-primary'>
                <h2 className='text-xl font-base py-5 uppercase border-b border-t-[rgba(0,0,0,0.12)]'>
                  Thông tin thanh toán
                </h2>
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
                    <a className='w-full h-10 inline-block bg-primary text-white font-bold uppercase leading-10 text-center'>
                      Thanh toán
                    </a>
                  </Link>
                </div>
                <div className='py-5 text-sm text-primary'>
                  <p className='mb-3'>Giao hàng toàn quốc</p>
                  <p className='mb-3'>Giao hàng trong 3-5 ngày</p>
                  <p className='mb-3'>Giao hàng tiêu chuẩn đồng giá 30.000</p>
                  <p className='mb-3'>
                    Cách thức thanh toán: Thanh toán chuyển khoản
                  </p>
                  <p className='mb-3'>Miễn phí đổi trả trong 3 ngày</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Main>
  );
};

export default Cart;

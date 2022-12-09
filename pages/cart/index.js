import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Main from '../../src/layout/Main';
import Section from '../../src/layout/Section';
import styles from './cart.module.scss';
import FeaturedProduct from '../../src/components/FeaturedProduct';
import Button from '../../src/components/Button';

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
            <h1 className='text-primary font-bold text-2xl py-10'>Giỏ hàng</h1>
            <div className='grid grid-cols-1 lg:grid-cols-4 lg:gap-5 gap-10'>
              <div className='col-span-3'>
                <table className='w-full text-left'>
                  <thead>
                    <tr>
                      <th className='text-header font-medium pb-4'>Sản phẩm</th>
                      <th className='text-header font-medium pb-4'>Số lượng</th>
                      <th className='text-header font-medium pb-4'>Giá tiền</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className='w-full h-40 flex pb-5'>
                          <input
                            type='checkbox'
                            className='block w-6 h-6 mr-3'
                          />
                          <div className='h-full flex'>
                            <picture>
                              <img
                                src='/images/product1.webp'
                                alt=''
                                className='w-full h-full object-cover'
                              />
                            </picture>
                            <div className='pl-5 flex justify-between flex-col'>
                              <div>
                                <p className='font-medium text-lg pb-1'>
                                  Trouser Pant
                                </p>
                                <div className='flex text-sm'>
                                  <span className='text-header pr-3 line-through'>
                                    349.000 VND
                                  </span>
                                  <span className='text-primary'>
                                    249.000 VND
                                  </span>
                                </div>
                                <div className='flex text-sm text-primary'>
                                  <span className='pr-2'>Màu:</span>
                                  <span>Be</span>
                                </div>
                                <div className='flex text-sm text-primary'>
                                  <span className='pr-2'>Size:</span>
                                  <span>L</span>
                                </div>
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
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M18 12H6'
                              />
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
                        <span className='font-medium'>747.000 VND</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='w-full'>
                <textarea
                  name=''
                  id=''
                  className='border border-border_input outline-none w-full p-5'
                  placeholder='Ghi chú đơn hàng'
                ></textarea>
                <div className='mt-4'>
                  <p className='font-medium mb-2'>Mã giảm giá</p>
                  <select
                    name='discount'
                    id='discount'
                    className='w-full h-10 border border-border_input outline-none px-3'
                  >
                    <option value='volvo'>Volvo</option>
                    <option value='volvo'>Volvo</option>
                  </select>
                </div>
                <div className='mt-4'>
                  <div className='flex justify-between pb-3'>
                    <span className='font-medium'>Phí giao hàng:</span>
                    <span>0 VND</span>
                  </div>
                  <div className='flex justify-between pb-3'>
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

export default Cart;

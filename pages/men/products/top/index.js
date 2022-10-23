import Link from 'next/link';
import React from 'react';
import List from '../../../../src/components/List';
import Main from '../../../../src/layout/Main';
import Section from '../../../../src/layout/Section';
import styles from './top.module.scss';

const Top = () => {
  return (
    <Main>
      <Section>
        <div className='py-10'>
          <div className='flex mb-5 text-header'>
            <Link href='/'>
              <a>Trang chủ</a>
            </Link>
            <ArrowRight />
            <Link href='/men'>
              <a>Nam</a>
            </Link>
            <ArrowRight />
            <Link href='/men/top'>
              <a>Top</a>
            </Link>
          </div>
          <h1 className='uppercase text-5xl font-bold pb-8'>Top</h1>
          <div className='flex font-medium mb-10'>
            <span className='pr-5'>Bộ lọc:</span>
            <ul className='inline-flex'>
              <li className={`${styles.filter} pr-5 relative cursor-pointer`}>
                <div>
                  <span>Giá</span>
                  <span className='inline-flex items-center pl-1'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-3 h-3'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                      />
                    </svg>
                  </span>
                </div>
                <div
                  className={`${styles.filter_menu} hidden absolute z-20 top-6 left-0 bg-white shadow-md min-w-[150px]`}
                >
                  <div className='p-5'>Giá tăng dần</div>
                  <div className='p-5'>Giá giảm dần</div>
                </div>
              </li>
              <li className={`${styles.filter} pr-5 relative cursor-pointer`}>
                <div className=''>
                  <span>Màu sắc</span>
                  <span className='inline-flex items-center pl-1'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-3 h-3'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                      />
                    </svg>
                  </span>
                </div>
                <div
                  className={`${styles.filter_menu} hidden absolute z-20 top-6 left-0 bg-white shadow-md min-w-[150px]`}
                >
                  <div className='p-5'>Đen</div>
                  <div className='p-5'>Trắng</div>
                  <div className='p-5'>Xanh</div>
                  <div className='p-5'>Đỏ</div>
                  <div className='p-5'>Cam</div>
                </div>
              </li>
              <li className={`${styles.filter} pr-5 relative cursor-pointer`}>
                <div className=''>
                  <span>Kích cỡ</span>
                  <span className='inline-flex items-center pl-1'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-3 h-3'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                      />
                    </svg>
                  </span>
                </div>
                <div
                  className={`${styles.filter_menu} hidden absolute z-20 top-6 left-0 bg-white shadow-md min-w-[150px]`}
                >
                  <div className='p-5'>S</div>
                  <div className='p-5'>M</div>
                  <div className='p-5'>L</div>
                  <div className='p-5'>XL</div>
                  <div className='p-5'>XXL</div>
                </div>
              </li>
            </ul>
          </div>
          <List />
        </div>
      </Section>
    </Main>
  );
};

const ArrowRight = () => {
  return (
    <span className='inline-flex items-center px-2'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-3 h-3'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M8.25 4.5l7.5 7.5-7.5 7.5'
        />
      </svg>
    </span>
  );
};

export default Top;

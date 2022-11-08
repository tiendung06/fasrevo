import Link from 'next/link';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Main from '../../src/layout/Main';
import Section from '../../src/layout/Section';
import 'swiper/css';

const ProductDetails = () => {
  return (
    <Main>
      <Section>
        <div className='flex items-center pt-10 pb-5 md:py-10 text-sm md:text-base'>
          <Link href='/'>
            <a className='font-medium text-header pr-2 lg:pr-3'>Trang chủ</a>
          </Link>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            class='w-3 h-3 text-header'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M8.25 4.5l7.5 7.5-7.5 7.5'
            />
          </svg>
          <Link href='/collections'>
            <a className='font-medium px-2 lg:px-3 text-header'>
              Thời trang nam
            </a>
          </Link>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            class='w-3 h-3 text-header'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M8.25 4.5l7.5 7.5-7.5 7.5'
            />
          </svg>
          <Link href='/collections'>
            <a className='font-medium px-2 lg:px-3 text-header'>Top</a>
          </Link>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            class='w-3 h-3 text-header'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M8.25 4.5l7.5 7.5-7.5 7.5'
            />
          </svg>
          <Link href='/collections'>
            <a className='font-bold pl-2 lg:pl-3 text-primary_red'>
              Trouser Pant
            </a>
          </Link>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className=''>
            <Swiper slidesPerView={'auto'} spaceBetween={40}>
              <SwiperSlide>
                <div className='max-h-[870px]'>
                  <picture>
                    <img
                      src='/images/product1.jpg'
                      alt=''
                      className='w-full h-full object-cover'
                    />
                  </picture>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='max-h-[870px]'>
                  <picture>
                    <img
                      src='/images/top.jpg'
                      alt=''
                      className='w-full h-full object-cover'
                    />
                  </picture>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className=''></div>
        </div>
      </Section>
    </Main>
  );
};

export default ProductDetails;

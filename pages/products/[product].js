import Link from 'next/link';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import Main from '../../src/layout/Main';
import Section from '../../src/layout/Section';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import Button from '../../src/components/Button';

const ProductDetails = () => {
  return (
    <Main>
      <Section>
        <div className='flex items-center pt-10 pb-5 text-xs md:text-sm'>
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
        <div className='grid grid-cols-1 lg:grid-cols-6 gap-y-10 lg:gap-5 justify-between'>
          <div className='lg:col-span-2'>
            <Swiper
              slidesPerView={'auto'}
              modules={[Pagination, Navigation]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={40}
            >
              <SwiperSlide>
                <div className='max-h-[870px]'>
                  <picture>
                    <img
                      src='/images/product1.webp'
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
                      src='/images/top.webp'
                      alt=''
                      className='w-full h-full object-cover'
                    />
                  </picture>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className='hidden md:block invisible'></div>
          <div className='lg:col-span-3'>
            <div className='max-w-[500px]'>
              <p className='text-xs md:text-sm text-header pb-3'>Pants</p>
              <h2 className='text-3xl md:text-4xl font-medium pb-2'>
                Bondi Outdoor Lounge Ottoman Chair & Set
              </h2>
              <div className='flex items-center pb-5'>
                <span className='text-sm md:text-base line-through mr-4 text-header'>
                  640.000 VND
                </span>
                <span className='text-base md:text-lg font-medium text-primary_red'>
                  549.000 VND
                </span>
              </div>
              <p className='pb-5 text-sm md:text-base'>
                Made of three natural organic latex layers, including a plush
                Heveya Natural Organic Latex Topper to give you ideal support
                and comfort.
              </p>
              <div className='w-1/2 mb-5'>
                <label htmlFor='color' className='text-sm font-medium'>
                  Màu sắc
                </label>
                <select
                  name='color'
                  id='color'
                  className='w-full h-10 px-5 text-sm text-secondary_text outline-none border border-border_input'
                  defaultValue={0}
                >
                  <option value={0}>Đen</option>
                  <option value={1}>Trắng</option>
                  <option value={2}>Nâu</option>
                  <option value={3}>Xám</option>
                </select>
              </div>
              <div className='w-1/2 mb-5'>
                <label htmlFor='sex' className='text-sm font-medium'>
                  Kích cỡ
                </label>
                <select
                  name='size'
                  id='size'
                  className='w-full h-10 px-5 text-sm text-secondary_text outline-none border border-border_input'
                  defaultValue={0}
                >
                  <option value={0}>S</option>
                  <option value={1}>M</option>
                  <option value={2}>L</option>
                  <option value={3}>XL</option>
                </select>
              </div>
              <div className='mb-5'>
                <label className='text-sm font-medium'>Số lượng</label>
                <div className='flex justify-between text-header w-40 border border-border_input h-10 px-3'>
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
                  <span className='flex items-center'>3</span>
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
              </div>
              <Button>Thêm vào giỏ hàng</Button>
              <div className='mt-10'>
                <p className='font-medium text-base md:text-lg pb-2'>
                  Chi tiết sản phẩm
                </p>
                <p className='text-sm md:text-base pb-1'>
                  Mã sản phẩm: TROUSER0P001
                </p>
                <p className='text-sm md:text-base pb-1'>Nguồn gốc: Việt Nam</p>
                <p className='text-sm md:text-base pb-1'>
                  Chất liệu: Mịn, co giãn, chống nhăn
                </p>
                <p className='text-sm md:text-base pb-1'>
                  Chi tiết nhỏ: 2 túi chéo thân trước, 2 túi ốp thân sau và có
                  dây rút eo
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Main>
  );
};

export default ProductDetails;

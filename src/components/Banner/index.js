import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Button from '../Button';
import { useEffect } from 'react';

const Banner = () => {
  useEffect(() => {});
  return (
    <div className='w-full max-w-[1920px] mx-auto banner'>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={'auto'}
        autoplay={{ delay: 5000 }}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={40}
      >
        <SwiperSlide>
          <Link href='/collections/123'>
            <div className='w-full h-screen max-h-[870px] relative overflow-hidden'>
              <picture>
                <img
                  src='./images/banner6.webp'
                  alt=''
                  className='w-full h-full object-cover'
                />
              </picture>
              <div className='absolute bottom-1/4 lg:left-40 md:left-20 px-5 max-w-[430px]'>
                <p className='text-white text-2xl md:text-3xl lg:text-4xl font-medium uppercase mb-5'>
                  Bộ sưu tập dành cho mùa đông
                </p>
                <Button bgWhite={true} fullWidth={false}>
                  Xem ngay
                </Button>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href='/'>
            <div className='w-full h-screen max-h-[870px] relative overflow-hidden'>
              <picture>
                <img
                  src='./images/banner3.webp'
                  alt=''
                  className='w-full h-full object-cover'
                />
              </picture>
              <div className='absolute bottom-1/4 lg:left-40 md:left-20 px-5 max-w-[430px]'>
                <p className='text-white text-2xl md:text-3xl lg:text-4xl font-medium uppercase mb-5'>
                  Bộ sưu tập dành cho mùa xuân
                </p>
                <Button bgWhite={true} fullWidth={false}>
                  Xem ngay
                </Button>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href='/'>
            <div className='w-full h-screen max-h-[870px] relative overflow-hidden'>
              <picture>
                <img
                  src='./images/banner4.webp'
                  alt=''
                  className='w-full h-full object-cover'
                />
              </picture>
              <div className='absolute bottom-1/4 lg:left-40 md:left-20 px-5 max-w-[430px]'>
                <p className='text-white text-2xl md:text-3xl lg:text-4xl font-medium uppercase mb-5'>
                  Bộ sưu tập dành cho mùa hè
                </p>
                <Button bgWhite={true} fullWidth={false}>
                  Xem ngay
                </Button>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href='/'>
            <div className='w-full h-screen max-h-[870px] relative overflow-hidden'>
              <picture>
                <img
                  src='./images/banner5.webp'
                  alt=''
                  className='w-full h-full object-cover'
                />
              </picture>
              <div className='absolute bottom-1/4 lg:left-40 md:left-20 px-5 max-w-[430px]'>
                <p className='text-white text-2xl md:text-3xl lg:text-4xl font-medium uppercase mb-5'>
                  Bộ sưu tập dành cho mùa thu
                </p>
                <Button bgWhite={true} fullWidth={false}>
                  Xem ngay
                </Button>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

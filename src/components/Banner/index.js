import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import banner3 from '../../../public/images/banner3.jpg';
import banner4 from '../../../public/images/banner4.jpg';
import banner5 from '../../../public/images/banner5.jpg';
import 'swiper/css';
import 'swiper/css/pagination';

const Banner = () => {
  return (
    <div className='w-full max-w-[1920px] mx-auto'>
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={'auto'}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        spaceBetween={40}
      >
        <SwiperSlide>
          <Link href='/'>
            <div className='w-full h-screen max-h-[870px] overflow-hidden'>
              <picture>
                <img
                  src={banner3.src}
                  alt=''
                  className='w-full h-full object-cover'
                />
              </picture>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href='/'>
            <div className='w-full h-screen max-h-[870px] overflow-hidden'>
              <picture>
                <img
                  src={banner4.src}
                  alt=''
                  className='w-full h-full object-cover'
                />
              </picture>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href='/'>
            <div className='w-full h-screen max-h-[870px] overflow-hidden'>
              <picture>
                <img
                  src={banner5.src}
                  alt=''
                  className='w-full h-full object-cover'
                />
              </picture>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

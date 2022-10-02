import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import banner1 from '../../../public/images/banner1.jpg';
import banner2 from '../../../public/images/banner2.jpg';
import 'swiper/css';
import 'swiper/css/pagination';

const Banner = () => {
  return (
    <div className='w-full'>
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={'auto'}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        spaceBetween={40}
      >
        <SwiperSlide>
          <Link href='/'>
            <div className='w-[full] max-h-[800px] overflow-hidden'>
              <picture>
                <img src={banner1.src} alt='' className='w-full h-full' />
              </picture>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href='/'>
            <div className='w-full max-h-[800px] overflow-hidden'>
              <picture>
                <img src={banner2.src} alt='' className='w-full h-full' />
              </picture>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

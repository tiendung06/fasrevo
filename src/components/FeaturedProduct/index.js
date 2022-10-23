import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import Section from '../../layout/Section';
import Card from '../Card';
import 'swiper/css';
import 'swiper/css/navigation';

const FeaturedProduct = () => {
  return (
    <Section>
      <div className='flex justify-between items-center mb-4 text-primary'>
        <h2 className='font-bold text-xl'>Sản phẩm bán chạy</h2>
      </div>
      <Swiper
        slidesPerView={'auto'}
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        className='grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto max-w-[1920px] w-full'
      >
        {Array(8)
          .fill()
          .map((item, index) => (
            <SwiperSlide key={index}>
              <Card discount={50} speicalPrice={'640.000'} />
            </SwiperSlide>
          ))}
      </Swiper>
    </Section>
  );
};

export default FeaturedProduct;

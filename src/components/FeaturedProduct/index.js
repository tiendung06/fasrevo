import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import Section from '../../layout/Section';
import Card from '../Card';
import 'swiper/css';
import 'swiper/css/navigation';
import SectionHeading from '../SectionHeading';

const FeaturedProduct = () => {
  return (
    <Section>
      <SectionHeading>Sản phẩm bán chạy</SectionHeading>
      <Swiper
        slidesPerView={'auto'}
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        className='grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mx-auto max-w-[1920px] w-full'
      >
        {Array(8)
          .fill()
          .map((item, index) => (
            <SwiperSlide key={index}>
              <Card
                discount={50}
                isDiscount
                title='Quần bò Aeterni khóa ngang rách gấu dáng ôm lưng'
                image='./images/product1.webp'
                specialPrice='640.000'
                basePrice='980.000'
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </Section>
  );
};

export default FeaturedProduct;

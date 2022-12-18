import React from 'react';
import Link from 'next/link';
import Section from '../../layout/Section';
import SectionHeading from '../SectionHeading';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { category } from '../../constants/nav.js';
import { getImageUrl } from '../../helpers';

const Category = () => {
  return (
    <Section>
      <SectionHeading>Danh mục điều hướng</SectionHeading>
      <Swiper
        slidesPerView={'auto'}
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mx-auto max-w-[1920px] w-full"
      >
        {category.map(({ image, title, href, type }, index) => (
          <SwiperSlide key={index}>
            <Link href={href}>
              <div className="cursor-pointer">
                <div className="w-full h-[250px]">
                  <picture>
                    <img
                      src={getImageUrl(image)}
                      alt={title}
                      className="w-full h-full object-cover"
                    />
                  </picture>
                </div>
                <p className="text-xs md:text-sm pt-2 text-header">{type}</p>
                <p className="pt-2 text-sm md:text-base font-medium">{title}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};

export default Category;

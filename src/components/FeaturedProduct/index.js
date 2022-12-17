import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import Section from '../../layout/Section';
import Card from '../Card';
import 'swiper/css';
import 'swiper/css/navigation';
import SectionHeading from '../SectionHeading';
import axios from 'axios';
import { featured_product } from '../../constants/constants';

const FeaturedProduct = () => {
  const [featuredProduct, setFeaturedProduct] = useState();
  useEffect(() => {
    axios.get(`${featured_product}`).then((resp) => {
      setFeaturedProduct(resp.data.products);
    });
  }, []);

  return (
    <Section>
      <SectionHeading>Sản phẩm bán chạy</SectionHeading>
      <Swiper
        slidesPerView={'auto'}
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mx-auto max-w-[1920px] w-full"
      >
        {featuredProduct
          ?.slice(0, 20)
          .map(({ pid, cost, discount, image, isDiscount, pname }) => (
            <SwiperSlide key={pid}>
              <Card
                key={pid}
                id={pid}
                title={pname}
                image={image}
                basePrice={cost}
                discount={isDiscount}
                specialPrice={discount}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </Section>
  );
};

export default FeaturedProduct;

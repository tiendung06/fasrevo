import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import Button from '../Button';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import axios from 'axios';
import { collections } from '../../constants/constants';

const Banner = () => {
  const [collection, setCollection] = useState();
  useEffect(() => {
    axios.get(`${collections.getAllCollections()}`).then((res) => {
      setCollection(res.data.collections);
    });
  }, []);

  return (
    <div className="w-full h-screen max-h-[700px] max-w-[1920px] mx-auto banner">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={'auto'}
        autoplay={{ delay: 5000 }}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={0}
      >
        {collection
          ?.slice(0, 4)
          .map(
            ({ collection_id, collection_name, collection_image, heading }) => (
              <SwiperSlide key={collection_id}>
                <BannerItem
                  image={collection_image}
                  heading={heading}
                  name={collection_name}
                  id={collection_id}
                />
              </SwiperSlide>
            )
          )}
      </Swiper>
    </div>
  );
};

function BannerItem({ image, heading, id, name }) {
  return (
    <div className="w-full h-screen max-h-[700px] relative overflow-hidden bg-black">
      <picture>
        <img
          src={image || './images/banner1.webp'}
          alt=""
          className="w-full h-full object-cover opacity-95"
        />
      </picture>
      <div className="absolute bottom-1/4 lg:left-40 md:left-20 px-5 max-w-[430px]">
        <span className="text-white text-sm mb-3 block">{name}</span>
        <p className="text-white text-2xl md:text-3xl lg:text-4xl font-medium uppercase mb-5">
          {heading}
        </p>
        <Link href={`/collections/${id}`}>
          <a>
            <Button bgWhite={true} fullWidth={false}>
              Xem ngay
            </Button>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Banner;

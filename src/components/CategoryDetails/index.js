import React, { useEffect } from 'react';
import Link from 'next/link';
import Aos from 'aos';
import styles from './categoryDetails.module.scss';
import 'aos/dist/aos.css';
import { getImageUrl } from '../../helpers';

const CategoryDetails = ({ gender = 'male' }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="grid gap-5 grid-cols-2 md:grid-cols-3" data-aos="fade-up">
      <CategoryDetailsItems
        image={`${
          gender === 'male' ? './images/top.webp' : './images/top_women.webp'
        }`}
        type="Top"
        link={`${gender === 'male' ? '/men/top' : '/women/top'}`}
      />
      <CategoryDetailsItems
        image={`${
          gender === 'male'
            ? './images/bottom.webp'
            : './images/bottom_women.webp'
        }`}
        type="Bottom"
        link={`${gender === 'male' ? '/men/bottom' : '/women/bottom'}`}
      />
      <CategoryDetailsItems
        image={`${
          gender === 'male'
            ? './images/accessory.webp'
            : './images/accessory_women.webp'
        }`}
        type="Accessory"
        link={`${gender === 'male' ? '/men/accessory' : '/women/accessory'}`}
      />
    </div>
  );
};

function CategoryDetailsItems({ link, image, type }) {
  return (
    <Link href={link}>
      <div
        className={`${styles.collections} w-full max-h-[400px] bg-black relative cursor-pointer overflow-hidden`}
      >
        <picture>
          <img
            src={getImageUrl(image)}
            alt=""
            className="w-full h-full object-cover opacity-80 transition-all"
          />
        </picture>
        <div className="absolute top-0 bottom-0 right-0 left-0 w-full h-full flex items-center justify-center">
          <span className="text-white text-3xl lg:text-4xl font-bold uppercase">
            {type}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default CategoryDetails;

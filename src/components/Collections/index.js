import React, { useEffect } from 'react';
import Link from 'next/link';
import Section from '../../layout/Section';
import accessory from '../../../public/images/accessory.jpg';
import top from '../../../public/images/top.jpg';
import bottom from '../../../public/images/bottom.jpg';
import Aos from 'aos';
import styles from './collections.module.scss';
import 'aos/dist/aos.css';

const Collections = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Section title='Danh mục mua hàng'>
      <div className='grid gap-5 grid-cols-2 md:grid-cols-3' data-aos='fade-up'>
        <CollectionItems image={top} type='Top' link='/men/products/top' />
        <CollectionItems
          image={bottom}
          type='Bottom'
          link='/men/products/bottom'
        />
        <CollectionItems
          image={accessory}
          type='Accessory'
          link='/men/products/accessory'
        />
      </div>
    </Section>
  );
};

function CollectionItems({ link, image, type }) {
  return (
    <Link href={link}>
      <div
        className={`${styles.collections} w-full bg-black relative cursor-pointer overflow-hidden`}
      >
        <picture>
          <img
            src={image.src}
            alt=''
            className='w-full h-full object-cover opacity-80 transition-all'
          />
        </picture>
        <div className='absolute top-0 bottom-0 right-0 left-0 w-full h-full flex items-center justify-center'>
          <span className='text-white text-3xl lg:text-4xl font-bold uppercase'>
            {type}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default Collections;

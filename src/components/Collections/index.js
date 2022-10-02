import React from 'react';
import Link from 'next/link';
import Section from '../../layout/Section';
import accessory from '../../../public/images/accessory.jpg';
import top from '../../../public/images/top.jpg';
import bottom from '../../../public/images/bottom.jpg';
import styles from './collections.module.scss';

const Collections = () => {
  return (
    <Section title='Danh mục mua hàng'>
      <div className='grid gap-5 grid-cols-3'>
        <CollectionItems image={top} type='Top' link='/top' />
        <CollectionItems image={bottom} type='Bottom' link='/bottom' />
        <CollectionItems image={accessory} type='Accessory' link='/accessory' />
      </div>
    </Section>
  );
};

function CollectionItems({ link, image, type }) {
  return (
    <Link href={link}>
      <div
        className={`${styles.category} w-full bg-black h-[200px] md:h-[400px] lg:h-[500px] relative cursor-pointer overflow-hidden`}
      >
        <picture>
          <img
            src={image.src}
            alt=''
            className='w-full h-full object-cover opacity-80 transition-all'
          />
        </picture>
        <div className='absolute top-0 bottom-0 right-0 left-0 w-full h-full flex items-center justify-center'>
          <span className='text-white md:text-3xl lg:text-4xl font-bold uppercase'>
            {type}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default Collections;

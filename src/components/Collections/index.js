import Link from 'next/link';
import React from 'react';
import Section from '../../layout/Section';
import SectionHeading from '../SectionHeading';
import styles from './collections.module.scss';

const Collections = () => {
  return (
    <Section>
      <SectionHeading path={'/collections'}>Bộ sưu tập</SectionHeading>
      <div className='grid gap-x-5 gap-y-5 md:gap-y-10 grid-cols-2 lg:grid-cols-4'>
        <CollectionItem
          path='/'
          title='Kyle Collection'
          image='images/banner5.webp'
        />
        <CollectionItem
          path='/'
          title='Kyle Collection'
          image='images/banner4.webp'
        />
        <CollectionItem
          path='/'
          title='Kyle Collection'
          image='images/banner3.webp'
        />
        <CollectionItem
          path='/'
          title='Kyle Collection'
          image='images/banner2.webp'
        />
        <CollectionItem
          path='/'
          title='Kyle Collection'
          image='images/banner1.webp'
        />
      </div>
    </Section>
  );
};

function CollectionItem({ path, image, title }) {
  return (
    <Link href={path}>
      <div
        className={`${styles.collection} flex flex-col min-h-[260px] md:min-h-[475px] hover:text-primary_red cursor-pointer`}
      >
        <div className='h-full'>
          <picture>
            <img
              src={image}
              alt={title}
              className='w-full h-full object-cover'
            />
          </picture>
        </div>
        <div className=''>
          <p className='font-medium uppercase text-sm md:text-base pt-4 md:pt-5 text-center transition-all'>
            {title}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Collections;

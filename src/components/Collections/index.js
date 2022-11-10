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
        <Link href='/'>
          <div
            className={`${styles.collection} flex flex-col min-h-[260px] md:min-h-[475px] hover:text-primary_red cursor-pointer`}
          >
            <div className='h-full'>
              <picture>
                <img
                  src='images/banner5.jpg'
                  alt=''
                  className='w-full h-full object-cover'
                />
              </picture>
            </div>
            <div className=''>
              <p className='font-medium uppercase text-sm md:text-base pt-4 md:pt-5 text-center transition-all'>
                Kyle Collection
              </p>
            </div>
          </div>
        </Link>
        <Link href='/'>
          <div
            className={`${styles.collection} flex flex-col min-h-[260px] md:min-h-[475px] hover:text-primary_red cursor-pointer`}
          >
            <div className='h-full'>
              <picture>
                <img
                  src='images/banner4.jpg'
                  alt=''
                  className='w-full h-full object-cover'
                />
              </picture>
            </div>
            <div className=''>
              <p className='font-medium uppercase text-sm md:text-base pt-4 md:pt-5 text-center transition-all'>
                Kyle Collection
              </p>
            </div>
          </div>
        </Link>
        <Link href='/'>
          <div
            className={`${styles.collection} flex flex-col min-h-[260px] md:min-h-[475px] hover:text-primary_red cursor-pointer`}
          >
            <div className='h-full'>
              <picture>
                <img
                  src='images/banner3.jpg'
                  alt=''
                  className='w-full h-full object-cover'
                />
              </picture>
            </div>
            <div className=''>
              <p className='font-medium uppercase text-sm md:text-base pt-4 md:pt-5 text-center transition-all'>
                Kyle Collection
              </p>
            </div>
          </div>
        </Link>
        <Link href='/'>
          <div
            className={`${styles.collection} flex flex-col min-h-[260px] md:min-h-[475px] hover:text-primary_red cursor-pointer`}
          >
            <div className='h-full'>
              <picture>
                <img
                  src='images/banner2.jpg'
                  alt=''
                  className='w-full h-full object-cover'
                />
              </picture>
            </div>
            <div className=''>
              <p className='font-medium uppercase text-sm md:text-base pt-4 md:pt-5 text-center transition-all'>
                Kyle Collection
              </p>
            </div>
          </div>
        </Link>
        <Link href='/'>
          <div
            className={`${styles.collection} flex flex-col min-h-[260px] md:min-h-[475px] hover:text-primary_red cursor-pointer`}
          >
            <div className='h-full'>
              <picture>
                <img
                  src='images/banner1.jpg'
                  alt=''
                  className='w-full h-full object-cover'
                />
              </picture>
            </div>
            <div className=''>
              <p className='font-medium uppercase text-sm md:text-base pt-4 md:pt-5 text-center transition-all'>
                Kyle Collection
              </p>
            </div>
          </div>
        </Link>
      </div>
    </Section>
  );
};

export default Collections;

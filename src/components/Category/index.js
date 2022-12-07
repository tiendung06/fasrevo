import React, { useEffect } from 'react';
import Link from 'next/link';
import Section from '../../layout/Section';
import Aos from 'aos';
import 'aos/dist/aos.css';
import styles from './category.module.scss';
import SectionHeading from '../SectionHeading';

const Category = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Section>
      <SectionHeading>Danh mục điều hướng</SectionHeading>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 overflow-hidden'>
        <Link href='/men'>
          <div
            className={`${styles.category} w-full relative h-[500px] bg-black cursor-pointer overflow-hidden`}
            data-aos='fade-right'
          >
            <picture>
              <img
                src='./images/men.webp'
                alt=''
                className='w-full h-full object-cover opacity-80 transition-all'
              />
            </picture>
            <div className='absolute top-0 bottom-0 right-0 left-0 w-full h-full flex items-center justify-center'>
              <span className='text-white text-3xl lg:text-4xl font-bold uppercase'>
                Thời trang nam
              </span>
            </div>
          </div>
        </Link>
        <Link href='/women'>
          <div
            className={`${styles.category} w-full relative h-[500px] bg-black cursor-pointer overflow-hidden`}
            data-aos='fade-left'
          >
            <picture>
              <img
                src='./images/women.webp'
                alt=''
                className='w-full h-full object-cover opacity-80 transition-all'
              />
            </picture>
            <div className='absolute top-0 bottom-0 right-0 left-0 w-full h-full flex items-center justify-center'>
              <span className='text-white text-3xl lg:text-4xl font-bold uppercase'>
                Thời trang nữ
              </span>
            </div>
          </div>
        </Link>
      </div>
    </Section>
  );
};

export default Category;

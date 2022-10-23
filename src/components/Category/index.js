import React, { useEffect } from 'react';
import Link from 'next/link';
import Section from '../../layout/Section';
import Aos from 'aos';
import men from '../../../public/images/men.jpg';
import women from '../../../public/images/women.jpg';
import 'aos/dist/aos.css';
import styles from './category.module.scss';

const Category = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Section>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 overflow-hidden'>
        <Link href='/men'>
          <div
            className={`${styles.category} w-full relative bg-black cursor-pointer overflow-hidden`}
            data-aos='fade-right'
          >
            <picture>
              <img
                src={men.src}
                alt=''
                className='w-full h-full object-cover opacity-80 transition-all'
              />
            </picture>
            <div className='absolute top-0 bottom-0 right-0 left-0 w-full h-full flex items-center justify-center'>
              <span className='text-white text-3xl lg:text-4xl font-bold uppercase'>
                Nam
              </span>
            </div>
          </div>
        </Link>
        <Link href='/women'>
          <div
            className={`${styles.category} w-full relative bg-black cursor-pointer overflow-hidden`}
            data-aos='fade-left'
          >
            <picture>
              <img
                src={women.src}
                alt=''
                className='w-full h-full object-cover opacity-80 transition-all'
              />
            </picture>
            <div className='absolute top-0 bottom-0 right-0 left-0 w-full h-full flex items-center justify-center'>
              <span className='text-white text-3xl lg:text-4xl font-bold uppercase'>
                Nữ
              </span>
            </div>
          </div>
        </Link>
      </div>
    </Section>
  );
};

export default Category;

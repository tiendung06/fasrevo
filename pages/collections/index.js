import Link from 'next/link';
import React from 'react';
import Main from '../../src/layout/Main';
import Section from '../../src/layout/Section';

const Collections = () => {
  return (
    <Main>
      <Section>
        <div className='flex items-center pt-10 pb-5 md:py-10 text-sm md:text-base'>
          <Link href='/'>
            <a className='font-medium text-header pr-3'>Trang chủ</a>
          </Link>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            class='w-3 h-3 text-header'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M8.25 4.5l7.5 7.5-7.5 7.5'
            />
          </svg>
          <Link href='/collections'>
            <a className='font-bold pl-3 text-primary_red'>Bộ sưu tập</a>
          </Link>
        </div>
        <h1 className='font-bold text-2xl md:text-4xl pb-5 md:pb-10'>
          Bộ sưu tập
        </h1>
        <div className='grid gap-x-5 gap-y-10 grid-cols-1 md:grid-cols-2'>
          {Array(8)
            .fill()
            .map((item, index) => (
              <Link href='/' key={index}>
                <div className='flex flex-col min-h-[260px] md:min-h-[475px] hover:text-primary_red cursor-pointer'>
                  <div className='h-full'>
                    <picture>
                      <img
                        src='images/banner2.webp'
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
            ))}
        </div>
      </Section>
    </Main>
  );
};

export default Collections;

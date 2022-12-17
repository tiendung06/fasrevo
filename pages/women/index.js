import React from 'react';
import Main from '../../src/layout/Main';
import Link from 'next/link';
import SectionHeading from '../../src/components/SectionHeading';
import CategoryDetails from '../../src/components/CategoryDetails';
import Section from '../../src/layout/Section';

const Women = () => {
  return (
    <Main>
      <Section>
        <div className='flex items-center pt-10 pb-5 text-xs md:text-sm'>
          <Link href='/'>
            <a className='font-medium text-header pr-2 lg:pr-3'>Trang chủ</a>
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
          <Link href='/women'>
            <a className='font-bold pl-2 lg:pl-3 text-primary_red'>
              Thời trang nữ
            </a>
          </Link>
        </div>
        <SectionHeading>Thời trang nữ</SectionHeading>
        <CategoryDetails gender='women'></CategoryDetails>
        <div className='mt-10'></div>
      </Section>
    </Main>
  );
};

export default Women;

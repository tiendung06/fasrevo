import Link from 'next/link';
import React from 'react';

const Section = ({ children, title }) => {
  return (
    <section className='w-full lg:my-10 lg:px-[130px] px-5 my-5'>
      <div className='flex justify-between items-center'>
        <h1 className='text-xl font-bold uppercase text-black py-5 sm:py-10'>
          {title}
        </h1>
        <Link href='/products'>
          <a className='text-sm hover:underline'>Xem thêm</a>
        </Link>
      </div>
      {children}
    </section>
  );
};

export default Section;

import Link from 'next/link';
import React from 'react';

const SectionHeading = ({ children, path }) => {
  return (
    <div className='flex justify-between items-center pb-6 lg:pb-10'>
      <h2 className='text-xl lg:text-2xl font-bold uppercase'>{children}</h2>
      {path ? (
        <Link href={path}>
          <a className='text-sm md:text-base font-medium hover:text-primary_red transition-all'>
            Xem thêm
          </a>
        </Link>
      ) : (
        ''
      )}
    </div>
  );
};

export default SectionHeading;

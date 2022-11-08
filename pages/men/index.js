import React from 'react';
import CategoryDetails from '../../src/components/CategoryDetails';
import FeaturedProduct from '../../src/components/FeaturedProduct';
import Main from '../../src/layout/Main';

const Men = () => {
  return (
    <Main>
      {/* <div className='relative w-full max-w-[1920px] h-screen max-h-[870px] mx-auto overflow-hidden'>
        <picture>
          <img src={banner.src} alt='' className='w-full h-full object-cover' />
        </picture>
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bottom-0 text-white text-center flex items-center justify-center'>
          <div className=''>
            <h1 className='uppercase text-5xl font-bold mb-5'>Nam</h1>
            <p className='uppercase font-bold mb-5 text-lg'>
              Sự đơn giản là định nghĩa của thanh lịch.
            </p>
          </div>
        </div>
      </div> */}
      <CategoryDetails></CategoryDetails>
      <FeaturedProduct></FeaturedProduct>
    </Main>
  );
};

export default Men;

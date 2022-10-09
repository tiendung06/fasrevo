import React from 'react';
import Main from '../../src/layout/Main';
import Section from '../../src/layout/Section';
import banner from '../../public/images/banner2.jpg';

const Products = () => {
  return (
    <Main heading='Sản phẩm'>
      <div className='w-full my-[70px]'>
        {/* <div className='banner w-full h-[550px] relative bg-black'>
          <picture>
            <img
              className='w-full h-full object-cover opacity-80'
              src={banner.src}
              alt='Search'
            />
          </picture>
          <div className='absolute bottom-20 p-5 lg:px-32 text-white'>
            <div className='text-sm mb-5'>Trang chủ - Sản phẩm</div>
            <div className='text-6xl font-bold'>Quần jeans</div>
          </div>
        </div> */}
        <div className='grid grid-cols-4'>
          <div className=''></div>
        </div>
      </div>
    </Main>
  );
};

export default Products;

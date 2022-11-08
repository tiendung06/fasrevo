import Link from 'next/link';
import React from 'react';
import Main from '../src/layout/Main';

const NotFound = () => {
  return (
    <Main>
      <div className='w-full min-h-screen flex justify-center items-center'>
        <div className='px-5 py-10 w-full max-w-[550px] text-primary text-center'>
          <h1 className='text-primary_red text-5xl lg:text-6xl font-bold pb-6'>
            404
          </h1>
          <h2 className='font-bold text-2xl lg:text-3xl uppercase pb-3'>
            Không tìm thấy trang
          </h2>
          <p className='text-header pb-10'>
            Trang bạn tìm kiếm không được tìm thấy
          </p>
          <Link href='/'>
            <a className='px-10 bg-primary text-sm lg:text-base text-white py-4 uppercase font-bold'>
              Trở về trang chủ
            </a>
          </Link>
        </div>
      </div>
    </Main>
  );
};

export default NotFound;

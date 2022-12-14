import React from 'react';
import Head from 'next/head';
import Header from '../Header';
import SideBar from '../../../components/admin/SideBar';

const Main = ({ heading = 'Admin', children }) => {
  return (
    <>
      <Head>
        <title>{heading}</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='grid grid-cols-5 bg-admin_background min-w-screen min-h-screen'>
        <div className='col-span-1'>
          <SideBar />
        </div>
        <div className='col-span-4'>
          <Header />
          <main className='p-5'>{children}</main>
        </div>
      </div>
      <div className='fixed top-0 bottom-0 right-0 left-0 flex justify-center items-center bg-gray-600 text-white lg:hidden p-5 text-center'>
        <h2>
          Hệ thống chỉ hoạt động trên thiết bị có kích thước màn hình lớn hơn
          1024px
        </h2>
      </div>
    </>
  );
};

export default Main;

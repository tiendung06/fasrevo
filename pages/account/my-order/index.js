import React from 'react';
import Link from 'next/link';
import MainAccount from '../../../src/layout/MainAccount';

const MyOrder = () => {
  return (
    <MainAccount heading='Đơn hàng của tôi'>
      <OrderItem />
    </MainAccount>
  );
};

function OrderItem({
  pname,
  image,
  basePrice,
  specialPrice,
  size,
  color,
  status,
  quantity,
}) {
  return (
    <div className='w-full h-48 flex justify-between py-5 border-b border-b-border_input'>
      <div className='h-full flex'>
        <picture>
          <img
            src='/images/product1.webp'
            alt=''
            className='w-full h-full object-cover'
          />
        </picture>
        <div className='px-3 lg:px-5 flex justify-between flex-col'>
          <div>
            <Link href='/'>
              <a className='font-medium block lg:text-base text-sm pb-1 max-w-[700px] break-words hover:text-primary_red transition-all'>
                Quần Sweatpants Jogger dây rút bo ống chun unisex form rộng dài
                phong cách Hàn Quốc
              </a>
            </Link>
            <div className='flex items-center'>
              <span className='text-header text-xs lg:text-sm pr-3 line-through'>
                349.000 VND
              </span>
              <span className='text-primary text-sm lg:text-base'>
                249.000 VND
              </span>
            </div>
            <p className='text-xs lg:text-sm text-primary pb-1'>Màu: Be</p>
            <p className='text-xs lg:text-sm text-primary pb-1'>Size: L</p>
            <p className='text-xs lg:text-sm text-primary pb-1'>Số lượng: 3</p>
          </div>
          <p className='font-medium text-sm text-left'>Đang chuẩn bị hàng</p>
        </div>
      </div>
      <span className='text-primary_red font-bold text-sm lg:text-base'>
        747.000 VND
      </span>
    </div>
  );
}

export default MyOrder;

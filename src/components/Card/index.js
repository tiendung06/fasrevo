import Link from 'next/link';
import React from 'react';
import card from '../../../public/images/product1.jpg';
import styles from './card.module.scss';

const Card = ({ title, image, basePrice, speicalPrice, discount }) => {
  return (
    <Link href='/'>
      <div className={`${styles.card} max-w-[480px] cursor-pointer relative`}>
        <div className='w-full max-h-[700px] bg-slate-400  overflow-hidden'>
          <picture>
            <img
              src={card.src}
              alt={title}
              className='object-cover w-full h-full transition-all'
            />
          </picture>
        </div>
        <div className='w-full'>
          <h3 className='text-sm text-primary font-medium uppercase mt-5 mb-1 transition-all'>
            IDLE LOOSE PANT
          </h3>
          <div className='flex'>
            <span className='text-xs'>549.000 VND</span>
            {discount ? (
              <span className='text-xs line-through ml-4'>
                {speicalPrice} VND
              </span>
            ) : (
              ''
            )}
          </div>
        </div>
        {discount ? (
          <div className='w-10 h-10 bg-[#444444] absolute top-0 right-5 flex items-center justify-center'>
            <span className='text-white text-sm font-medium'>{discount}%</span>
          </div>
        ) : (
          ''
        )}
      </div>
    </Link>
  );
};

export default Card;

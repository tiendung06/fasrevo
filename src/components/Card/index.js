import Link from 'next/link';
import React from 'react';
import styles from './card.module.scss';

const Card = ({ id, title, image, basePrice, specialPrice, discount }) => {
  function formatMoney(n, currency) {
    return n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') + currency;
  }

  const basePriceFormat = formatMoney(basePrice, 'VND');
  const specialPriceFormat = formatMoney(specialPrice, 'VND');

  return (
    <Link href={`/products/${id}`}>
      <div className={`${styles.card} max-w-[480px] cursor-pointer relative`}>
        <div className='w-full max-h-[700px] bg-slate-400 overflow-hidden'>
          <picture>
            <img
              src={image}
              alt={title}
              className='object-cover w-full h-full transition-all'
            />
          </picture>
        </div>
        <div className='w-full'>
          <h3 className='text-sm md:text-base text-primary text-center font-medium uppercase mt-3 md:mt-5 mb-1 transition-all'>
            {title} {id}
          </h3>
          <div className='flex justify-center items-center'>
            {discount ? (
              <span className='text-xs md:text-sm line-through mr-4 text-header'>
                {specialPriceFormat}
              </span>
            ) : (
              ''
            )}
            <span
              className={`text-xs ${
                discount
                  ? 'text-primary_red font-medium md:text-base'
                  : 'md:text-sm'
              } `}
            >
              {basePriceFormat}
            </span>
          </div>
        </div>
        {discount ? (
          <div className='w-10 h-10 bg-primary_red absolute top-0 right-5 flex items-center justify-center'>
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

import Link from 'next/link';
import React from 'react';
import { formatMoney, getImageUrl, getPrice } from '../../helpers';
import styles from './card.module.scss';

const Card = ({ id, title, image, basePrice, discount, isDiscount }) => {
  return (
    <Link href={`/products/${id}`}>
      <div className={`${styles.card} max-w-[480px] cursor-pointer relative`}>
        <div className="w-full h-60 md:h-80 bg-slate-400 overflow-hidden">
          <picture>
            <img
              src={getImageUrl(image)}
              alt={title}
              className="object-cover w-full h-full transition-all"
            />
          </picture>
        </div>
        <div className="w-full">
          <h3 className="text-sm md:text-base text-primary text-center font-medium pt-2 transition-all truncate">
            {title}
          </h3>
          <div className="flex justify-center items-center pt-2">
            <span
              className={`${
                isDiscount === 1
                  ? 'text-xs md:text-sm line-through mr-3 md:mr-4 text-header'
                  : 'text-xs md:text-base'
              }`}
            >
              {formatMoney(basePrice)}
            </span>
            <span
              className={`${
                isDiscount
                  ? 'text-primary_red font-medium text-xs md:text-base'
                  : 'hidden'
              } `}
            >
              {formatMoney(getPrice(discount, basePrice, isDiscount))}
            </span>
          </div>
        </div>
        {isDiscount === 1 ? (
          <div className="w-10 h-10 bg-primary_red absolute top-0 right-5 flex items-center justify-center">
            <span className="text-white text-sm font-medium">{discount}%</span>
          </div>
        ) : (
          ''
        )}
      </div>
    </Link>
  );
};

export default Card;

import Link from 'next/link.js';
import React from 'react';
import {
  footerPolicy,
  footerContact,
  storeAdress,
} from '../../constants/nav.js';

const Footer = () => {
  return (
    <footer className='w-full'>
      <div className='max-w-[1920px] bg-white px-5 lg:px-10 py-5 mx-auto'>
        <div className='border-t-[1px] border-t-[#dddddd] w-full pt-[15px]'></div>
        <div className='flex flex-wrap justify-between'>
          <div className='flex flex-wrap'>
            <FooterColumn heading='Chính sách' col={footerPolicy} meta='link' />
            <FooterColumn heading='Liên hệ' col={footerContact} meta='link' />
            <FooterColumn heading='Địa chỉ' col={storeAdress} />
          </div>
          <div className='pt-5'>
            <span className='text-xs'>© FASREVO 2022. All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

function FooterColumn({ heading, col, meta }) {
  return (
    <div className='w-[250px] pt-5'>
      <h3 className='font-medium text-base mb-4'>{heading}</h3>
      <ul className='list-none '>
        {col.map(({ title, path }) => (
          <li key={title}>
            {meta === 'link' ? (
              <Link href={path}>
                <a className='text-xs block pb-[15px] transition-all hover:text-[#ff5c8d]'>
                  {title}
                </a>
              </Link>
            ) : (
              <span className='text-xs block pb-[15px]'>{title}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;

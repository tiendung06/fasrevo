import Link from 'next/link.js';
import React from 'react';
import {
  nav,
  footerPolicy,
  footerContact,
  storeAddress,
} from '../../constants/nav.js';

const Footer = () => {
  return (
    <footer className='w-full max-w-[1920px] bg-footer_background mx-auto'>
      <div className='container md:px-10 px-5 mx-auto'>
        <div className='container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-10 py-10 lg:py-20'>
          <FooterColumn heading='Điều hướng' col={nav} />
          <FooterColumn heading='Chính sách' col={footerPolicy} />
          <FooterColumn heading='Liên hệ' col={footerContact} />
          <FooterColumn heading='Địa chỉ' col={storeAddress} meta='text' />
        </div>
        <div className='text-center text-sm text-footer_label h-10'>
          © FASREVO 2022. All rights reserved
        </div>
      </div>
    </footer>
  );
};

function FooterColumn({ heading, col, meta }) {
  return (
    <div>
      <h3 className='font-medium text-base text-footer_label uppercase mb-4'>
        {heading}
      </h3>
      <ul className='list-none '>
        {col?.map(({ title, path }) => (
          <li key={title}>
            {meta !== 'text' ? (
              <Link href={path}>
                <a className='text-sm block pb-4 transition-all text-footer_text hover:text-footer_hover'>
                  {title}
                </a>
              </Link>
            ) : (
              <span className='text-sm block pb-4 text-footer_text'>
                {title}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;

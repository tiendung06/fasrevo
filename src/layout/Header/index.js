import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import icon_search from '../../../public/assets/icon-search.svg';
import icon_user from '../../../public/assets/icon-user.svg';
import icon_cart from '../../../public/assets/icon-cart.svg';
import icon_bars from '../../../public/assets/icon-bars.svg';
import icon_close from '../../../public/assets/icon-times.svg';
import image_product from '../../../public/images/product1.jpg';
import { nav } from '../../constants/nav.js';
import styles from './header.module.scss';

const Header = () => {
  const [showMenuNav, setShowMenuNav] = useState(false);
  const [showBoxSearch, setShowBoxSearch] = useState(false);

  const handleShowMenu = () => {
    setShowMenuNav(!showMenuNav);
  };

  const handleShowBoxSearch = () => {
    setShowBoxSearch(!showBoxSearch);
  };

  useEffect(() => {
    const navbarDom = document.getElementById('navbar');
    if (showMenuNav) {
      navbarDom.classList.add(styles.show_navbar);
    } else {
      navbarDom.classList.remove(styles.show_navbar);
    }
  }, [showMenuNav]);

  useEffect(() => {
    const boxSearch = document.getElementById('box-search');
    if (showBoxSearch) {
      boxSearch.classList.add(styles.show_box_search);
    } else {
      boxSearch.classList.remove(styles.show_box_search);
    }
  }, [showBoxSearch]);

  return (
    <header className='w-full relative'>
      <div
        id='box-search'
        className='fixed flex transition-all left-0 top-[-120px] bg-white w-full h-[70px] items-center justify-center shadow-sm px-5 z-20'
      >
        <div className='h-10 max-w-[500px] w-full relative border-[rgba(0,0,0,0.12)] border-[1px]'>
          <input
            className='bg-transparent w-full h-full pl-5 pr-[50px] text-xs outline-0 border-none text-secondary_text'
            type='text'
            placeholder='Gõ từ khóa tìm kiếm'
          />
          <div className='absolute right-0 bottom-0 w-10 h-10 flex justify-center items-center cursor-pointer'>
            <Image
              className='w-3 h-3'
              src={icon_search.src}
              alt='Search'
              width={14}
              height={14}
            />
          </div>
          <div className='hidden absolute w-full top-[45px] left-0 z-40 bg-white border-[rgba(0,0,0,0.12)] border-[1px]'>
            <div
              className={`${styles.product_search} p-2 flex items-center cursor-pointer`}
            >
              <Image
                className='w-3 h-3 object-cover'
                src={image_product.src}
                alt='Search'
                width={40}
                height={50}
              />
              <div className='px-3'>
                <p className='text-sm font-medium transition-all'>
                  IDLE TRAVEL BAG
                </p>
                <span className='font-normal text-xs'>320.500đ</span>
              </div>
            </div>
            <div className='w-full h-10 flex items-center border-t border-[rgba(0,0,0,0.12)] cursor-pointer'>
              <p className='px-2 text-xs'>Tìm kiếm kết quả cho ABCXYZ</p>
            </div>
          </div>
        </div>
        <div
          className='h-10 w-[40px] flex justify-center items-center cursor-pointer'
          onClick={handleShowBoxSearch}
        >
          <Image
            className='w-full h-full'
            src={icon_close.src}
            alt='Search'
            width={14}
            height={14}
          />
        </div>
      </div>
      <div
        id='header-desktop'
        className={`${styles.header_desktop} fixed top-0 z-10 bg-white  w-full h-[70px] px-5 lg:px-10 shadow-sm`}
      >
        <div className='max-w-[1920px] h-full mx-auto items-center relative grid grid-cols-3'>
          <div className='top-0 flex justify-between w-full h-full items-center'>
            <ul
              id='navbar'
              className='list-none lg:flex items-center h-screen lg:h-full border-t border-t-[rgba(0,0,0,0.12)] lg:border-none lg:static -translate-x-full lg:translate-x-0 p-5 lg:p-0 fixed left-0 right-0 bottom-0 top-[70px] z-30 bg-white lg:bg-transparent overflow-hidden transition-all'
            >
              {nav.map(({ title, path }) => (
                <li className='pr-5' key={title}>
                  <Link href={path}>
                    <a className='pb-5 md:py-5 text-base md:text-sm text-header font-medium block transition-all hover:text-header_hover'>
                      {title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
            <div
              className='absolute left-0 lg:hidden cursor-pointer'
              onClick={handleShowMenu}
            >
              {showMenuNav ? (
                <div className='flex items-center justify-center h-5 w-5'>
                  <Image
                    className='w-full h-full'
                    src={icon_close.src}
                    alt='Search'
                    width={20}
                    height={20}
                  />
                </div>
              ) : (
                <div className='flex items-center justify-center h-5 w-5'>
                  <Image
                    className='w-full h-full'
                    src={icon_bars.src}
                    alt='Search'
                    width={20}
                    height={20}
                  />
                </div>
              )}
            </div>
          </div>
          <div className='h-full flex items-center justify-center text-center'>
            <Link href='/'>
              <a className='text-header_hover font-bold text-2xl'>fasrevo</a>
            </Link>
          </div>
          <div className='flex items-center justify-end h-full text-xs font-medium'>
            <div
              className='flex items-center justify-center h-10 w-10 cursor-pointer'
              onClick={handleShowBoxSearch}
            >
              <Image
                className='w-3 h-3'
                src={icon_search.src}
                alt='Search'
                width={20}
                height={20}
              />
            </div>
            <div className='flex items-center justify-center h-10 w-10 cursor-pointer'>
              <Link href='/sign-in'>
                <Image
                  className='w-3 h-3'
                  src={icon_user.src}
                  alt='Search'
                  width={20}
                  height={20}
                />
              </Link>
            </div>
            <div className='flex items-center justify-center h-10 w-10 cursor-pointer relative'>
              <Link href='/cart'>
                <Image
                  className='w-3 h-3'
                  src={icon_cart.src}
                  alt='Search'
                  width={20}
                  height={20}
                />
              </Link>
              <span className='inline-block absolute w-4 h-4 rounded-full text-center text-white top-0 right-0 bg-header_hover'>
                3
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

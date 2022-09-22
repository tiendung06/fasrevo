import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import icon_search_white from '../../../public/assets/icon-search_white.svg';
import icon_close from '../../../public/assets/icon-times.svg';
import { nav } from '../../constants/nav.js';
import styles from './header.module.scss';

const START_SHOW_HIDE_HEADER = 40;

const Header = () => {
  const [showMenuNav, setShowMenuNav] = useState(false);
  const [showBoxSearch, setShowBoxSearch] = useState(false);

  const handleShowMenu = () => {
    setShowMenuNav(true);
  };

  const handleCloseMenu = () => {
    setShowMenuNav(false);
  };

  const handleShowBoxSearch = () => {
    setShowBoxSearch(!showBoxSearch);
  };

  useEffect(() => {
    const navbarDom = document.getElementById('navbar-mobile');
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

  useEffect(() => {
    const headerDesktopDom = document.getElementById('header-desktop');
    const headerMobileDom = document.getElementById('header-mobile');
    const controlNavbar = () => {
      if (window.scrollY > START_SHOW_HIDE_HEADER) {
        headerMobileDom.classList.add(styles.sticky_class);
        headerDesktopDom.classList.add(styles.sticky_class);
      } else {
        headerMobileDom.classList.remove(styles.sticky_class);
        headerDesktopDom.classList.remove(styles.sticky_class);
      }
    };
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);

  return (
    <header className='w-full'>
      <div className='h-10 flex items-center justify-center bg-[#08191f]'>
        <p className='text-sm text-center text-white'>SALE UP TO 50%</p>
      </div>
      <div
        id='header-desktop'
        className={`${styles.header_desktop} absolute top-10 z-10 bg-white  w-full h-[70px] px-5 lg:px-10 shadow-sm`}
      >
        <div className='max-w-[1920px] mx-auto flex items-center'>
          <div className='pr-[15px]'>
            <Link href='/'>
              <a className='text-[#ff5c8d] font-bold text-2xl py-[10px]'>
                fasrevo
              </a>
            </Link>
          </div>
          <div className='flex justify-between w-full'>
            <ul className='list-none flex items-center h-[60px]'>
              {nav.map(({ title, path }) => (
                <li className='px-[15px]' key={title}>
                  <Link href={path}>
                    <a className='py-5 text-xs font-medium transition-all hover:text-[#ff5c8d]'>
                      {title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
            <div className='flex items-center text-xs font-medium'>
              <div className='flex items-center h-full relative cursor-pointer'>
                <span
                  className='px-[15px] py-5 transition-all hover:text-[#ff5c8d]'
                  onClick={handleShowBoxSearch}
                >
                  Tìm kiếm
                </span>
                <div
                  id='box-search'
                  className='absolute hidden transition-all right-0 top-[70px] bg-[#444444] w-[300px] h-10'
                >
                  <input
                    className='bg-transparent w-full h-full pl-5 pr-[50px] outline-0 border-none text-white'
                    type='text'
                    placeholder='Gõ từ khóa tìm kiếm'
                  />
                  <div className='absolute right-0 bottom-0 w-10 h-10 flex justify-center items-center cursor-pointer'>
                    <Image
                      className='w-3 h-3'
                      src={icon_search_white.src}
                      alt='Search'
                      width={12}
                      height={12}
                    />
                  </div>
                </div>
              </div>
              <Link href='/sign-in'>
                <a className='px-[15px] py-5 transition-all hover:text-[#ff5c8d]'>
                  Đăng nhập
                </a>
              </Link>
              <Link href='/cart'>
                <a className='py-5 pl-[15px] transition-all hover:text-[#ff5c8d]'>
                  <span>Giỏ hàng</span>
                  <span className='inline-flex items-center justify-center bg-[#ff5c8d] rounded-full w-[25px] h-[25px] text-white ml-[5px]'>
                    3
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        id='header-mobile'
        className={`${styles.header_mobile} hidden bg-white justify-between items-center max-w-[1920px] w-full mx-auto h-[70px] px-5 shadow-sm absolute top-10 z-10`}
      >
        <div className='flex items-center w-full justify-center relative'>
          <div
            className='absolute left-0 cursor-pointer'
            onClick={handleShowMenu}
          >
            <div className='w-[25px] h-[2px] bg-[#08191f] rounded-full'></div>
            <div className='w-[25px] h-[2px] bg-[#08191f] mt-[5px] rounded-full'></div>
            <div className='w-[25px] h-[2px] bg-[#08191f] mt-[5px] rounded-full'></div>
          </div>
          <Link href='/'>
            <a className='text-[#ff5c8d] font-bold text-2xl py-[10px]'>
              fasrevo
            </a>
          </Link>
          <Link href='/cart'>
            <a className='py-5 pl-[15px] transition-all hover:text-[#ff5c8d] absolute right-0'>
              <span className='text-xs font-medium'>Giỏ hàng</span>
              <span className='inline-flex items-center justify-center bg-[#ff5c8d] text-xs rounded-full w-[25px] h-[25px] text-white ml-[5px]'>
                3
              </span>
            </a>
          </Link>
        </div>
        <div
          id='navbar-mobile'
          className='fixed w-full h-screen bg-white top-0 left-0 z-10 p-5 transition-all -translate-x-full'
        >
          <div className='flex w-full h-[25px] justify-end'>
            <div className='cursor-pointer' onClick={handleCloseMenu}>
              <Image
                className='w-full h-full block'
                src={icon_close.src}
                alt='Close'
                width={25}
                height={25}
              />
            </div>
          </div>
          <div className='w-full relative'>
            <label htmlFor='search' className='text-sm font-medium'>
              Tìm kiếm
            </label>
            <input
              id='search'
              type='text'
              className='w-full h-10 outline-0 pl-4 pr-[50px] shadow bg-[#444444] text-white mt-3'
              placeholder='Gõ từ khóa tìm kiếm'
            />
            <div className='absolute right-0 bottom-0 w-10 h-10 flex justify-center items-center cursor-pointer'>
              <Image
                className='w-3 h-3'
                src={icon_search_white.src}
                alt='Search'
                width={12}
                height={12}
              />
            </div>
          </div>
          <div className='w-full'>
            <ul className='list-none mt-5'>
              {nav.map(({ title, path }) => (
                <li key={title}>
                  <Link href={path}>
                    <a className='block py-2 text-base font-medium transition-all hover:text-[#ff5c8d]'>
                      {title}
                    </a>
                  </Link>
                </li>
              ))}
              <li>
                <Link href='/sign-in'>
                  <a className='block py-2 text-base font-medium transition-all hover:text-[#ff5c8d]'>
                    Đăng nhập
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

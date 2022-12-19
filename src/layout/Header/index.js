import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { nav } from '../../constants/nav.js';
import { useSelector } from 'react-redux';
import styles from './header.module.scss';

const Header = ({ transparent = false }) => {
  const [showMenuNav, setShowMenuNav] = useState(false);
  const authenticated = useSelector((state) => state.auth.authenticated);
  const [activeItem, setActiveItem] = useState(-1);
  const { cart } = useSelector((state) => state.cart);
  const handleShowMenu = () => {
    setShowMenuNav(!showMenuNav);
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
    const header = document.getElementById('header-desktop');
    const controlNavbar = () => {
      if (transparent) {
        if (window.scrollY > 0) {
          header.classList.add(styles.white_background);
        } else {
          header.classList.remove(styles.white_background);
        }
      }
    };
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [transparent]);

  return (
    <header className="w-full relative">
      <div
        id="header-desktop"
        className={`${styles.header_desktop} fixed top-0 z-10 ${
          transparent
            ? 'bg-transparent text-white'
            : 'bg-white text-primary shadow-sm'
        }  w-full h-20 px-5 md:px-10 transition-all`}
      >
        <div className="max-w-[1920px] h-full mx-auto items-center relative grid grid-cols-3">
          <div className="top-0 flex justify-between w-full h-full items-center">
            <div
              id="navbar"
              className={`${styles.navbar} pb-10 w-0 h-full fixed left-0 right-0 bottom-0 z-30 bg-white transition-all overflow-auto`}
            >
              <div
                className="close h-20 w-full px-5 md:px-10 flex items-center text-primary cursor-pointer"
                onClick={handleShowMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <ul className="list-none w-full px-5 md:px-20">
                {nav.map(({ title, path, subMenu }, i) => (
                  <li key={title} className={styles.collapsible_menu}>
                    <button
                      onClick={() => {
                        if (activeItem !== i) {
                          setActiveItem(i);
                        } else {
                          setActiveItem(-1);
                        }
                      }}
                      className={`w-full pb-5 sm:py-5 flex justify-between items-center btnShowSubMenu text-left text-primary hover:text-primary_red`}
                    >
                      <Link href={path}>
                        <a className="text-2xl sm:text-4xl uppercase font-bold inline-block transition-all">
                          {title}
                        </a>
                      </Link>
                      {subMenu ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v12m6-6H6"
                          />
                        </svg>
                      ) : null}
                    </button>
                    {subMenu ? (
                      <ul
                        className={`left-0 top-[60px] list-none max-h-0 overflow-hidden transition-all ${
                          activeItem === i ? 'max-h-full' : ''
                        }`}
                      >
                        {subMenu.map(({ title, path }) => (
                          <li className={`px-5 relative`} key={title}>
                            <Link href={path}>
                              <a className="pb-5 sm:py-5 text-xl sm:text-3xl text-header font-medium uppercase block transition-all hover:text-primary_red">
                                {title}
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="max-h-0"></p>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="cursor-pointer" onClick={handleShowMenu}>
              <div className="bars flex items-center justify-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="h-full flex items-center justify-center text-center">
            <Link href="/">
              <a className="font-bold text-2xl">Fasrevo</a>
            </Link>
          </div>
          <div className="flex items-center justify-end h-full text-xs font-medium">
            <div className="search flex items-center justify-center h-10 w-10 cursor-pointer">
              <Link href="/search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </Link>
            </div>
            <div className="flex items-center justify-center h-10 w-10 cursor-pointer">
              {authenticated ? (
                <Link href="/account/my-order">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </Link>
              ) : (
                <Link href="/sign-in">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </Link>
              )}
            </div>
            <div className="flex items-center justify-center h-10 w-10 cursor-pointer relative">
              <Link href="/cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </Link>
              <span
                className={`absolute w-4 h-4 rounded-full text-center text-white top-0 right-0 bg-header_hover ${
                  cart > 0 ? 'inline-block' : 'hidden'
                }`}
              >
                {cart}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

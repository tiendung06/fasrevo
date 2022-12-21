import Link from 'next/link';
import React from 'react';

const Breadcrumb = ({ product }) => {
  const category = () => {
    switch (product?.cid) {
      case 1:
        return (
          <Link href={`${product?.sex_id === 1 ? '/men/top' : '/women/top'}`}>
            <a className="font-medium px-2 lg:px-3 text-header">Top</a>
          </Link>
        );
      case 2:
        return (
          <Link
            href={`${product?.sex_id === 1 ? '/men/bottom' : '/women/bottom'}`}
          >
            <a className="font-medium px-2 lg:px-3 text-header">Bottom</a>
          </Link>
        );
      case 3:
        return (
          <Link
            href={`${
              product?.sex_id === 1 ? '/men/accessory' : '/women/accessory'
            }`}
          >
            <a className="font-medium px-2 lg:px-3 text-header">Accessory</a>
          </Link>
        );
    }
  };

  const categoryDetails = () => {
    switch (product?.cdid) {
      case 1:
        return (
          <Link
            href={`${
              product?.sex_id === 1 ? '/men/top/hoodie' : '/women/top/hoodie'
            }`}
          >
            <a className="font-bold pl-2 lg:pl-3 text-primary_red">Hoodie</a>
          </Link>
        );
      case 2:
        return (
          <Link
            href={`${
              product?.sex_id === 1
                ? '/men/top/t-shirts'
                : '/women/top/t-shirts'
            }`}
          >
            <a className="font-bold pl-2 lg:pl-3 text-primary_red">Áo phông</a>
          </Link>
        );
      case 3:
        return (
          <Link
            href={`${
              product?.sex_id === 1 ? '/men/top/shirts' : '/women/top/shirts'
            }`}
          >
            <a className="font-bold pl-2 lg:pl-3 text-primary_red">Áo sơ mi</a>
          </Link>
        );
      case 4:
        return (
          <Link
            href={`${
              product?.sex_id === 1 ? '/men/top/jackets' : '/women/top/jackets'
            }`}
          >
            <a className="font-bold pl-2 lg:pl-3 text-primary_red">Áo khoác</a>
          </Link>
        );
      case 5:
        return (
          <Link
            href={`${
              product?.sex_id === 1
                ? '/men/bottom/pants'
                : '/women/bottom/pants'
            }`}
          >
            <a className="font-bold pl-2 lg:pl-3 text-primary_red">Quần dài</a>
          </Link>
        );
      case 6:
        return (
          <Link
            href={`${
              product?.sex_id === 1
                ? '/men/bottom/jeans'
                : '/women/bottom/jeans'
            }`}
          >
            <a className="font-bold pl-2 lg:pl-3 text-primary_red">Quần bò</a>
          </Link>
        );
      case 7:
        return (
          <Link
            href={`${
              product?.sex_id === 1
                ? '/men/bottom/shorts'
                : '/women/bottom/shorts'
            }`}
          >
            <a className="font-bold pl-2 lg:pl-3 text-primary_red">
              Quần shorts
            </a>
          </Link>
        );
      case 8:
        return (
          <Link
            href={`${
              product?.sex_id === 1
                ? '/men/accessory/hat'
                : '/women/accessory/hat'
            }`}
          >
            <a className="font-bold pl-2 lg:pl-3 text-primary_red">Mũ</a>
          </Link>
        );
      case 9:
        return (
          <Link href={`${product?.sex_id === 1 ? '/men/bag' : '/women/bag'}`}>
            <a className="font-bold pl-2 lg:pl-3 text-primary_red">Túi xách</a>
          </Link>
        );
      case 10:
        return (
          <Link
            href={`${
              product?.sex_id === 1
                ? '/men/accessory/necklace'
                : '/women/accessory/necklace'
            }`}
          >
            <a className="font-bold pl-2 lg:pl-3 text-primary_red">
              Dây chuyền
            </a>
          </Link>
        );
    }
  };

  return (
    <div className="flex items-center pt-10 pb-5 text-xs md:text-sm">
      <Link href="/">
        <a className="font-medium text-header pr-2 lg:pr-3">Trang chủ</a>
      </Link>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-3 h-3 text-header"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
      <Link href={`${product?.sex_id === 1 ? '/men' : '/women'}`}>
        <a className="font-medium px-2 lg:px-3 text-header">
          {product?.sex_id === 1 ? 'Thời trang nam' : 'Thời trang nữ'}
        </a>
      </Link>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-3 h-3 text-header"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
      {category()}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-3 h-3 text-header"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
      {categoryDetails()}
    </div>
  );
};

export default Breadcrumb;

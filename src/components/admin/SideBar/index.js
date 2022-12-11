import React from 'react';
import Link from 'next/link';

const SideBar = () => {
  return (
    <div className='bg-white shadow-sm min-h-screen'>
      <h1 className='text-center uppercase text-black font-bold text-xl px-10 py-5'>
        Fasrevo
      </h1>
      <Link href='/admin'>
        <div className='flex items-center w-full h-[60px] text-black px-5 hover:text-primary_blue cursor-pointer'>
          <a>Trang chủ</a>
        </div>
      </Link>
      <Accordion
        title='Quản lý khách hàng'
        id='customer'
        headingId='customerHeading'
      >
        <Link href='/admin/customer'>
          <div className='flex items-center w-full h-[60px] text-black text-sm px-5 hover:text-primary_blue cursor-pointer'>
            <a>Tổng quan khách hàng</a>
          </div>
        </Link>
        <Link href='/admin/point'>
          <div className='flex items-center w-full h-[60px] text-black text-sm px-5 hover:text-primary_blue cursor-pointer'>
            <a>Quản lý tích điểm</a>
          </div>
        </Link>
      </Accordion>
      <Accordion title='Quản lý bán hàng' id='order' headingId='orderHeading'>
        <Link href='/admin/order'>
          <div className='flex items-center w-full h-[60px] text-black text-sm px-5 hover:text-primary_blue cursor-pointer'>
            <a>Quản lý đơn hàng</a>
          </div>
        </Link>
        <Link href='/admin/product'>
          <div className='flex items-center w-full h-[60px] text-black text-sm px-5 hover:text-primary_blue cursor-pointer'>
            <a>Quản lý sản phẩm</a>
          </div>
        </Link>
        <Link href='/admin/voucher'>
          <div className='flex items-center w-full h-[60px] text-black text-sm px-5 hover:text-primary_blue cursor-pointer'>
            <a>Quản lý chương trình khuyến mại</a>
          </div>
        </Link>
      </Accordion>
      <Link href='/admin/inventory'>
        <div className='flex items-center w-full h-[60px] text-black px-5 hover:text-primary_blue cursor-pointer'>
          <a>Quản lý tồn kho</a>
        </div>
      </Link>
      <Accordion title='Thống kê báo cáo' id='report' headingId='reportHeading'>
        <Link href='/admin/report'>
          <div className='flex items-center w-full h-[60px] text-black text-sm px-5 hover:text-primary_blue cursor-pointer'>
            <a>Báo cáo tổng quan</a>
          </div>
        </Link>
        <Link href='/admin/sale-report'>
          <div className='flex items-center w-full h-[60px] text-black text-sm px-5 hover:text-primary_blue cursor-pointer'>
            <a>Báo cáo bán hàng</a>
          </div>
        </Link>
        <Link href='/admin/product-report'>
          <div className='flex items-center w-full h-[60px] text-black text-sm px-5 hover:text-primary_blue cursor-pointer'>
            <a>Báo cáo bán hàng theo sản phẩm</a>
          </div>
        </Link>
        <Link href='/admin/customer-report'>
          <div className='flex items-center w-full h-[60px] text-black text-sm px-5 hover:text-primary_blue cursor-pointer'>
            <a>Báo cáo khách hàng</a>
          </div>
        </Link>
        <Link href='/admin/instoke-report'>
          <div className='flex items-center w-full h-[60px] text-black text-sm px-5 hover:text-primary_blue cursor-pointer'>
            <a>Báo cáo tồn kho</a>
          </div>
        </Link>
      </Accordion>
    </div>
  );
};

function Accordion({ children, title, id, headingId }) {
  return (
    <div className='accordion' id='accordionExample'>
      <h2 className='accordion-header mb-0' id={headingId}>
        <button
          className='
        accordion-button
        relative
        flex
        items-center
        w-full
        h-[60px]
        px-5
        text-base text-black text-left
        border-0
        rounded-none
        transition
        focus:outline-none
      '
          type='button'
          data-bs-toggle='collapse'
          data-bs-target={`#${id}`}
          aria-expanded='true'
          aria-controls={id}
        >
          {title}
        </button>
      </h2>
      <div
        id={id}
        className='accordion-collapse collapse show'
        aria-labelledby={headingId}
        data-bs-parent='#accordionExample'
      >
        <div className='accordion-body px-5 border-b'>{children}</div>
      </div>
    </div>
  );
}

export default SideBar;

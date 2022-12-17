import React from 'react';
import Link from 'next/link';

const SideBar = () => {
  return (
    <div className='bg-white shadow-sm min-h-screen h-full text-sm font-medium'>
      <Link href='/admin'>
        <a className='text-center block uppercase text-black font-bold text-xl px-10 py-5'>
          Fasrevo
        </a>
      </Link>
      <LinkItem href='/admin'>Trang chủ</LinkItem>
      <Accordion
        title='Quản lý khách hàng'
        id='customer'
        headingId='customerHeading'
      >
        <LinkItem href='/admin/customer'>Tổng quan khách hàng</LinkItem>
        <LinkItem href='/admin/point'>Quản lý tích điểm</LinkItem>
      </Accordion>
      <Accordion title='Quản lý bán hàng' id='order' headingId='orderHeading'>
        <LinkItem href='/admin/order'>Quản lý đơn hàng</LinkItem>
        <LinkItem href='/admin/product'>Quản lý sản phẩm</LinkItem>
        <LinkItem href='/admin/voucher'>
          Quản lý chương trình khuyến mại
        </LinkItem>
      </Accordion>
      <LinkItem href='/admin/inventory'>Quản lý tồn kho</LinkItem>
      <Accordion title='Thống kê báo cáo' id='report' headingId='reportHeading'>
        <LinkItem href='/admin/report'>Báo cáo tổng quan</LinkItem>
        <LinkItem href='/admin/sale-report'>Báo cáo bán hàng</LinkItem>
        <LinkItem href='/admin/product-report'>
          Báo cáo bán hàng theo sản phẩm
        </LinkItem>
        <LinkItem href='/admin/customer-report'>Báo cáo khách hàng</LinkItem>
        <LinkItem href='/admin/instoke-report'>Báo cáo tồn kho</LinkItem>
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
        text-black text-left
        border-0
        rounded-none
        transition
        focus:outline-none
      '
          type='button'
          data-bs-toggle='collapse'
          data-bs-target={`#${id}`}
          aria-expanded='false'
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
        <div className='accordion-body px-5 border-b font-normal'>
          {children}
        </div>
      </div>
    </div>
  );
}

function LinkItem({ children, href }) {
  return (
    <Link href={href}>
      <div className='flex items-center w-full h-[60px] text-black px-5 hover:text-primary_blue cursor-pointer'>
        <a>{children}</a>
      </div>
    </Link>
  );
}

export default SideBar;

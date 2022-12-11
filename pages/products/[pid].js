import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';
import Main from '../../src/layout/Main';
import Section from '../../src/layout/Section';
import Button from '../../src/components/Button';
import { productDetail } from '../../src/constants/constants';

const ProductDetails = () => {
  const [product, setProduct] = useState();
  const [productDetails, setProductDetails] = useState();
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  const { pid } = router.query;

  useEffect(() => {
    if (pid) {
      axios.get(`${productDetail.getProductDetail(pid)}`).then((res) => {
        setProduct(res.data.product);
        setProductDetails(res.data.productDetail);
      });
    }
  }, [pid]);

  const handleMinusQuantity = () => {
    if (quantity >= 2) {
      setQuantity(quantity - 1);
    }
  };

  const handlePlusQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <Main>
      <Section>
        <div className='flex items-center pt-10 pb-5 text-xs md:text-sm'>
          <Link href='/'>
            <a className='font-medium text-header pr-2 lg:pr-3'>Trang chủ</a>
          </Link>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-3 h-3 text-header'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M8.25 4.5l7.5 7.5-7.5 7.5'
            />
          </svg>
          <Link href='/collections'>
            <a className='font-medium px-2 lg:px-3 text-header'>
              Thời trang nam
            </a>
          </Link>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-3 h-3 text-header'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M8.25 4.5l7.5 7.5-7.5 7.5'
            />
          </svg>
          <Link href='/collections'>
            <a className='font-medium px-2 lg:px-3 text-header'>Top</a>
          </Link>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-3 h-3 text-header'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M8.25 4.5l7.5 7.5-7.5 7.5'
            />
          </svg>
          <Link href='/collections'>
            <a className='font-bold pl-2 lg:pl-3 text-primary_red'>
              Trouser Pant
            </a>
          </Link>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-6 gap-y-10 lg:gap-5 justify-between'>
          <div className='lg:col-span-2'>
            <div className='max-h-[870px]'>
              <picture>
                <img
                  src={product.image}
                  alt=''
                  className='w-full h-full object-cover'
                />
              </picture>
            </div>
          </div>
          <div className='hidden md:block invisible'></div>
          <div className='lg:col-span-3'>
            <div className='max-w-[500px]'>
              <p className='text-xs md:text-sm text-header pb-3'>Pants</p>
              <h2 className='text-3xl md:text-4xl font-medium pb-2'>
                {product.pname}
              </h2>
              <div className='flex items-center pb-5'>
                <span
                  className={`${
                    product.isDiscount === 1
                      ? 'text-sm md:text-base line-through text-header'
                      : 'text-base md:text-lg font-medium text-primary_red'
                  }  mr-4`}
                >
                  {product.cost}
                </span>
                <span className='text-base md:text-lg font-medium text-primary_red'>
                  {product.discount}
                </span>
              </div>
              <p className='pb-5 text-sm md:text-base'>
                {productDetails.description}
              </p>
              <div className='w-1/2 mb-5'>
                <label htmlFor='color' className='text-sm font-medium'>
                  Màu sắc
                </label>
                <select
                  name='color'
                  id='color'
                  className='w-full h-10 px-5 text-sm text-secondary_text outline-none border border-border_input'
                  defaultValue={0}
                >
                  <option value={0}>Đen</option>
                  <option value={1}>Trắng</option>
                  <option value={2}>Nâu</option>
                  <option value={3}>Xám</option>
                </select>
              </div>
              <div className='w-1/2 mb-5'>
                <label htmlFor='sex' className='text-sm font-medium'>
                  Kích cỡ
                </label>
                <select
                  name='size'
                  id='size'
                  className='w-full h-10 px-5 text-sm text-secondary_text outline-none border border-border_input'
                  defaultValue={0}
                >
                  <option value={0}>S</option>
                  <option value={1}>M</option>
                  <option value={2}>L</option>
                  <option value={3}>XL</option>
                </select>
              </div>
              <div className='mb-5'>
                <label className='text-sm font-medium'>Số lượng</label>
                <div className='flex justify-between text-header w-40 border border-border_input h-10 px-3'>
                  <button onClick={handleMinusQuantity}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-6 h-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M18 12H6'
                      />
                    </svg>
                  </button>
                  <span className='flex items-center'>{quantity}</span>
                  <button onClick={handlePlusQuantity}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-6 h-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M12 6v12m6-6H6'
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <Button>Thêm vào giỏ hàng</Button>
              <div className='mt-10'>
                <p className='font-medium text-base md:text-lg pb-2'>
                  Chi tiết sản phẩm
                </p>
                <p className='text-sm md:text-base pb-1'>
                  Mã sản phẩm: {product.pid}
                </p>
                <p className='text-sm md:text-base pb-1'>
                  Nguồn gốc: {productDetail.origin}
                </p>
                <p className='text-sm md:text-base pb-1'>
                  Chất liệu: {productDetail.texture}
                </p>
                <p className='text-sm md:text-base pb-1'>
                  Chi tiết nhỏ: {productDetail.small_detail}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Main>
  );
};

export default ProductDetails;

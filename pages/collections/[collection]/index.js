import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import Card from '../../../src/components/Card';
import Main from '../../../src/layout/Main';
import Section from '../../../src/layout/Section';
import ReactPaginate from 'react-paginate';
import { searchItem } from '../../../src/constants/constants';
import Button from '../../../src/components/Button';
import Checkbox from '../../../src/components/Checkbox';

const itemsPerPage = 10;
const CollectionDetails = () => {
  const [collection, setCollection] = useState([]);
  const [page, setPage] = useState(1);
  const [itemOffset, setItemOffset] = useState(0);
  const [showFilter, setShowFilter] = useState(false);
  useEffect(() => {
    axios
      .get(searchItem.getCollection(page, 1))
      .then((resp) => {
        setCollection(resp.data);
      })
      .catch((e) => {});
  }, [page]);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = collection.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(collection.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % collection.length;
    setItemOffset(newOffset);
    setPage(event.selected + 1);
    window.scrollTo(0, 0);
  };

  const handleShowFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <Main transparent={true}>
      <div className='w-full max-w-[1920px] mx-auto h-screen max-h-[350px] relative'>
        <picture>
          <img
            src='/images/banner4.webp'
            alt=''
            className='w-full h-full object-cover'
          />
        </picture>
        <div className='absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center flex-col px-5'>
          <h1 className='text-white text-3xl lg:text-4xl xl:text-5xl uppercase text-center font-bold pb-5'>
            Bennet collection
          </h1>
          <p className='text-white text-center text-sm lg:text-lg'>
            Để không ai có thể thay thế, bạn phải luôn luôn khác biệt
          </p>
        </div>
      </div>
      <Section>
        <div className='pb-5'>
          <button className='font-medium' onClick={handleShowFilter}>
            Bộ lọc
          </button>
          <div
            className={`fixed left-0 top-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] z-10 ${
              showFilter ? 'block' : 'hidden'
            }`}
          >
            <div className='max-w-[500px] w-full h-full bg-slate-50 overflow-scroll p-5'>
              <div className='p-5 w-full flex justify-between items-center border-b-border_input border-b'>
                <h2 className='font-medium text-xl'>Bộ lọc</h2>
                <button onClick={handleShowFilter}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-5 h-5'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </div>
              <div className='p-5 w-full border-b-border_input border-b'>
                <h3 className='pb-5 font-medium'>Bộ sưu tập</h3>
                <Checkbox name='kyle' label='Kyle' />
                <Checkbox name='felix' label='Felix' />
                <Checkbox name='casmere' label='Casmere' />
              </div>
              <div className='p-5 w-full border-b-border_input border-b'>
                <h3 className='pb-5 font-medium'>Màu sắc</h3>
                <Checkbox name='black' label='Đen' />
                <Checkbox name='white' label='Trắng' />
                <Checkbox name='pink' label='Hồng' />
              </div>
              <div className='p-5 w-full border-b-border_input border-b'>
                <h3 className='pb-5 font-medium'>Kích cỡ</h3>
                <Checkbox name='s' label='S' />
                <Checkbox name='m' label='M' />
                <Checkbox name='l' label='L' />
                <Checkbox name='xl' label='XL' />
              </div>
              <Button>Xác nhận</Button>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10'>
          {collection &&
            currentItems.map(
              ({ pid, cost, discount, image, isDiscount, pname }, index) => (
                <Card
                  key={index}
                  id={pid}
                  title={pname}
                  image={image}
                  basePrice={cost}
                  discount={isDiscount}
                  specialPrice={discount}
                />
              )
            )}
        </div>
        <div className='mt-10 w-full select-none'>
          <ReactPaginate
            breakLabel='...'
            nextLabel={
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
                  d='M8.25 4.5l7.5 7.5-7.5 7.5'
                />
              </svg>
            }
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel={
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
                  d='M15.75 19.5L8.25 12l7.5-7.5'
                />
              </svg>
            }
            renderOnZeroPageCount={null}
            className='pagination'
          />
        </div>
      </Section>
    </Main>
  );
};

export default CollectionDetails;

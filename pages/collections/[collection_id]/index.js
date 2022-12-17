import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import Card from '../../../src/components/Card';
import Main from '../../../src/layout/Main';
import Section from '../../../src/layout/Section';
import ReactPaginate from 'react-paginate';
import { collections, searchItem } from '../../../src/constants/constants';
import Button from '../../../src/components/Button';
import Checkbox from '../../../src/components/Checkbox';
import { useRouter } from 'next/router';
import SectionHeading from '../../../src/components/SectionHeading';
import Link from 'next/link';

const itemsPerPage = 20;
const CollectionDetails = () => {
  const [collection, setCollection] = useState([]);
  const [collectionDetails, setCollectionDetails] = useState();
  const [page, setPage] = useState(1);
  const [itemOffset, setItemOffset] = useState(0);
  const [showFilter, setShowFilter] = useState(false);
  const router = useRouter();
  const { collection_id } = router.query;

  useEffect(() => {
    axios
      .get(collections.getCollectionDetails(collection_id))
      .then((resp) => {
        setCollectionDetails(resp.data.collections[0]);
      })
      .catch((e) => {});
  }, [collection_id]);

  useEffect(() => {
    axios
      .get(searchItem.getCollection(page, collection_id))
      .then((resp) => {
        setCollection(resp.data);
      })
      .catch((e) => {});
  }, [page, collection_id]);

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
            <a className='font-medium px-2 lg:px-3 text-header'>Bộ sưu tập</a>
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
          <Link href={`/collections/${collectionDetails?.collection_id}`}>
            <a className='font-bold pl-2 lg:pl-3 text-primary_red'>
              {collectionDetails?.collection_name || 'Unknown'}
            </a>
          </Link>
        </div>
        <SectionHeading>
          {collectionDetails?.collection_name || 'Unknown'}
        </SectionHeading>
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
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10'>
          {collection &&
            currentItems.map(
              ({ pid, cost, discount, image, isDiscount, pname }, index) => (
                <Card
                  key={index}
                  id={pid}
                  title={pname}
                  image={image}
                  basePrice={cost}
                  isDiscount={isDiscount}
                  specialPrice={discount}
                  discount={discount}
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

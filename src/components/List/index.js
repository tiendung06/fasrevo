import React, { useEffect, useState } from 'react';
import Card from '../Card';
import ReactPaginate from 'react-paginate';

const itemsPerPage = 20;
const List = ({ productItems }) => {
  const [page, setPage] = useState(1);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = productItems.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(productItems.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % collection.length;
    setItemOffset(newOffset);
    setPage(event.selected + 1);
  };

  return (
    <div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10'>
        {productItems &&
          currentItems.map(
            ({ pid, cost, discount, image, isDiscount, pname }, index) => (
              <Card
                key={pid}
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
  );
};

export default List;

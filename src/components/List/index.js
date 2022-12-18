import React, { useEffect, useState } from 'react';
import Card from '../Card';
import ReactPaginate from 'react-paginate';
import Filter from '../Filter';
import { getImageUrl } from '../../helpers';

const List = ({ productItems, reload, totalPageNumber }) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const handlePageClick = (event) => {
    const pageNumber = event.selected + 1;
    setPage(pageNumber);
    reload(pageNumber);
  };

  return (
    <div>
      <Filter></Filter>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10">
        {productItems &&
          productItems.map(
            ({ pid, cost, discount, image, isDiscount, pname }, index) => (
              <Card
                key={pid}
                id={pid}
                title={pname}
                image={getImageUrl(image)}
                basePrice={cost}
                discount={isDiscount}
                specialPrice={discount}
              />
            )
          )}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel={
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
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={totalPageNumber}
        previousLabel={
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
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        }
        renderOnZeroPageCount={null}
        className="pagination"
      />
    </div>
  );
};

export default List;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import useDebounce from '../../hooks/useDebounce';
import Card from '../../src/components/Card';
import SectionHeading from '../../src/components/SectionHeading';
import { searchItem } from '../../src/constants/constants';
import Main from '../../src/layout/Main';
import Section from '../../src/layout/Section';
import styles from './search.module.scss';

const itemsPerPage = 20;
const Search = () => {
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(1);
  const filterDebounce = useDebounce(filter);
  const [url, setUrl] = useState(
    searchItem.getSearchByName(page, filterDebounce)
  );
  const [itemOffset, setItemOffset] = useState(0);
  const [item, setItem] = useState([]);

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    if (filterDebounce) {
      setUrl(searchItem.getSearchByName(page, filterDebounce));
    }
  }, [filterDebounce, page]);

  useEffect(() => {
    if (filterDebounce !== '') {
      axios
        .get(url)
        .then((resp) => {
          setItem(resp.data);
        })
        .catch((e) => {});
    } else {
      setItem([]);
    }
  }, [url, filterDebounce]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = item.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(item.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % item.length;
    setItemOffset(newOffset);
    setPage(event.selected + 1);
  };

  return (
    <Main>
      <Section>
        <div className={`${styles.search} w-full h-full py-10`}>
          <SectionHeading>Tìm kiếm</SectionHeading>
          <div className='w-full mb-10'>
            <input
              type='text'
              className='w-full h-10 text-header outline-none border-b border-b-[rgb(0,0,0,0.12)] mb-3'
              placeholder='Nhập từ khóa tìm kiếm'
              onChange={handleSearchChange}
              value={filter}
            />
            {item.length > 0 ? (
              <span className='text-sm'>{item.length} kết quả</span>
            ) : null}
          </div>
          {filter !== '' && item.length === 0 ? (
            <div className=''>
              <h2 className='text-2xl font-bold text-center mb-5'>
                Không có kết quả
              </h2>
              <p className='text-center'>
                Không tìm thấy kết quả tìm kiếm cho &ldquo;{filter}&rdquo;
              </p>
            </div>
          ) : (
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10'>
              {item &&
                currentItems.map(
                  (
                    { pid, cost, discount, image, isDiscount, pname },
                    index
                  ) => (
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
          )}
        </div>
        <div className=' w-full select-none'>
          <ReactPaginate
            breakLabel='...'
            nextLabel={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-4 h-4'
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
                className='w-4 h-4'
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

export default Search;

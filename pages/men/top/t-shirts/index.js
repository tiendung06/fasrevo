import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import Main from '../../../../src/layout/Main';
import Section from '../../../../src/layout/Section';
import SectionHeading from '../../../../src/components/SectionHeading';
import Link from 'next/link';
import List from '../../../../src/components/List';
import { searchItem } from '../../../../src/constants/constants';

const TShirts = () => {
  const [tShirts, setTShirts] = useState([]);
  const [totalPageNumber, setTotalPageNumber] = useState(1);

  useEffect(() => {
    init();
  }, []);

  const init = (pageNumber = 1) => {
    axios
      .get(searchItem.getSearchByCdid(pageNumber, 2, 1))
      .then((resp) => {
        setTShirts(resp.data.products);
        setTotalPageNumber(resp.data.totalPageNumber);
      })
      .catch((e) => {});
  };

  return (
    <Main heading="Thời trang nam | Áo phông">
      <Section>
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
          <Link href="/men">
            <a className="font-medium px-2 lg:px-3 text-header">
              Thời trang nam
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
          <Link href="/men/top">
            <a className="font-medium px-2 lg:px-3 text-header">Top</a>
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
          <Link href="/men/top/t-shirts">
            <a className="font-bold pl-2 lg:pl-3 text-primary_red">Áo phông</a>
          </Link>
        </div>
        <SectionHeading>Áo phông</SectionHeading>
        <List
          productItems={tShirts}
          reload={(pageNumber) => init(pageNumber)}
          totalPageNumber={totalPageNumber}
        />
      </Section>
    </Main>
  );
};

export default TShirts;

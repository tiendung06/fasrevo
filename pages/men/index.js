import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import CategoryDetails from '../../src/components/CategoryDetails';
import List from '../../src/components/List';
import SectionHeading from '../../src/components/SectionHeading';
import { searchItem } from '../../src/constants/constants';
import Main from '../../src/layout/Main';
import Section from '../../src/layout/Section';

const Men = () => {
  const [men, setMen] = useState([]);
  const [totalPageNumber, setTotalPageNumber] = useState(1);

  useEffect(() => {
    init();
  }, []);

  const init = (pageNumber = 1) => {
    axios
      .get(searchItem.getSearchBySex(pageNumber, 1))
      .then((resp) => {
        setMen(resp.data.products);
        setTotalPageNumber(resp.data.totalPageNumber);
      })
      .catch((e) => {});
  };

  return (
    <Main>
      <Section>
        <div className="flex items-center pt-10 pb-5 text-xs md:text-sm">
          <Link href="/">
            <a className="font-medium text-header pr-2 lg:pr-3">Trang chủ</a>
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-3 h-3 text-header"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
          <Link href="/men">
            <a className="font-bold pl-2 lg:pl-3 text-primary_red">
              Thời trang nam
            </a>
          </Link>
        </div>
        <SectionHeading>Thời trang nam</SectionHeading>
        <div className="mb-10">
          <List
            productItems={men}
            reload={(pageNumber) => init(pageNumber)}
            totalPageNumber={totalPageNumber}
          />
        </div>
        <CategoryDetails />
      </Section>
    </Main>
  );
};

export default Men;

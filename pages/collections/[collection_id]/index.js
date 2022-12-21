import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import Main from '../../../src/layout/Main';
import Section from '../../../src/layout/Section';
import { collections, searchItem } from '../../../src/constants/constants';
import { useRouter } from 'next/router';
import SectionHeading from '../../../src/components/SectionHeading';
import Link from 'next/link';
import List from '../../../src/components/List';

const CollectionDetails = () => {
  const [collection, setCollection] = useState([]);
  const [collectionDetails, setCollectionDetails] = useState();
  const router = useRouter();
  const { collection_id } = router.query;
  const [totalPageNumber, setTotalPageNumber] = useState(1);

  useEffect(() => {
    axios
      .get(collections.getCollectionDetails(collection_id))
      .then((resp) => {
        setCollectionDetails(resp.data.collections[0]);
      })
      .catch((e) => {});
  }, [collection_id]);

  useEffect(() => {
    init();
  }, [collection_id]);

  const init = (pageNumber = 1) => {
    axios
      .get(searchItem.getCollection(pageNumber, collection_id))
      .then((resp) => {
        setCollection(resp.data.products);
        setTotalPageNumber(resp.data.totalPageNumber);
      })
      .catch((e) => {});
  };
  console.log(collection);
  return (
    <Main heading={collectionDetails?.collection_name}>
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
          <Link href="/collections">
            <a className="font-medium px-2 lg:px-3 text-header">Bộ sưu tập</a>
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
          <Link href={`/collections/${collectionDetails?.collection_id}`}>
            <a className="font-bold pl-2 lg:pl-3 text-primary_red">
              {collectionDetails?.collection_name || 'Unknown'}
            </a>
          </Link>
        </div>
        <SectionHeading>
          {collectionDetails?.collection_name || 'Unknown'}
        </SectionHeading>
        <List
          productItems={collection}
          reload={(pageNumber) => init(pageNumber)}
          totalPageNumber={totalPageNumber}
        />
      </Section>
    </Main>
  );
};

export default CollectionDetails;

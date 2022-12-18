import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import SectionHeading from '../../src/components/SectionHeading';
import Main from '../../src/layout/Main';
import Section from '../../src/layout/Section';
import Aos from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import { collections } from '../../src/constants/constants';
import { getImageUrl } from '../../src/helpers';

const Collections = () => {
  const [collection, setCollection] = useState();

  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    axios.get(`${collections.getAllCollections()}`).then((res) => {
      setCollection(res.data.collections);
    });
  }, []);

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
            <a className="font-bold pl-2 lg:pl-3 text-primary_red">
              Bộ sưu tập
            </a>
          </Link>
        </div>
        <SectionHeading>Bộ sưu tập</SectionHeading>
        <div className="grid gap-x-5 gap-y-10 grid-cols-1 md:grid-cols-2">
          {collection?.map(
            ({ collection_id, collection_name, collection_image }) => (
              <Link href={`/collections/${collection_id}`} key={collection_id}>
                <div
                  className="flex flex-col min-h-[260px] md:min-h-[475px] hover:text-primary_red cursor-pointer"
                  data-aos="fade-up"
                >
                  <div className="h-full">
                    <picture>
                      <img
                        src={getImageUrl(collection_image)}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </picture>
                  </div>
                  <p className="font-medium uppercase text-sm md:text-base pt-4 md:pt-5 text-center transition-all">
                    {collection_name}
                  </p>
                </div>
              </Link>
            )
          )}
        </div>
      </Section>
    </Main>
  );
};

export default Collections;

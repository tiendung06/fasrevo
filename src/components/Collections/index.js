import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { collections } from '../../constants/constants';
import { getImageUrl } from '../../helpers';
import Section from '../../layout/Section';
import SectionHeading from '../SectionHeading';
import styles from './collections.module.scss';

const Collections = () => {
  const [collection, setCollection] = useState();

  useEffect(() => {
    axios.get(`${collections.getAllCollections()}`).then((res) => {
      setCollection(res.data.collections);
    });
  }, []);

  return (
    <Section>
      <SectionHeading path={'/collections'}>Bộ sưu tập</SectionHeading>
      <div className="grid gap-x-5 gap-y-5 md:gap-y-10 grid-cols-2 lg:grid-cols-4">
        {collection
          ?.slice(0, 5)
          .map(({ collection_id, collection_image, collection_name }) => (
            <Link href={`/collections/${collection_id}`} key={collection_id}>
              <div
                className={`${styles.collection} flex flex-col min-h-[260px] md:min-h-[300px] hover:text-primary_red cursor-pointer`}
              >
                <div className="h-full overflow-hidden">
                  <picture>
                    <img
                      src={getImageUrl(collection_image)}
                      alt={collection_name}
                      className="w-full h-full object-cover transition-all"
                    />
                  </picture>
                </div>
                <div className="">
                  <p className="font-medium uppercase text-sm md:text-base pt-4 md:pt-5 text-center transition-all">
                    {collection_name}
                  </p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </Section>
  );
};

export default Collections;

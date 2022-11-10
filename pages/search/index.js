import React from 'react';
import SectionHeading from '../../src/components/SectionHeading';
import Main from '../../src/layout/Main';
import Section from '../../src/layout/Section';
import styles from './search.module.scss';

const Search = () => {
  return (
    <Main>
      <Section>
        <div className={`${styles.search} w-full h-full py-10`}>
          <SectionHeading>Tìm kiếm</SectionHeading>
          <div className='w-full h-10'>
            <input
              type='text'
              className='w-full h-full text-header outline-none border-b border-b-[rgb(0,0,0,0.12)]'
              placeholder='Nhập để tìm kiếm'
            />
          </div>
        </div>
      </Section>
    </Main>
  );
};

export default Search;

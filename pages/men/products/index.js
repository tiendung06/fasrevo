import React from 'react';
import Main from '../../../src/layout/Main';
import Section from '../../../src/layout/Section';
import { navMen } from '../../../src/constants/nav.js';
import Card from '../../../src/components/Card';

const Products = () => {
  return (
    <Main navType={navMen}>
      <Section>
        <div className='w-full py-5'>
          <h1 className='text-2xl font-bold'>Tất cả sản phẩm</h1>
        </div>
        <div className='flex w-full py-5'>
          {/* <div className='w-80 h-full'>
            <h2 className='text-xl font-bold'>Bộ lọc</h2>
          </div> */}
          <div className='grid grid-cols-3 gap-5 px-5'>
            {Array(8)
              .fill()
              .map((item, index) => (
                <Card key={index} />
              ))}
          </div>
        </div>
      </Section>
    </Main>
  );
};

export default Products;

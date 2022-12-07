import React from 'react';
import Card from '../../../src/components/Card';
import Main from '../../../src/layout/Main';
import Section from '../../../src/layout/Section';

const CollectionDetails = () => {
  return (
    <Main transparent={true}>
      <div className='w-full max-w-[1920px] mx-auto h-screen max-h-[550px] relative'>
        <picture>
          <img
            src='/images/banner4.webp'
            alt=''
            className='w-full h-full object-cover'
          />
        </picture>
        <div className='absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center flex-col px-5'>
          <h1 className='text-white text-3xl lg:text-4xl xl:text-5xl uppercase text-center font-bold pb-5'>
            Bennet collection
          </h1>
          <p className='text-white text-center text-sm lg:text-lg'>
            Để không ai có thể thay thế, bạn phải luôn luôn khác biệt
          </p>
        </div>
      </div>
      <Section>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
          {Array(12)
            .fill()
            .map((item, index) => (
              <Card key={index} />
            ))}
        </div>
      </Section>
    </Main>
  );
};

export default CollectionDetails;

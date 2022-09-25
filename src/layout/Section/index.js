import React from 'react';

const Section = ({ children, title }) => {
  return (
    <section section className='w-full lg:my-10 lg:px-10 px-5 my-5'>
      <h1 className='text-center text-xl font-bold uppercase text-black py-5 sm:py-10'>
        {title}
      </h1>
      {children}
    </section>
  );
};

export default Section;

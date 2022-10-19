import React from 'react';

const Section = ({ children }) => {
  return (
    <section className='w-full max-w-[1920px] mx-auto my-20 xl:px-32 px-5 lg:px-10'>
      {children}
    </section>
  );
};

export default Section;

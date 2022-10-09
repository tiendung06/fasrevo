import React from 'react';

const Section = ({ children }) => {
  return (
    <section className='w-full max-w-[1920px] mx-auto mt-[70px] xl:px-32 px-5 md:px-10'>
      {children}
    </section>
  );
};

export default Section;

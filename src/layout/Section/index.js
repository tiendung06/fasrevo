import React from 'react';

const Section = ({ children }) => {
  return (
    <section className='w-full container mx-auto my-20 md:px-10 px-5'>
      {children}
    </section>
  );
};

export default Section;

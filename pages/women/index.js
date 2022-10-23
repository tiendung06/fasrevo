import React from 'react';
import Banner from '../../src/components/Banner';
import Collections from '../../src/components/Collections';
import FeaturedProduct from '../../src/components/FeaturedProduct';
import Main from '../../src/layout/Main';
import { navWomen } from '../../src/constants/nav.js';

const Women = () => {
  return (
    <Main navType={navWomen}>
      <Banner></Banner>
      <Collections></Collections>
      <FeaturedProduct></FeaturedProduct>
    </Main>
  );
};

export default Women;

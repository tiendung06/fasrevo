import React from 'react';
import Banner from '../../src/components/Banner';
import Collections from '../../src/components/Collections';
import FeaturedProduct from '../../src/components/FeaturedProduct';
import Main from '../../src/layout/Main';
import { navMen } from '../../src/constants/nav.js';
import Video from '../../src/components/Video';

const Men = () => {
  return (
    <Main navType={navMen}>
      <Banner></Banner>
      <Collections></Collections>
      <Video></Video>
      <FeaturedProduct></FeaturedProduct>
    </Main>
  );
};

export default Men;

import React from 'react';
import Banner from '../src/components/Banner';
import Main from '../src/layout/Main';
import FeaturedProduct from '../src/components/FeaturedProduct';
import Category from '../src/components/Category';
import Video from '../src/components/Video';

export default function Home() {
  return (
    <div>
      <Main transparent={true}>
        <Banner></Banner>
        <Category></Category>
        <Video></Video>
        <FeaturedProduct></FeaturedProduct>
      </Main>
    </div>
  );
}

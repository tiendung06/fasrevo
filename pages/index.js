<<<<<<< HEAD
import React from 'react';
import Banner from '../src/components/Banner';
=======
import Banner from '../src/components/Banner';
import Collections from '../src/components/Collections';
import FeaturedProduct from '../src/components/FeaturedProduct';
>>>>>>> origin/backend
import Main from '../src/layout/Main';
import FeaturedProduct from '../src/components/FeaturedProduct';
import Category from '../src/components/Category';
import Video from '../src/components/Video';

export default function Home() {
  return (
    <div>
<<<<<<< HEAD
      <Main transparent={true}>
        <Banner></Banner>
        <Category></Category>
        <Video></Video>
=======
      <Main>
        <Banner></Banner>
        <Collections></Collections>
>>>>>>> origin/backend
        <FeaturedProduct></FeaturedProduct>
      </Main>
    </div>
  );
}

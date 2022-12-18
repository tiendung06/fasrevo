import React from 'react';
import Banner from '../src/components/Banner';
import Main from '../src/layout/Main';
import FeaturedProduct from '../src/components/FeaturedProduct';
import Category from '../src/components/Category';
import Collections from '../src/components/Collections';
import { useSelector } from 'react-redux';

export default function Home() {
  const { user, authenticated } = useSelector((state) => state.auth);

  if (user && authenticated && user.role === 1) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="w-10 h-10 rounded-full border-4 border-primary_red border-t-transparent border-t-4 mx-auto animate-spin"></div>
      </div>
    );
  }

  return (
    <div>
      <Main transparent={true}>
        <Banner></Banner>
        <Category></Category>
        <FeaturedProduct></FeaturedProduct>
        <Collections></Collections>
      </Main>
    </div>
  );
}

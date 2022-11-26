import React from "react";
import Banner from "../src/components/Banner";
import Main from "../src/layout/Main";
import FeaturedProduct from "../src/components/FeaturedProduct";
import Category from "../src/components/Category";
import Collections from "../src/components/Collections";

export default function Home() {
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

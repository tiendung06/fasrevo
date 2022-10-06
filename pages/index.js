import Banner from '../src/components/Banner';
import Collections from '../src/components/Collections';
import FeaturedProduct from '../src/components/FeaturedProduct';
import Main from '../src/layout/Main';

export default function Home() {
  return (
    <div>
      <Main>
        <Banner></Banner>
        <Collections></Collections>
        <FeaturedProduct></FeaturedProduct>
      </Main>
    </div>
  );
}

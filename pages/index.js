import Banner from '../src/components/Banner';
import Collections from '../src/components/Collections';
import FeaturedProduct from '../src/components/FeaturedProduct';
import List from '../src/components/List';
import Main from '../src/layout/Main';
import Section from '../src/layout/Section';

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

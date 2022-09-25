import Banner from '../src/components/Banner';
import Collections from '../src/components/Collections';
import List from '../src/components/List';
import Main from '../src/layout/Main';
import Section from '../src/layout/Section';

export default function Home() {
  return (
    <div>
      <Main>
        <Banner></Banner>
        <Collections></Collections>
        <Section title='Sản phẩm bán chạy'>
          <List></List>
        </Section>
      </Main>
    </div>
  );
}

import React from 'react';
import List from '../../src/components/List';
import Main from '../../src/layout/Main';
import Section from '../../src/layout/Section';

const Products = () => {
  return (
    <Main heading='Sản phẩm'>
      <Section title='Tất cả sản phẩm'>
        <List></List>
      </Section>
    </Main>
  );
};

export default Products;

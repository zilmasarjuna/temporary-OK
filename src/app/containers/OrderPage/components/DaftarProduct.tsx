import React from 'react';
import styled from 'styled-components/macro';
import Card from 'app/components/Card';

import ItemProduct from './ItemProduct';

import { SubTitle } from './P';

const Wrapper = styled.div`
  margin-top: -20px;
`;

const DaftarProduct = () => {
  return (
    <Card>
      <Wrapper>
        <SubTitle>Daftar Produk</SubTitle>

        <ItemProduct />
        <ItemProduct />
        <ItemProduct />
      </Wrapper>
    </Card>
  );
};

export default DaftarProduct;

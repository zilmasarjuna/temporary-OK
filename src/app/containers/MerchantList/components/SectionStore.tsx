import React from 'react';
import styled from 'styled-components/macro';

import StoreItem from './StoreItem';

const Wrapper = styled.div``;
const Title = styled.h2`
  font-family: OpenSans-Bold;
  font-size: 1.28rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #273d52;
  margin-bottom: 20px;
`;

const WrapperItem = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const SectionStores = () => {
  return (
    <Wrapper>
      <Title>Toko Terdekat di Lokasi Anda</Title>
      <WrapperItem>
        <StoreItem />
        <StoreItem />
        <StoreItem />
      </WrapperItem>
    </Wrapper>
  );
};

export default SectionStores;

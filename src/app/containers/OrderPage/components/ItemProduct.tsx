import React from 'react';
import styled from 'styled-components/macro';
import StoreIcon from 'app/assets/icon-bg-merchant.svg';

import AddItem from './AddItem';

const Wrapper = styled.div`
  border-bottom: 1px solid #eee;
  display: flex;
  padding: 16px 0 21px;
`;

const WrapImg = styled.div`
  flex: 0 0 14%;
`;

const WrapDetail = styled.div`
  flex: 0 0 86%;

  h5 {
    margin: 0;
    font-family: OpenSans-Regular;
    font-size: 1.14rem;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #273d52;
  }

  p {
    font-family: OpenSans-Regular;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    color: #878b8f;
    margin: 3px 0;
    width: 278px;
  }
`;

const WrapperPrice = styled.div`
  display: flex;
  align-items: baseline;
  margin-top: 24px;
`;

const Price = styled.div`
  font-family: OpenSans-Bold;
  font-size: 1.14rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #056eb5;
  flex: 0 0 70%;
  max-width: 70%;
`;

const ItemProduct = () => {
  return (
    <Wrapper>
      <WrapImg>
        <img src={StoreIcon} alt="icon-store" />
      </WrapImg>
      <WrapDetail>
        <h5>Indomie Mie Goreng 65 gr (Paket @10 bks)</h5>
        <WrapperPrice>
          <Price>Rp. 20.000</Price>
          <AddItem count={1} />
        </WrapperPrice>
      </WrapDetail>
    </Wrapper>
  );
};

export default ItemProduct;

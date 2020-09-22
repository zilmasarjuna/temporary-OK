import React from 'react';
import styled from 'styled-components/macro';
import Card from 'app/components/Card';

import IconBack from 'app/assets/icon-back.svg';
import StoreIcon from 'app/assets/icon-bg-merchant.svg';

import { SubTitle } from './P';

const Wrapper = styled.div`
  margin-bottom: 8px;
`;

const Title = styled.div`
  display: flex;
  font-family: OpenSans-Bold;
  font-size: 1.71rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #273d52;
  margin-bottom: 20px;

  button {
    background: none;
    border: none;
  }
`;
const WrapperDetail = styled.div`
  display: flex;
`;
const WrapImg = styled.div`
  flex: 0 0 14%;
`;

const WrapDetail = styled.div`
  flex: 0 0 81%;

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
  }
`;

const DetailMerchant = () => {
  return (
    <Wrapper>
      <Card>
        <Title>
          <button type="button" onClick={() => console.log('back')}>
            <img src={IconBack} alt="icon-back" />
          </button>
          Detail Pesanan
        </Title>
        <SubTitle>Alamat Toko</SubTitle>
        <WrapperDetail>
          <WrapImg>
            <img src={StoreIcon} alt="store-back" />
          </WrapImg>
          <WrapDetail>
            <h5>Toko Reksa Jaya</h5>
            <p>
              Jl. Soka No.10, RT 05 / RW 01, Tebet, Jakarta Selatan, DKI
              Jakarta, 12880
            </p>
            <p>MID: 09929002</p>
          </WrapDetail>
        </WrapperDetail>
      </Card>
    </Wrapper>
  );
};

export default DetailMerchant;

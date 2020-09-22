import React from 'react';
import styled from 'styled-components/macro';

import Card from 'app/components/Card';

import { SubTitle } from './P';

const Wrapper = styled.div`
  margin: -20px;
`;

const TotalPesanan = styled.div`
  display: flex;
  align-items: baseline;

  h4 {
    font-family: OpenSans-SemiBold;
    font-size: 1rem;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #273d52;
    flex: 0 0 50%;
  }

  p {
    font-family: OpenSans-Bold;
    font-size: 1.28rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #056eb5;
    text-align: right;
    flex: 0 0 50%;
    justice-content: right;
  }
`;

const Button = styled.button`
  border: none;
  width: 100%;
  color: #056eb5;
  font-family: OpenSans-Bold;
  font-size: 1rem;
  padding: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  border-radius: 8px;
  background-color: #056eb5;

  &:focus {
    outline: none;
    border: none;
  }
`;

const TotalOrder = () => {
  return (
    <Card>
      <Wrapper>
        <SubTitle>Ringkasan Belanja</SubTitle>
        <TotalPesanan>
          <h4>Total Pesanan</h4>
          <p>Rp 320.000</p>
        </TotalPesanan>
        <Button>Lanjutkan</Button>
      </Wrapper>
    </Card>
  );
};

export default TotalOrder;

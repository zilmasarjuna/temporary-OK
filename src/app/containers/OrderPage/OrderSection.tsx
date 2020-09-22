import React from 'react';
import styled from 'styled-components';

import { Row } from 'app/components/Grid';

import DaftarProduct from './components/DaftarProduct';
import DetailMerchant from './components/DetailMerchant';
import TotalOrder from './components/TotalOrder';

const Wrapper = styled.div`
  margin: 40px auto;
  width: 930px;

  @media (max-width: 576px) {
    margin: 0;
    width: 100%;
  }
`;

const Col60 = styled.div`
  flex: 0 0 60%;
  max-width: 60%;
  margin-right: 20px;
`;

const Col40 = styled.div`
  flex: 0 0 40%;
  max-width: 40%;
`;

const OrderSection = () => {
  return (
    <Wrapper>
      <Row>
        <Col60>
          <DetailMerchant />
          <DaftarProduct />
        </Col60>
        <Col40>
          <TotalOrder />
        </Col40>
      </Row>
    </Wrapper>
  );
};

export default OrderSection;

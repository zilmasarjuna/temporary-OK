import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import StoreIcon from 'app/assets/icon-bg-merchant.svg';
import ArrowIcon from 'app/assets/icon-right-arrow.svg';

const Wrapper = styled.div`
  display: flex;
  border-radius: 12px;
  box-shadow: 0 2px 8px 0 rgba(39, 61, 82, 0.16);
  background-color: #ffffff;
  padding: 16px;
  margin-bottom: 16px;
`;

const WrapImg = styled.div`
  flex: 0 0 14%;
`;

const WrapDetail = styled.div`
  flex: 0 0 81%;

  h5 {
    font-family: OpenSans-SemiBold;
    font-size: 1.12rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #273d52;
    margin: 0;
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

const WrappIcon = styled.div`
  flex: 0 0 5%;

  img {
    margin-top: 23px;
  }
`;

const StoreItem = () => {
  return (
    <Wrapper>
      <WrapImg>
        <img src={StoreIcon} alt="store-back" />
      </WrapImg>
      <WrapDetail>
        <h5>Toko Reksa Jaya</h5>
        <p>
          Jl. Soka No.10, RT 05 / RW 01, Tebet, Jakarta Selatan, DKI Jakarta,
          12880
        </p>
      </WrapDetail>
      <WrappIcon>
        <Link to="/order-page/2">
          <img src={ArrowIcon} alt="arrow-right" />
        </Link>
      </WrappIcon>
    </Wrapper>
  );
};

export default StoreItem;

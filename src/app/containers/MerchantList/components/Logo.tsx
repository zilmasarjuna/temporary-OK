import React from 'react';
import styled from 'styled-components/macro';

import LogoOttopay from 'app/assets/icon-logo-ottopay.png';

const ImgLogo = styled.div`
  margin: 0 auto 36px;
  text-align: center;

  img {
    width: 64px;
  }
`;

const Logo = () => (
  <ImgLogo>
    <img src={LogoOttopay} alt="img-ottopay" />
  </ImgLogo>
);

export default Logo;

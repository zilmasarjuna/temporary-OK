import React from 'react';
import styled from 'styled-components';

import Card from 'app/components/Card';
import Logo from './components/Logo';
import SectionStore from './components/SectionStore';

const Wrapper = styled.div`
  margin: 60px auto;
  width: 640px;

  @media (max-width: 576px) {
    margin: 0;
    width: 100%;
  }
`;

const StoreList = () => {
  return (
    <Wrapper>
      <Card>
        <Logo />
        <SectionStore />
      </Card>
    </Wrapper>
  );
};

export default StoreList;

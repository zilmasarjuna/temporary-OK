import React from 'react';
import styled from 'styled-components';

import Card from 'app/components/Card';

import SearchGoogleMaps from './components/SearchGoogleMaps';
import Logo from './components/Logo';

const Wrapper = styled.div`
  margin: 60px auto;
  width: 480px;

  @media (max-width: 576px) {
    margin: 0;
    width: 100%;
  }
`;

const ChooseLocation = () => {
  return (
    <Wrapper>
      <Card>
        <Logo />
        <SearchGoogleMaps
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB7PkvwaFR1ci9-466iCFhejK8GzCV6hvw&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
        />
      </Card>
    </Wrapper>
  );
};

export default ChooseLocation;

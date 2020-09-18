import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import LogoOttopay from 'app/assets/icon-logo-ottopay.png';

import { Container, Row } from '../../Grid';

export const Wrapper = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #eee;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08);

  @media (max-width: 960px) {
    display: none;
  }
`;

const Logo = styled.div`
  display: block;
  flex: 0 0 50%;
  max-width: 50%;
`;

const NavigationWrapper = styled.div`
  display: block;
  flex: 0 0 50%;
`;

const Nav = styled.ul`
  float: right;
  list-style: none;
  display: inline;
  margin: 0;
`;

const NavItem = styled.li`
  margin-left: 20px;
  display: inline;
`;

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Logo>
            <img src={LogoOttopay} alt="logo-ottopay" />
          </Logo>
          <NavigationWrapper>
            <Nav>
              <NavItem>
                <Link to="/app">Bergabung Jadi Mitra</Link>
              </NavItem>
              <NavItem>
                <Link to="/app">Blog</Link>
              </NavItem>
            </Nav>
          </NavigationWrapper>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Header;

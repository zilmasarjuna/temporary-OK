import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import { Container, Row } from '../../Grid';

const Wrapper = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #eee;

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
          <Logo>Logo</Logo>
          <NavigationWrapper>
            <Nav>
              <NavItem>
                <Link to="">Bergabung Jadi Mitra</Link>
              </NavItem>
              <NavItem>
                <Link to="">Blog</Link>
              </NavItem>
            </Nav>
          </NavigationWrapper>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Header;

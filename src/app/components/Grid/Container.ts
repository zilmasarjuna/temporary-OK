import styled from 'styled-components/macro';

const Container = styled.div`
  width: 1140px;
  padding: 0 20px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: 960px;
  }

  @media (max-width: 992px) {
    width: 720px;
  }

  @media (max-width: 768px) {
    width: 540px;
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`;

export default Container;

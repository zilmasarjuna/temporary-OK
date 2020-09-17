import styled from 'styled-components/macro';

const Card = styled.div`
  border: 1px solid #eee;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.12);
  background-color: #ffffff;

  @media (max-width: 960px) {
    box-shadow: none;
    border-radius: 0;
    border: none;
  }
`;

export default Card;

import React from 'react';
import styled from 'styled-components/macro';

import AddIcon from 'app/assets/button-amount-min.svg';
import RemoveIcon from 'app/assets/button-amount-plus.svg';

const Wrapper = styled.div`
  flex: 0 0 30%;
  max-width: 30%;
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  &:focus {
    border: none;
    outline: none;
  }
`;

const ButtonAdd = styled(Button)`
  border-radius: 8px;
  padding: 10px;
  width: 100%;
  font-family: OpenSans-Bold;
  font-size: 0.86rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  background-color: #056eb5;
`;

const WrapperAddRemove = styled.div`
  display: flex;
  align-items: baseline;
`;

const ButtonIcon = styled(Button)`
  flex: 0 0 33%;
`;

const InfoCount = styled.div`
  flex: 0 0 33%;
  text-align: center;
  font-family: OpenSans-SemiBold;
  font-size: 1rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #273d52;
}
`;

const AddItem = ({ detail, addProduct }) => {
  if (detail.count) {
    return (
      <Wrapper>
        <WrapperAddRemove>
          <ButtonIcon onClick={() => addProduct(detail.id)}>
            <img src={AddIcon} alt="min" />
          </ButtonIcon>
          <InfoCount>{detail.count}</InfoCount>
          <ButtonIcon>
            <img src={RemoveIcon} alt="plus" />
          </ButtonIcon>
        </WrapperAddRemove>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <ButtonAdd onClick={() => addProduct(detail.id)}>Tambah</ButtonAdd>
    </Wrapper>
  );
};

export default AddItem;

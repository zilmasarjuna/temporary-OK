/* eslint-disable */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useInjectReducer } from 'utils/redux-injectors'

import { sliceKey, reducer, actions } from '../slice'

import { selectItem, selectUsername } from '../selectors';

import styled from 'styled-components/macro';
import Card from 'app/components/Card';

import ItemProduct from './ItemProduct';

import { SubTitle } from './P';

const Wrapper = styled.div`
  margin-top: -20px;
`;

const DaftarProduct = () => {
  const [ data, changeData ] = useState([{
      id: 1,
      product_name: 'Nama',
      count: 0
    },
    {
      id: 2,
      product_name: 'Nama',
      count: 0
    },
    {
      id: 3,
      product_name: 'Nama',
      count: 0
    },
  ])

  const addProduct = (id) => {
    let item = [...data]
    console.log('sda')
    item.forEach((key, index) => {
      if (key.id === id) {
        item[index].count += 1
      }
    })
    changeData(item)
  }

  return (
    <Card>
      <Wrapper>
        <SubTitle>Daftar Product</SubTitle>
        {data.map(item => (
          <ItemProduct 
            detail={item} 
            addProduct={addProduct}
            data={data}
          />
        ))}
      </Wrapper>
    </Card>
  );
};

export default DaftarProduct;

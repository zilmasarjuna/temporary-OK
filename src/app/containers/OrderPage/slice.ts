import { PayloadAction } from '@reduxjs/toolkit';
import { Item } from 'types/OrderPage';

import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

export const initialState: ContainerState = {
  item: [
    {
      id: 1,
      product_name: 'Nama',
      count: 1,
    },
    {
      id: 2,
      product_name: 'Nama',
      count: 0,
    },
    {
      id: 3,
      product_name: 'Nama',
      count: 3,
    },
  ],
};

let orderpageSlice = createSlice({
  name: 'orderpage',
  initialState,
  reducers: {
    changeItem(state, action: PayloadAction<Item[]>) {
      state.item = action.payload;
    },
  },
});

export let { actions, reducer, name: sliceKey } = orderpageSlice;

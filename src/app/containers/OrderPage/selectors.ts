import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';

import { initialState } from './slice';

const selectDomain = (state: RootState) => state.orderpage || initialState;

export let selectItem = createSelector(
  [selectDomain],
  OrderPageFromState => OrderPageFromState.item,
);

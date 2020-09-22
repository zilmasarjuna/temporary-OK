import React from 'react';
import { Helmet } from 'react-helmet-async';

import { Layout } from 'app/components/Layout';

import StoreList from './StoreList';

export function MerchantList() {
  return (
    <>
      <Helmet>
        <title>Merchant List</title>
        <meta name="description" content="Merchant List" />
      </Helmet>
      <Layout>
        <StoreList />
      </Layout>
    </>
  );
}

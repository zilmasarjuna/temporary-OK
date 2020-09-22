import React from 'react';
import { Helmet } from 'react-helmet-async';

import { Layout } from 'app/components/Layout';

import OrderSection from './OrderSection';

export function OrderPage() {
  return (
    <>
      <Helmet>
        <title>Order Page</title>
        <meta name="description" content="Order Page" />
      </Helmet>
      <Layout>
        <OrderSection />
      </Layout>
    </>
  );
}

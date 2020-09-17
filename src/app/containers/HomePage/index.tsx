import React from 'react';
import { Helmet } from 'react-helmet-async';

import { Layout } from '../../components/Layout';
import ChooseLocation from './ChooseLocation';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Layout>
        <ChooseLocation />
      </Layout>
    </>
  );
}

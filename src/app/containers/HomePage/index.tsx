import React from 'react';
import { Helmet } from 'react-helmet-async';

import { Layout } from '../../components/Layout';
import ChooseLocation from './ChooseLocation';

export function HomePage(props) {
  return (
    <>
      <Helmet>
        <title>Search Location</title>
        <meta name="description" content="Search location" />
      </Helmet>
      <Layout>
        <ChooseLocation history={props.history} />
      </Layout>
    </>
  );
}

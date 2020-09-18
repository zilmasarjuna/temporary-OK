import React from 'react';
import { Helmet } from 'react-helmet-async';

import { Layout } from '../../components/Layout';
import ChooseLocation from './ChooseLocation';

export function HomePage(props) {
  console.log('props', props);
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Layout>
        <ChooseLocation history={props.history} />
      </Layout>
    </>
  );
}

import React from 'react';

import Header from './Header';

interface Props {
  children: any;
}

export function Layout({ children }: Props) {
  return (
    <div className="layout-page">
      <Header />
      {children}
    </div>
  );
}

import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@components/Header';

import React from 'react';

function MainLayout() {
  return (
    <>
      <Header />
      <main style={{ padding: '1rem' }}>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;

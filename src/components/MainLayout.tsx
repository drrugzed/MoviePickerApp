import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@components/Header';

function MainLayout() {
  return (
    <>
      <Header />
      <main>
        {' '}
        {/* если высота Header — 60px */}
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;

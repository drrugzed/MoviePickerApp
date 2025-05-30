import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './MainLayout';
import { pages } from '../routes';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {pages.map(({ element: Component, index, path }) => (
            index ? (
              <Route key='index' index element={<Component />}/>
            ) : (
              <Route key={path} path={path} element={<Component />}/>
            )
          ))}
        </Route>
      </Routes>
    </>
  );
}

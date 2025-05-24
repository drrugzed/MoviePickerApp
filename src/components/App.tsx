import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '@pages/Home';
import Results from '@/pages/Results';
import Details from '@/pages/Details';
import MainLayout from './MainLayout';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route index element={<Home />} />
        <Route path="results" element={<Results />} />
        <Route path='details/:id' element={<Details />} />
      </Routes>
    </div>
  );
}

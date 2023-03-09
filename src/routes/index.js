import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Home from '../pages/Home';
import PeminjamanPPBS from '../pages/Works/PeminjamanPPBS/index';

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Home />} />,
    <Route path="/peminjaman-ppbs" element={<PeminjamanPPBS />} />,
  ]),
);

export default router;

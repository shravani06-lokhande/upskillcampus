import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Restaurants from '../pages/Restaurants';
import Dashboard from '../pages/Dashboard';
import RestaurantDetails from '../pages/RestaurantDetails'; // ✅ NEW

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurants" element={<Restaurants />} />
      <Route path="/restaurants/:id" element={<RestaurantDetails />} /> {/* ✅ NEW */}
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRoutes;

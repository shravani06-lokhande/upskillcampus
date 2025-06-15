import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';

import Home from './pages/Home';
import Restaurants from './pages/Restaurants';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Navbar from './components/Navbar';
import RestaurantDashboard from './pages/RestaurantDashboard';
import RestaurantDetails from './pages/RestaurantDetails'; // ✅ NEW IMPORT

function App() {
  const [menu, setMenu] = useState([]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/restaurants/:id" element={<RestaurantDetails />} /> {/* ✅ NEW ROUTE */}
        <Route path="/about" element={<RestaurantDashboard menu={menu} setMenu={setMenu} />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;

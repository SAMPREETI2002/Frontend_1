// AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import LoginPage from './components/Loginpage/Login';
import GenerateInvoice  from './components/Invoicegen/Invoicegen';
import About from './components/About/About';
import Register from './components/Registerpage/Register';
import Landing1 from './components/Landing1/Landing1'
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/GenerateInvoice" element={<GenerateInvoice />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/landing1" element={<Landing1 />} />
    </Routes>
  );
};

export default AppRoutes;

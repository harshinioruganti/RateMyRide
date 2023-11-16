import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import LoginPage from './pages/LoginPage';
import ThemeParkPage from './pages/ThemeParkPage';
import RideDetailsPage from './pages/RideDetailsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/theme-parks" element={<ThemeParkPage />} />
        <Route path="/rides/:themeParkId/description/:rideId" element={<RideDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

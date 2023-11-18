import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import LoginPage from './pages/LoginPage';
import ThemeParkPage from './pages/ThemeParkPage';
import RideInfoPage from './pages/RideInfoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/theme-parks" element={<ThemeParkPage />} />
        <Route path="/rideInfo/:rideId" element={<RideInfoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import EmailVerifPage from './pages/EmailVerifPage';
import ThemeParkPage from './pages/ThemeParkPage';
import AboutPage from './pages/AboutPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/emailVerif" element={<EmailVerifPage />} />
        <Route path="/theme-parks" element={<ThemeParkPage />} />
        <Route path="/profile-page" element={<ProfilePage />} />
        <Route path="/about-page" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import ThemeParkCard from '../components/ThemePark/ThemeParkCard'; 

const ThemeParkPage = () => {
  const navigate = useNavigate();
  const [themeParks, setThemeParks] = useState([]);

  useEffect(() => {
    // Fetch theme parks from backend API
    fetch('/api/getAllThemeParks')
      .then(response => response.json())
      .then(data => setThemeParks(data))
      .catch(error => console.error('Error fetching theme parks:', error));
  }, []);

  const handleThemeParkClick = (themeParkId) => {
    navigate(`/rides/${themeParkId}`);
  };

  return (
    <div>
      <h1>Theme Parks</h1>
      <div className="theme-park-list">
        {themeParks.map(park => (
          <ThemeParkCard 
            key={park.themeParkId}
            themePark={park}
            onClick={() => handleThemeParkClick(park.themeParkId)}
            />
        ))}
      </div>
    </div>
  );
};

export default ThemeParkPage;
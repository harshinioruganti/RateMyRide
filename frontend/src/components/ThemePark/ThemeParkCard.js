import React, { useState } from 'react';
import './ThemeParkCard.css';

const ThemeParkCard = ({ themePark }) => {
  const { ThemePark, City, State } = themePark;

  return (
    <div className="theme-park-card">
      <h2>{ThemePark}</h2>
      <p>{City}, {State}</p>
    </div>
  );
};

export default ThemeParkCard;

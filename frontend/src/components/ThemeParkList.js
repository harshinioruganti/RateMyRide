import React from 'react';

const ThemeParkList = ({ themeParks, onCardClick }) => {
  return (
    <div className="theme-park-list">
      {themeParks.map((themePark) => (
        <div key={themePark.id} className="theme-park-card" onClick={() => onCardClick(themePark)}>
          <h3>{themePark.name}</h3>
          <p>{themePark.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ThemeParkList;

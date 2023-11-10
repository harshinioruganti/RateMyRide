import React, { useState } from 'react';
import './RideCard.css';

const RideCard = ({ ride, onCardClick }) => {
  return (
    <div className="ride-card" onClick={() => onCardClick(ride)}>
      <h2>{ride.title}</h2>
      <p>{ride.description}</p>
    </div>
  );
};

export default RideCard;

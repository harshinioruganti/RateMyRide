import React, { useState } from 'react';
import './RideCard.css';

const RideCard = ({ ride, onCardClick }) => {
  const { Ride, Description } = ride;

  return (
    <div className="ride-card" onClick={() => onCardClick(ride)}>
      <h2>{Ride}</h2>
      <p>{Description}</p>
    </div>
  );
};

export default RideCard;

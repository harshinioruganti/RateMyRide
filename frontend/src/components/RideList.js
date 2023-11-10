import React from 'react';
import RideCard from './RideCard';

const RideList = ({ rides, onCardClick }) => {
  return (
    <div className="ride-list">
      {rides.map((ride, index) => (
        <RideCard key={index} ride={ride} onCardClick={onCardClick} />
      ))}
    </div>
  );
};

export default RideList;

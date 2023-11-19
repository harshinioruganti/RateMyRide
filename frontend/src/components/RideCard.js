import React from 'react';
import { Link } from 'react-router-dom';

import './RideCard.css';

const RideCard = (props) => {
  const ride = props.ride;

  return (
    <div className='card-container'>
      <div className='desc'>
        <p>
          <Link to={`/rideInfo/${ride.rideId}`} className="ride-card-name">{ride.rideName}</Link>
        </p>
      </div>
    </div>
  );
};

export default RideCard;
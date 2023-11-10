import React from 'react';

const RideDetails = ({ ride, onClose }) => {
  return (
    <div className="ride-details-overlay">
      <div className="ride-details-content">
        <div className="ride-details-header">
          <h2>{ride.title}</h2>
          <button className="close-button" onClick={onClose}>
            Go Back to Rides
          </button>
        </div>
        <p>{ride.details}</p>
      </div>
    </div>
  );
};

export default RideDetails;

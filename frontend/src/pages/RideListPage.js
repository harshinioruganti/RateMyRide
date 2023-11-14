import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import RideCard from '../components/Rides/RideCard';

const RideListPage = () => {
  const navigate = useNavigate();
  const { themeParkId } = useParams();
  const [rides, setRides] = useState([]);

  useEffect(() => {
    // Fetch rides for the selected theme park from backend API
    fetch(`/api/rides/${themeParkId}`)
      .then(response => response.json())
      .then(data => setRides(data))
      .catch(error => console.error('Error fetching rides:', error));
  }, [themeParkId]);

  const handleRideClick = (rideId) => {
    navigate(`/rides/${themeParkId}/description/${rideId}`);
  };

  return (
    <div>
      <h1>Rides</h1>
      <div className="ride-list">
        {rides.map(ride => (
          <div key={ride._id} onClick={() => handleRideClick(ride._id)}>
            {/* Use Link to navigate to RideDescriptionPage */}
            <Link to={`/rides/${themeParkId}/description/${ride._id}`}>
              <RideCard ride={ride} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RideListPage;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function RideDetails() {
  const [rideDetails, setRideDetails] = useState({});
  const { rideId } = useParams();

  useEffect(() => {
    const fetchRideDetails = async () => {
        try {
          const response = await fetch('/api/getRideInfo', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ rideId }),
          });

          const data = await response.json();
          if (data.rideName) {
            setRideDetails(data);
          } else {
            console.error('Ride details not found');
          }
        } catch (error) {
          console.error('Error fetching ride details:', error.message);
        }
      };
    
      fetchRideDetails();
    }, [rideId]);

  return (
    <div id="ride-info">
        {rideDetails && (
        <div>
            <h1 id="ride-name-header">{rideDetails.rideName}</h1>
            <h2 id="ride-details-header">Ride Details</h2>
            <div className="ride-info-block">
                <p>Ride Name: {rideDetails.rideName}</p>
                <p>Description: {rideDetails.description}</p>
            </div>
        </div>
        )}
    </div>
  );
};

export default RideDetails;

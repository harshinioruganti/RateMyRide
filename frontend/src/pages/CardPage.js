import React, { useState } from 'react';

import Header from '../components/Header';
// import LoggedInName from '../components/LoggedInName';
// import CardUI from '../components/CardUI';
import RideList from '../components/RideList';
import RideDetails from '../components/RideDetails';

const CardPage = () =>
{
    const rides = [
        {
          title: 'Ride 1',
          description: 'A fun ride',
          details: 'This is a detailed description of Ride 1.',
        },
        {
          title: 'Ride 2',
          description: 'An exciting adventure',
          details: 'This is a detailed description of Ride 2.',
        },
        // Add more ride objects as needed
      ];

    const [selectedRide, setSelectedRide] = useState(null);

    const handleCardClick = (ride) => {
        setSelectedRide(ride);
    };

    return (
        <div className="app">
        <Header />
        {selectedRide ? (
            <RideDetails ride={selectedRide} onClose={() => setSelectedRide(null)} />
        ) : (
            <RideList rides={rides} onCardClick={handleCardClick} />
        )}
        </div>
    );
}

export default CardPage;



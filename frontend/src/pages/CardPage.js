import React, { useState } from 'react';

import Header from '../components/Header';
// import LoggedInName from '../components/LoggedInName';
// import CardUI from '../components/CardUI';
import ThemeParkList from '../components/ThemeParkList';
import RideList from '../components/RideList';
import RideDetails from '../components/RideDetails';

const CardPage = () =>
{
    const themeParks = [
      {
        id: 1,
        name: 'Magic Kingdom',
        description: 'The most magical place on earth.',
      },
      {
        id: 2,
        name: 'Epcot',
        description: 'Explore the future and cultures around the world.',
      },
      // Add more theme park objects as needed
    ];

    const rides = [
      {
        id: 1,
        themeParkId: 1,
        title: 'Splash Mountain',
        description: 'A thrilling water ride.',
        details: 'This is a detailed description of Splash Mountain.',
      },
      {
        id: 2,
        themeParkId: 1,
        title: 'Space Mountain',
        description: 'A high-speed space-themed roller coaster.',
        details: 'This is a detailed description of Space Mountain.',
      },
      // Add more ride objects as needed
    ];

    const [selectedThemePark, setSelectedThemePark] = useState(null);
    const [selectedRide, setSelectedRide] = useState(null);

    const handleThemeParkClick = (themePark) => {
      setSelectedThemePark(themePark);
      setSelectedRide(null);
    };

    const handleRideClick = (ride) => {
      setSelectedRide(ride);
    };

    return (
      <div className="app">
        <Header />
        {selectedRide ? (
          <RideDetails ride={selectedRide} onClose={() => setSelectedRide(null)} />
        ) : selectedThemePark ? (
          <RideList
            rides={rides.filter((ride) => ride.themeParkId === selectedThemePark.id)}
            onCardClick={handleRideClick}
          />
        ) : (
          <ThemeParkList themeParks={themeParks} onCardClick={handleThemeParkClick} />
        )}
      </div>
    );
};

export default CardPage;



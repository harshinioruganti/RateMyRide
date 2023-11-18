import React, {useEffect, useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function ThemeParkList() {
    const themeParks = [
        {
            _id: "6552d6f0f90db71828c9cd5e",
            ThemePark: "Magic Kingdom",
            City: "Orlando",
            State: "Florida"
        },
        {
            _id: "6552d746f90db71828c9cd5f",
            ThemePark: "SeaWorld",
            City: "Orlando",
            State: "Florida"
        },
        {
            _id: "6557af9467e037d279efe2a8",
            ThemePark: "Disney",
            City: "Orlando",
            State: "Florida"
        },
        {
            _id: "6557afd367e037d279efe2a9",
            ThemePark: "Volcano Bay",
            City: "Orlando",
            State: "Florida"
        },
        {
            _id: "6557b04367e037d279efe2aa",
            ThemePark: "Epcot",
            City: "Orlando",
            State: "Florida"
        },
        {
            _id: "6557b08d67e037d279efe2ab",
            ThemePark: "Dolly Wood",
            City: "Pigeon Forge",
            State: "Tennessee"
        }
    ];

    const rides = [
        {
            _id: "65536dbe489eedd0dc744ba0",
            Ride: "Mako",
            Description: "A hyper coaster known for high speeds, deep dives, and thrills around every turn.",
            ThemeParkID: "6552d746f90db71828c9cd5f"
        },
        {
            _id: "65536dd8489eedd0dc744ba1",
            Ride: "Manta",
            Description: "Find out what it’s like to spin, glide, skim and fly like a giant ray when you experience the only flying roller coaster of its kind in Florida.",
            ThemeParkID: "6552d746f90db71828c9cd5f"
          },
          {
            _id: "65536e03489eedd0dc744ba3",
            Ride: "Kraken",
            Description: "Born from tales that struck terror in sailors for centuries, SeaWorld Orlando's mighty Kraken is a monster coaster like no other.",
            ThemeParkID: "6552d746f90db71828c9cd5f"
          },
          {
            _id: "65536e26489eedd0dc744ba4",
            Ride: "Infinity Falls",
            Description: "Experience the exhilaration of thrilling rapids as you drop into churning whitewater on this rafting adventure.",
            ThemeParkID: "6552d746f90db71828c9cd5f"
          },
          {
            _id: "65536e3f489eedd0dc744ba5",
            Ride: "Journey To Atlantis",
            Description: "Water ride enthusiasts are in for a thrill as this mythical paradise reveals its darker side.",
            ThemeParkID: "6552d746f90db71828c9cd5f"
          },
          {
            _id: "65536e62489eedd0dc744ba6",
            Ride: "Pipeline",
            Description: "Get ready to feel the power of the Pacific right here in Florida, letting the waves launch you on a one-of-a-kind ocean adventure.",
            ThemeParkID: "6552d746f90db71828c9cd5f"
          },
          {
            _id: "65536e79489eedd0dc744ba7",
            Ride: "Ice Breaker",
            Description: "Ice Breaker features four airtime filled launches, both backwards and forwards, culminating in a reverse launch into the steepest beyond vertical drop in Florida - a 93 feet tall spike with 100 degree angle.",
            ThemeParkID: "6552d746f90db71828c9cd5f"
          },
          {
            _id: "6557b34a67e037d279efe2c4",
            Ride: "Seven Dwarfs Mine Train",
            Description: "Seven Dwarfs Mine Train is a steel roller coaster located at Magic Kingdom and Shanghai Disneyland Park. Manufactured by Vekoma, the roller coaster is situated in the Fantasyland sections of both parks.",
            ThemeParkID: "6552d6f0f90db71828c9cd5e"
          }
    ];

    let bp = require('./Path.js');

    const [themeParks, setThemeParks] = useState([]);
    const [rides, setRides] = useState([]);
    const [activePark, setActivePark] = useState(null);

    /* useEffect(() => {
        // Fetch theme parks data from the API
        const fetchAllThemeParks = async () => {
          try {
            const response = await fetch('/api/getAllThemeParks');
            const data = await response.json();
            if (data.allThemeParks) {
              setThemeParks(data.allThemeParks);
            } else {
              console.error('No theme parks found');
            }
          } catch (error) {
            console.error('Error fetching theme parks:', error.message);
          }
        }; 

        const fetchRides = async () => {
            try {
                const response = await fetch('/api/getRides');
                const data = await response.json();

                if (data.rideList) {
                setRides(data.rideList);
                } else {
                console.error('No rides found');
                }
            } catch (error) {
                console.error('Error fetching rides:', error.message);
            }
        };

        fetchAllThemeParks();
        fetchRides();
    }, []); */
  
    const toggleAccordion = (parkId) => {
        setActivePark(activePark === parkId ? null : parkId)
    };
  
    return (
        <div className="theme-park-list">
            {themeParks.map((park) => (
                <div key={park._id} className="park">
                    <button className="park-header" onClick={() => toggleAccordion(park._id)}>
                        {park.ThemePark} {activePark === park._id ? <FiMinus/> : <FiPlus/>}
                    </button>
                    {activePark === park._id && (
                        <div className="rides-list">
                            <ul>
                                {rides
                                    .filter((ride) => ride.ThemeParkID === park._id)
                                    .map((ride) => (
                                        <li key={ride._id}>
                                            <Link to={`/rideInfo/${ride._id}`}>{ride.Ride}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );

    /* return (
        <div className="theme-park-list">
            {themeParks.map((park) => (
                <div key={park.themeParkId} className="park">
                    <button className="park-header" onClick={() => toggleAccordion(park._id)}>
                        {park.themePark} {activePark === park.themeParkId ? <FiMinus/> : <FiPlus/>}
                    </button>
                    {activePark === park.themeParkId && (
                        <div className="rides-list">
                            <ul>
                                {rides
                                    .filter((ride) => ride.themeParkId === park.themeParkId)
                                    .map((ride) => (
                                        <li key={ride.rideId}>
                                            <Link to={`/rideInfo/${ride.rideName}`}>{ride.rideName}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );*/
};
  
export default ThemeParkList;

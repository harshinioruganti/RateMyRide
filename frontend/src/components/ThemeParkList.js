import React, {useEffect, useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './ThemeParkList.css';
import RideCard from './RideCard.js';

function ThemeParkList() {
    const themeParks = [
        {
            themeParkId: "6552d6f0f90db71828c9cd5e",
            themePark: "Magic Kingdom",
            city: "Orlando",
            state: "Florida"
        },
        {
            themeParkId: "6552d746f90db71828c9cd5f",
            themePark: "SeaWorld",
            city: "Orlando",
            state: "Florida"
        },
        {
            themeParkId: "6557af9467e037d279efe2a8",
            themePark: "Disney",
            city: "Orlando",
            state: "Florida"
        },
        {
            themeParkId: "6557afd367e037d279efe2a9",
            themePark: "Volcano Bay",
            city: "Orlando",
            state: "Florida"
        },
        {
            themeParkId: "6557b04367e037d279efe2aa",
            themePark: "Epcot",
            city: "Orlando",
            state: "Florida"
        },
        {
            themeParkId: "6557b08d67e037d279efe2ab",
            themePark: "Dolly Wood",
            city: "Pigeon Forge",
            state: "Tennessee"
        }
    ];

    const rides = [
        {
            rideId: "65536dbe489eedd0dc744ba0",
            rideName: "Mako",
            description: "A hyper coaster known for high speeds, deep dives, and thrills around every turn.",
            themeParkId: "6552d746f90db71828c9cd5f"
        },
        {
            rideId: "65536dd8489eedd0dc744ba1",
            rideName: "Manta",
            description: "Find out what it’s like to spin, glide, skim and fly like a giant ray when you experience the only flying roller coaster of its kind in Florida.",
            themeParkId: "6552d746f90db71828c9cd5f"
          },
          {
            rideId: "65536e03489eedd0dc744ba3",
            rideName: "Kraken",
            description: "Born from tales that struck terror in sailors for centuries, SeaWorld Orlando's mighty Kraken is a monster coaster like no other.",
            themeParkId: "6552d746f90db71828c9cd5f"
          },
          {
            rideId: "65536e26489eedd0dc744ba4",
            rideName: "Infinity Falls",
            description: "Experience the exhilaration of thrilling rapids as you drop into churning whitewater on this rafting adventure.",
            themeParkId: "6552d746f90db71828c9cd5f"
          },
          {
            rideId: "65536e3f489eedd0dc744ba5",
            rideName: "Journey To Atlantis",
            description: "Water ride enthusiasts are in for a thrill as this mythical paradise reveals its darker side.",
            themeParkId: "6552d746f90db71828c9cd5f"
          },
          {
            rideId: "65536e62489eedd0dc744ba6",
            rideName: "Pipeline",
            description: "Get ready to feel the power of the Pacific right here in Florida, letting the waves launch you on a one-of-a-kind ocean adventure.",
            themeParkId: "6552d746f90db71828c9cd5f"
          },
          {
            rideId: "65536e79489eedd0dc744ba7",
            rideName: "Ice Breaker",
            description: "Ice Breaker features four airtime filled launches, both backwards and forwards, culminating in a reverse launch into the steepest beyond vertical drop in Florida - a 93 feet tall spike with 100 degree angle.",
            themeParkId: "6552d746f90db71828c9cd5f"
          },
          {
            rideId: "6557b34a67e037d279efe2c4",
            rideName: "Seven Dwarfs Mine Train",
            description: "Seven Dwarfs Mine Train is a steel roller coaster located at Magic Kingdom and Shanghai Disneyland Park. Manufactured by Vekoma, the roller coaster is situated in the Fantasyland sections of both parks.",
            themeParkId: "6552d6f0f90db71828c9cd5e"
          }
    ];

    let bp = require('./Path.js');

    //const [themeParks, setThemeParks] = useState([]);
    //const [rides, setRides] = useState([]);
    const [activePark, setActivePark] = useState(null);

    /*useEffect(() => {
        // Fetch theme parks data from the API
        const fetchAllThemeParks = async () => {
          try {
            const response = await fetch(bp.buildPath('/api/getAllThemeParks'));
            const data = await response.json();
            if (data.allThemeParks) {
              setThemeParks(data.allThemeParks);
              console.log(themeParks);
            } else {
              console.error('No theme parks found');
            }
          } catch (error) {
            console.error('Error fetching theme parks:', error.message);
          }
        }; 

        const fetchRides = async () => {
            try {
                const response = await fetch(bp.buildPath('/api/getRides'));
                const data = await response.json();

                if (data.rideList) {
                    setRides(data.rideList);
                    console.log(rides);
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
        <div className="theme-park-header">
            <div className='container'>
                <div className='col-md-12'>
                    <br/>
                    <h1 className='theme-park-title'>Theme Parks</h1>
                </div>
                <div className='col-md-11'>
                    <input type="text" class="search-bar" placeholder="Search"/>
                    <Link to='/create-ride' className='add-ride-button'>
                        + Add New Ride
                    </Link>
                    <br/>
                    <br/>
                    <hr/>
                </div>
            </div>
            <div className='theme-park-list'>
                {themeParks.map((park, index) => {
                    return (
                        <div key={park.themeParkId} className={`park park-${index % 3}`}>
                            <button
                                className="park-header"
                                onClick={() => toggleAccordion(park.themeParkId)}
                            >
                                <div className="park-info">
                                    <h3 className='park-name'>{park.themePark}</h3>
                                    <p className='park-location'>{park.city}, {park.state}</p>
                                </div>
                                {activePark === park.themeParkId ? <FiMinus/> : <FiPlus/>}
                            </button>
                            {activePark === park.themeParkId && (
                                <div className="rides-list">
                                    <ul>
                                        {rides
                                            .filter((ride) => ride.themeParkId === park.themeParkId)
                                            .map((ride) => (
                                                <div key={ride.rideId} className={`ride ride-${index % 3}`}>
                                                    <RideCard ride={ride}/>
                                                </div>
                                            ))
                                        }
                                    </ul>
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    );
};
  
export default ThemeParkList;

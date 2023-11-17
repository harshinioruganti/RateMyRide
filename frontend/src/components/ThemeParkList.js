import React, { useEffect, useState } from 'react';
import { Accordion, Card, Button, Modal } from 'react-bootstrap';
import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses';

function ThemeParkList()
{
    const rides = [
        {
            _id: {
              $oid: "65536dbe489eedd0dc744ba0"
            },
            Ride: "Mako",
            Description: "A hyper coaster known for high speeds, deep dives, and thrills around every turn.",
            ThemeParkID: "6552d746f90db71828c9cd5f"
        },
        {
            _id: {
              $oid: "65536dd8489eedd0dc744ba1"
            },
            Ride: "Manta",
            Description: "Find out what it’s like to spin, glide, skim and fly like a giant ray when you experience the only flying roller coaster of its kind in Florida.",
            ThemeParkID: "6552d746f90db71828c9cd5f"
          },
          {
            _id: {
              $oid: "65536e03489eedd0dc744ba3"
            },
            Ride: "Kraken",
            Description: "Born from tales that struck terror in sailors for centuries, SeaWorld Orlando's mighty Kraken is a monster coaster like no other.",
            ThemeParkID: "6552d746f90db71828c9cd5f"
          },
          {
            _id: {
              $oid: "65536e26489eedd0dc744ba4"
            },
            Ride: "Infinity Falls",
            Description: "Experience the exhilaration of thrilling rapids as you drop into churning whitewater on this rafting adventure.",
            ThemeParkID: "6552d746f90db71828c9cd5f"
          },
          {
            _id: {
              $oid: "65536e3f489eedd0dc744ba5"
            },
            Ride: "Journey To Atlantis",
            Description: "Water ride enthusiasts are in for a thrill as this mythical paradise reveals its darker side.",
            ThemeParkID: "6552d746f90db71828c9cd5f"
          },
          {
            _id: {
              $oid: "65536e62489eedd0dc744ba6"
            },
            Ride: "Pipeline",
            Description: "Get ready to feel the power of the Pacific right here in Florida, letting the waves launch you on a one-of-a-kind ocean adventure.",
            ThemeParkID: "6552d746f90db71828c9cd5f"
          },
          {
            _id: {
              $oid: "65536e79489eedd0dc744ba7"
            },
            Ride: "Ice Breaker",
            Description: "Ice Breaker features four airtime filled launches, both backwards and forwards, culminating in a reverse launch into the steepest beyond vertical drop in Florida - a 93 feet tall spike with 100 degree angle.",
            ThemeParkID: "6552d746f90db71828c9cd5f"
          },
          {
            _id: {
              $oid: "6557b34a67e037d279efe2c4"
            },
            Ride: "Seven Dwarfs Mine Train",
            Description: "Seven Dwarfs Mine Train is a steel roller coaster located at Magic Kingdom and Shanghai Disneyland Park. Manufactured by Vekoma, the roller coaster is situated in the Fantasyland sections of both parks.",
            ThemeParkID: "6552d6f0f90db71828c9cd5e"
          }
    ];

    let bp = require('./Path.js');
    

    const [themeParks, setThemeParks] = useState([]);
    const [selectedPark, setSelectedPark] = useState(null);

    useEffect(() => {
        fetch(bp.buildPath('/api/getAllThemeParks'))
            .then(response => response.json())
            .then(data => {
                if (data.allThemeParks) {
                    setThemeParks(data.allThemeParks);
                    console.log('Fetched theme parks:', data);
                }
                else {
                    console.error('No theme parks found');
                }
            })
            .catch(error => {
                console.error('Error fetching theme parks');
            })
    }, []);
  
    const handleParkClick = (parkId) => {
      setSelectedPark(parkId);
    };
  
    const handleClose = () => {
      setSelectedPark(null);
    };
  
    return (
      <div>
        <h1>Theme Parks</h1>
        {themeParks.map(park => (
          <div key={park.themeParkId}>
            <h2 onClick={() => handleParkClick(park.themeParkId)}>{park.themePark}</h2>
            {selectedPark === park.themeParkId && (
              <Accordion defaultActiveKey="0">
                {rides
                  .filter((ride) => ride.themeParkID === park.themeParkId)
                  .map((ride) => (
                    <Card key={ride._id.$oid}>
                      <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey={ride._id.$oid}>
                          {ride.Ride}
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey={ride._id.$oid}>
                        <Card.Body>
                          <Button onClick={handleClose}>View Ride Details</Button>
                          {/* Modal for ride details */}
                          <Modal show={selectedPark === park.themeParkId} onHide={handleClose}>
                            <Modal.Header closeButton>
                              <Modal.Title>{ride.Ride}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              {/* Add ride details here */}
                              Ride details for {ride.Ride} in {park.themePark}.
                            </Modal.Body>
                          </Modal>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  ))}
              </Accordion>
            )}
          </div>
        ))}
      </div>
    );
};
  
  export default ThemeParkList;

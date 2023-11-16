import React, { useState } from 'react';
import { Accordion, Card, Button, Modal } from 'react-bootstrap';

function ThemeParkList()
{
    // Hardcoded theme parks and rides data
    const themeParks = [
      { id: 1, name: 'Magic Kingdom' },
      { id: 2, name: 'Disneyland' }
    ];
  
    const rides = [
      { id: 101, name: 'Space Mountain', themeParkID: 1 },
      { id: 102, name: 'Pirates of the Caribbean', themeParkID: 1 },
      { id: 201, name: 'Splash Mountain', themeParkID: 2 },
      { id: 202, name: 'Haunted Mansion', themeParkID: 2 }
    ];
  
    const [selectedPark, setSelectedPark] = useState(null);
  
    const handleParkClick = (parkId) => {
      setSelectedPark(parkId);
    };
  
    const handleClose = () => {
      setSelectedPark(null);
    };
  
    return (
      <div>
        <h1>Theme Parks</h1>
        {themeParks.map((park) => (
          <div key={park.id}>
            <h2 onClick={() => handleParkClick(park.id)}>{park.name}</h2>
            {selectedPark === park.id && (
              <Accordion defaultActiveKey="0">
                {rides
                  .filter((ride) => ride.themeParkID === park.id)
                  .map((ride) => (
                    <Card key={ride.id}>
                      <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey={ride.id}>
                          {ride.name}
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey={ride.id}>
                        <Card.Body>
                          <Button onClick={handleClose}>View Ride Details</Button>
                          {/* Modal for ride details */}
                          <Modal show={selectedPark === park.id} onHide={handleClose}>
                            <Modal.Header closeButton>
                              <Modal.Title>{ride.name}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              {/* Add ride details here */}
                              Ride details for {ride.name} in {park.name}.
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

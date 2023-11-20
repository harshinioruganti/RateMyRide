import React, { useState } from 'react';
import { Button, Card, CardBody, Container, Modal, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl} from 'react-bootstrap';

function Landing() {
  let bp = require('./Path.js');

  const [cardData, setCardData] = useState([
    {
      rideId: "65536dbe489eedd0dc744ba0",
      rideName: "Mako",
      description: "A hyper coaster known for high speeds, deep dives, and thrills around every turn.",
      themeParkId: "6552d746f90db71828c9cd5f",
      imageSource: "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/ibmig/cms/image/wesh/33240692-33240692.jpg?crop=1xw:1.00000000000000000xh;center,top&resize=640:*",
      reviews: [],
  },
  {
      rideId: "65536dd8489eedd0dc744ba1",
      rideName: "Manta",
      description: "Find out what it’s like to spin, glide, skim and fly like a giant ray when you experience the only flying roller coaster of its kind in Florida.",
      themeParkId: "6552d746f90db71828c9cd5f",
      imageSource: "https://seaworld.com/san-diego/-/media/seaworld-san-diego/images/rides/manta/gallery/750x422-swc-roller-coasters-manta-2.ashx?version=1_202306074014&h=422&w=750&la=en&hash=D397FAE9C24B922E9D27F8484641E7E3D1E05770",
      reviews: [],
    },
    {
      rideId: "65536e03489eedd0dc744ba3",
      rideName: "Kraken",
      description: "Born from tales that struck terror in sailors for centuries, SeaWorld Orlando's mighty Kraken is a monster coaster like no other.",
      themeParkId: "6552d746f90db71828c9cd5f",
      imageSource: "https://seaworld.com/orlando/-/media/seaworld-orlando/images/rides/kraken/750x422/750x422_swo_rides_kraken_loop3.ashx?version=1_202210063802&h=422&w=750&la=en&hash=37A42BE83626764DA55AE2799FD314AAE6DA66E0",
      reviews: [],
    },
    {
      rideId: "65536e26489eedd0dc744ba4",
      rideName: "Infinity Falls",
      description: "Experience the exhilaration of thrilling rapids as you drop into churning whitewater on this rafting adventure.",
      themeParkId: "6552d746f90db71828c9cd5f",
      imageSource: "https://orlandoinformer.com/wp-content/uploads/2021/09/InfinityFalls.jpeg",
      reviews: [],
    },
    {
      rideId: "65536e3f489eedd0dc744ba5",
      rideName: "Journey To Atlantis",
      description: "Water ride enthusiasts are in for a thrill as this mythical paradise reveals its darker side.",
      themeParkId: "6552d746f90db71828c9cd5f",
      imageSource: "https://seaworld.com/orlando/-/media/seaworld-orlando/images/rides/journey-to-atlantis/750x422_swo_rides_journeytoatlantis_media_3.ashx?version=1_202210063101&h=422&w=750&la=en&hash=2EB98EA256FBD7342DD23FE5DFE54AE7137B1376",
      reviews: [],
    },
    {
      rideId: "65536e62489eedd0dc744ba6",
      rideName: "Pipeline",
      description: "Get ready to feel the power of the Pacific right here in Florida, letting the waves launch you on a one-of-a-kind ocean adventure.",
      themeParkId: "6552d746f90db71828c9cd5f",
      imageSource: "https://seaworld.com/orlando/-/media/seaworld-orlando/images/rides/pipeline/1200x776-swo-2023-coasters-pipeline-with-logo.ashx?version=1_202209193504&h=776&w=1200&la=en&hash=4EC838CF9B8EAD2428BBF3D1B12CCA1C16B0B51E",
      reviews: [],
    },
    {
      rideId: "65536e79489eedd0dc744ba7",
      rideName: "Ice Breaker",
      description: "Ice Breaker features four airtime filled launches, both backwards and forwards, culminating in a reverse launch into the steepest beyond vertical drop in Florida - a 93 feet tall spike with 100 degree angle.",
      themeParkId: "6552d746f90db71828c9cd5f",
      imageSource: "https://seaworld.com/orlando/-/media/seaworld-orlando/images/rides/ice-breaker/750x422/750x422-swo-ice-breaker-media-3.ashx?version=1_202111182521&h=422&w=750&la=en&hash=F8A00F164F5E8F863FCEA7E62085591B791C34F8",
      reviews: [],
    },
    {
      rideId: "6557b34a67e037d279efe2c4",
      rideName: "Seven Dwarfs Mine Train",
      description: "Seven Dwarfs Mine Train is a steel roller coaster located at Magic Kingdom and Shanghai Disneyland Park. Manufactured by Vekoma, the roller coaster is situated in the Fantasyland sections of both parks.",
      themeParkId: "6552d6f0f90db71828c9cd5e",
      imageSource: "https://www.tripsavvy.com/thmb/CMTMZJ0cZrbz4VVg567jLknetvk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Seven-dwarfs-mine-train-2048x1372-57bb61133df78c87630297ce.jpg",
      reviews: [],
    }
  ]);

  const [modalShow, setModalShow] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    author: '',
    comment: '',
  });

  const handleModalShow = (id) => {
    setModalShow(id);
  };

  const handleModalHide = () => {
    setModalShow(null);
  };

  const handleReviewChange = (e) => {
    setNewReview({
      ...newReview,
      [e.target.name]: e.target.value,
    });
  };

  const handleReviewSubmit = (e, cardId) => {
    e.preventDefault();
    const updatedCardData = cardData.map((card) =>
      card.id === cardId
        ? { ...card, reviews: [...card.reviews, newReview] }
        : card
    );

    setCardData(updatedCardData);

    setNewReview({
      author: '',
      comment: '',
    });
  };

  return (
    <div id="landingDiv">
      <div id="Cards" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {cardData.map((card, index) => (
          <Col key={card.rideId} xs={12} md={4} style={{ marginBottom: '20px' }}>
            <Card style={{ width: '90%' }}>
              <Card.Img variant="top" src={card.imageSource}  style={{ height: '200px', objectFit: 'cover' }} />
              <CardBody>
                <Card.Title>{card.rideName}</Card.Title>
                <Card.Text>Theme Park</Card.Text>
                <Card.Text>Average Rating:</Card.Text>
                <Button variant="primary" onClick={() => handleModalShow(card.rideId)}>
                  Rate It!
                </Button>

                <MyVerticallyCenteredModal
                  show={modalShow === card.rideId}
                  onHide={handleModalHide}
                  title={card.rideName}
                  content={card.description}
                  imageSrc={card.imageSource}
                  reviews={card.reviews}
                  newReview={newReview}
                  handleReviewChange={handleReviewChange}
                  handleReviewSubmit={(e) => handleReviewSubmit(e, card.rideId)}
                />
              </CardBody>
            </Card>
          </Col>
        ))}
      </div>
    </div>
  );
}

function calculateAverageRating(reviews) {
  console.log('Reviews:', reviews);
  
  if (reviews.length === 0) {
    return 'No Ratings';
  }

  const totalRating = reviews.reduce((sum, review) => {
    console.log('Review:', review);
    return sum + parseInt(review.rating, 10);
  }, 0);
  
  const averageRating = totalRating / reviews.length;
  console.log('Total Rating:', totalRating);
  console.log('Average Rating:', averageRating);

  return averageRating.toFixed(1);
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col md={4}>
              <img src={props.imageSrc} alt={props.title} className="img-fluid" />
            </Col>
            <Col md={8}>
              <h4>{props.title}</h4>
              <h5>{props.themePark}</h5>
              <p>{props.content}</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <hr />
              <h5>Reviews</h5>
              {props.reviews.map((review, index) => (
                <div key={index} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                  <Row>
                    <Col>
                      <strong>{review.author}</strong>
                    </Col>
                    <Col>
                      <div style={{ textAlign: 'right' }}>
                        Rating: {review.rating}
                      </div>
                    </Col>
                  </Row>
                  <div>{review.comment}</div>
                </div>
              ))}

              <Form onSubmit={props.handleReviewSubmit}>
                <Form.Group controlId="author">
                  <Form.Label>Your Name:</Form.Label>
                  <Form.Control
                    type="text"
                    name="author"
                    value={props.newReview.author}
                    onChange={props.handleReviewChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="rating">
                  <Form.Label>Rating (1-5):</Form.Label>
                  <Form.Control
                    type="number"
                    name="rating"
                    value={props.newReview.rating}
                    onChange={props.handleReviewChange}
                    min="1"
                    max="5"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="comment">
                  <Form.Label>Your Review:</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="comment"
                    value={props.newReview.comment}
                    onChange={props.handleReviewChange}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit">Submit Review</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Landing;
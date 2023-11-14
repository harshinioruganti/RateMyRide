import React, { useState, useEffect } from 'react';

const RideDetailsPage = ({ match }) => {
  const [rideDetails, setRideDetails] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [avgRating, setAvgRating] = useState(0);

  const rideId = match.params.rideId; // Assuming the rideId is obtained from the route params

  useEffect(() => {
    // Fetch ride details from backend API using rideId
    fetch(`/api/rides/${rideId}/details`)
      .then(response => response.json())
      .then(data => setRideDetails(data))
      .catch(error => console.error('Error fetching ride details:', error));

    // Fetch reviews for the ride from backend API
    fetch(`/api/reviews/${rideId}`)
      .then(response => response.json())
      .then(data => setReviews(data))
      .catch(error => console.error('Error fetching reviews:', error));

    // Fetch average rating for the ride from backend API
    fetch(`/api/rides/${rideId}/avgRating`)
      .then(response => response.json())
      .then(data => setAvgRating(data.avgRating))
      .catch(error => console.error('Error fetching average rating:', error));
  }, [rideId]);

  return (
    <div>
      <h1>Ride Details</h1>
      {rideDetails && (
        <div>
          <h2>{rideDetails.Ride}</h2>
          <p>Description: {rideDetails.Description}</p>
          <p>Location: {rideDetails.City}, {rideDetails.State}</p>
        </div>
      )}

      <h2>Reviews</h2>
      <ul>
        {reviews.map(review => (
          <li key={review._id}>
            <p>{review.comment}</p>
            <p>Rating: {review.rating}</p>
          </li>
        ))}
      </ul>

      <p>Average Rating: {avgRating}</p>
    </div>
  );
};

export default RideDetailsPage;

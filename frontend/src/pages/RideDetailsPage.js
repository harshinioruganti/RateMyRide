import React, { useState, useEffect } from 'react';

const RideDetailsPage = ({ match }) => {
  const [rideDetails, setRideDetails] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [avgRating, setAvgRating] = useState(0);

  const rideId = match.params.rideId; // Assuming the rideId is obtained from the route params

  // Fetch ride details from backend API using rideId

  // Fetch reviews for the ride from backend API

  // Fetch average rating for the ride from backend API

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
}

export default RideDetailsPage;

import React, { useEffect, useState } from 'react';

function RideReviews() {
  const [avgRating, setAvgRating] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState('');

  const queryParams = new URLSearchParams(window.location.search);
  const rideId = queryParams.get('rideId');

  useEffect(() => {
    async function fetchRatings() {
        try {
            const response = await fetch('/api/getRideRating', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ rideId })
            });

            const data = await response.json();
            if (response.ok) {
                setAvgRating(data.overallAvg);
            } else {
                setError(data.log);
            }
        } catch (error) {
            setError(error.message);
        }
    }

    async function fetchReviews() {
        try {
            const response = await fetch('/api/getReviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ rideId })
            });
            
            const data = await response.json();
            if (response.ok) {
                setReviews(data.reviewList);
            } else {
                setError(data.log);
            }
        } catch (error) {
            setError(error.message);
        }
    }

    fetchRatings();
    fetchReviews();
  }, [rideId]);

  return (
    <div>
      <h2>Reviews</h2>
      <p>Average Rating: {avgRating}</p>
      {error && <p>Error: {error}</p>}
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <p>User: {review.userId}</p>
            <p>Thrill: {review.thrill}</p>
            <p>Theme: {review.theme}</p>
            <p>Length: {review.length}</p>
            <p>Overall: {review.overall}</p>
            <p>Review: {review.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RideReviews;

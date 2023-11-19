import React from 'react';

const UserReviews = ({ reviews, log }) => {
  return (
    <div className="user-reviews-container">
      {log && <p>{log}</p>}
      {reviews.map((review, index) => (
        <div key={index} className="user-review-item">
          {/* Render individual review items based on review properties */}
          <p>Thrill: {review.thrill}</p>
          <p>Theme: {review.theme}</p>
          {/* Add additional review information */}
        </div>
      ))}
    </div>
  );
};

export default UserReviews;

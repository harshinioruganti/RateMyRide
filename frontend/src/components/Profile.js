import React, { useEffect, useState } from 'react';

import LoggedInName from './LoggedInName.js'; // Import the component

const Profile = () => {
  let bp = require('./Path.js');

  var _ud = localStorage.getItem('user_data');
  var ud = JSON.parse(_ud);
  var userId = ud.id;
  var firstName = ud.firstName;
  var lastName = ud.lastName;
  const initials = (firstName && lastName) ? `${firstName.charAt(0)}${lastName.charAt(0)}` : '';

  const [userReviews, setUserReviews] = useState([]);

  // Fetch user reviews function
  const getUserReviews = async (userId) => {
    try {
      const response = await fetch(bp.buildPath('api/getMyReviews'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      });
  
      if (!response.ok) {
        throw new Error('Error fetching user reviews');
      }
  
      const { reviewList } = await response.json();
      setUserReviews(reviewList);
    } catch (error) {
      console.error('Error fetching user reviews:', error);
    }   
  };

  useEffect(() => {
    getUserReviews(userId); // Fetch reviews when component mounts
  }, []);


  return (
    <div className="profile-container">
      <LoggedInName />
      <br/>
      {/* User reviews section */}
      <div className="user-reviews">
        <h2>User Reviews</h2>
        <ul>
          {userReviews.map((review, index) => (
            <li key={index}>
              <p>Thrill: {review.thrill}</p>
              <p>Theme: {review.theme}</p>
              <p>Length: {review.length}</p>
              <p>Overall: {review.overall}</p>
              <p>Review: {review.review}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );  
};

export default Profile;
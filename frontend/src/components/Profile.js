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
      <br/>
      <div className="profile-icon">
          <div className="initials">{initials}</div>
      </div>
    </div>
  );  
};

export default Profile;
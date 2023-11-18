import React, { useEffect, useState } from 'react';

import Header from '../components/Header.js';
import ProfilePicture from '../components/ProfilePicture.js';
import UserInformation from '../components/UserInformation.js';
import UserReviews from '../components/UserReviews.js';

const ProfilePage = () => {
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        userId: ''
    });

    const [userReviews, setUserReviews] = useState([]);
    const [log, setLog] = useState('');

    // Fetch user reviews function
  const getUserReviews = async () => {
    try {
      const response = await fetch('/api/getUserReviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId: userData.userId })
      });

      const data = await response.json();
      if (data.reviewList) {
        setUserReviews(data.reviewList);
        setLog(data.log);
      } else {
        setLog('No reviews found.');
      }
    } catch (error) {
      console.error('Error fetching user reviews:', error);
    }
  };

  useEffect(() => {
    getUserReviews(); // Fetch reviews when component mounts
  }, []);

  return (
    <>
      <Header />
      <div className="profile-container">
        {/* Profile picture section */}
        <div className="profile-picture">
          <ProfilePicture initials={`${userData.firstName.charAt(0)}${userData.lastName.charAt(0)}`} />
          <UserInformation firstName={userData.firstName} lastName={userData.lastName} />
        </div>
        {/* User reviews section */}
        <div className="user-reviews">
          <h2>User Reviews</h2>
          <UserReviews reviews={userReviews} log={log} />
        </div>
      </div>
    </>
  );
};


export default ProfilePage;

import React, { useEffect, useState } from 'react';
import Header from '../components/Header.js';
import LoggedInName from '../components/LoggedInName.js'; // Import the component
import '../pages/css/ProfilePage.css';

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
      // Fetch user reviews from the API
      const response = await fetch('/api/getMyReviews', {
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
      setLog('Error fetching reviews.');
    }
  };

  useEffect(() => {
      setUserData({
      firstName: 'John',
      lastName: 'Doe',
      userId: '123'
    });

    getUserReviews(); // Fetch reviews when component mounts
  }, []);

  return (
    <>
      <Header />
      <div className="profile-container">
        {/* Display the user's name using the LoggedInName component */}
        <LoggedInName firstName={userData.firstName} lastName={userData.lastName} />
        {/* User reviews section */}
        <div className="user-reviews">
          <h2>User Reviews</h2>
          <div>{log}</div>
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
    </>
  );
};

export default ProfilePage;

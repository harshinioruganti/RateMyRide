import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div>
      <h1 className="about-us-title">About Us</h1>
      <section className="about-us-section"> {/* Add the CSS class */}
        <p>
          "RateMyRide" is a user-friendly web and mobile application designed for theme park enthusiasts.
          With "RateMyRide," users can explore a variety of theme parks and their thrilling rides.
          The app provides detailed information about each ride, including descriptions, images, and informative user reviews and ratings.
          Users also have the ability to share their own experiences by leaving reviews and ratings for the rides they've enjoyed.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;

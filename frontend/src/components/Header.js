import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
  
  var _ud = localStorage.getItem('user_data');
  var ud = JSON.parse(_ud);
  // var userId = ud.id;
  var firstName = ud.firstName;
  var lastName = ud.lastName;
  const initials = (firstName && lastName) ? `${firstName.charAt(0)}${lastName.charAt(0)}` : '';

  const doLogout = event => 
  {
	  event.preventDefault();

    localStorage.removeItem("user_data")
    window.location.href = '/';

  };  

  return (
    <div class="header">
        <Link to="/theme-parks">
          <div class="logo">RateMyRide</div>
        </Link>
        <input type="text" class="search-bar" placeholder="Search"/>
        <div class="user-icon">
            <div class="initials">{initials}</div>
            <div class="dropdown">
                <Link to="/profile-page">
                  <button class="dropdown-item">My Profile</button><br/>
                </Link>
                <Link to="/about-page">
                  <button class="dropdown-item">About Page</button><br/>
                </Link>
                <button class="dropdown-item" onClick={doLogout}>Logout</button><br/>
            </div>
        </div>
    </div>
  );
}

export default Header;
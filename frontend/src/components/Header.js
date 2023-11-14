import React from 'react';
import './Header.css';

const Header = () => {

  var _ud = localStorage.getItem('user_data');
  var ud = JSON.parse(_ud);
  // var userId = ud.id;
  var firstName = 'firstname'
  var lastName = 'lastname'
  const initials = (firstName && lastName) ? `${firstName.charAt(0)}${lastName.charAt(0)}` : '';

  const doLogout = event => 
  {
	  event.preventDefault();

    localStorage.removeItem("user_data")
    window.location.href = '/';

  };  

  return (
    <div class="header">
        <div class="logo">RateMyRide</div>
        <input type="text" class="search-bar" placeholder="Search"/>
        <div class="user-icon">
            <div class="initials">{initials}</div>
            <div class="dropdown">
                <button class="dropdown-item">My Profile</button><br/>
                <button class="dropdown-item">About Page</button><br/>
                <button class="dropdown-item" onClick={doLogout}>Logout</button><br/>
            </div>
        </div>
    </div>
  );
}

export default Header;
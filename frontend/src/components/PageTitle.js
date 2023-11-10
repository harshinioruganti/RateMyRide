import React from 'react';
import './PageTitle.css';
import logo from '../logo.png';

function PageTitle()
{
  return(
    <div className='title-container'>
        <img src={logo} alt="Logo" className='logo' />
        <h1 id="title" className="title">Welcome to RateMyRide!</h1>
    </div>
  );
};

export default PageTitle;
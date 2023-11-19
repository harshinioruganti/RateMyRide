import React, { useState } from 'react';
import './css/LoginPage.css';

import PageTitle from '../components/PageTitle';
import Login from '../components/Login';
import Register from '../components/Register';

const LoginPage = () =>
{
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div className="app">
      <PageTitle />
      <div className='toggle-container'>
        <button className="login-page-buttons" onClick={() => setIsRegistering(false)}>Login</button>
        <button className="login-page-buttons" onClick={() => setIsRegistering(true)}>Register</button>
      </div>
      {isRegistering ? <Register /> : <Login />}
    </div>
  );
};

export default LoginPage;

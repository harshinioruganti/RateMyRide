import React, { useState } from 'react';
import './Register.css';

function Register()
{

  let bp = require('./Path.js');

  var registerFirstName;
  var registerLastName;
  var registerEmail;
  var registerPassword;

  const [message,setMessage] = useState('');

  const doRegister = async event => 
  {
      event.preventDefault();

      var obj = {firstName:registerFirstName.value,lastName:registerLastName.value,email:registerEmail.value,password:registerPassword.value};
      var js = JSON.stringify(obj);

      try
      {    
          const response = await fetch(bp.buildPath('api/register'),
              {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});

          var res = JSON.parse(await response.text());

          if( res.error.length > 0 )
          {
              setMessage('Account not created:' + res.error);
          }
          else
          {
              /*var user = {firstName:res.firstName,lastName:res.lastName,id:res.id}
              localStorage.setItem('user_data', JSON.stringify(user));*/

              setMessage('User has been added, Please check your email to verify your account');
          }
      }
      catch(e)
      {
          setMessage(e.toString())
      }    
  };

  return (
      <div className="formBox">
          <form onSubmit={doRegister} id="login" className="input-group">
            <span id="inner-title">Register</span>
            <input name="firstName" type="text" className={`register-field ${message !== '' ? 'register-field.error' : ''}`} placeholder="First Name"
              ref={(c) => registerFirstName = c}/>
            <input name="lastName" type="text" className={`register-field ${message !== '' ? 'register-field.error' : ''}`} placeholder="Last Name"
              ref={(c) => registerLastName = c}/>
            <input name="email" type="email" className={`register-field ${message !== '' ? 'register-field.error' : ''}`} placeholder="Email"
              ref={(c) => registerEmail = c}/>
            <input name="password" type="password" className={`register-field ${message !== '' ? 'register-field.error' : ''}`} placeholder="Password"
              ref={(c) => registerPassword = c}/>
            <div className="buttons-container">
              <button name="registerButton" className="register-button" value="Register"
                onClick={doRegister}>Register</button>
            </div>
          </form>
      <span id="registerResult" className='registerResult'>{message}</span>
    </div>
  );
};

export default Register;
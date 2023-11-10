import React, { useState } from 'react';
import './Register.css';

function Register()
{

  var registerFirstName;
  var registerLastName;
  var registerLogin;
  var registerPassword;
  var registerEmail;

  const [message,setMessage] = useState('');

  const app_name = 'ratemyride-3b8d03447308'
  function buildPath(route)
  {
    if (process.env.NODE_ENV === 'production') 
    {
        return 'https://' + app_name +  '.herokuapp.com/' + route;
    }
    else
    {        
        return 'http://localhost:5055/' + route;
    }
  }

  const doRegister = async event => 
  {
      event.preventDefault();

      var obj = {firstName:registerFirstName.value,lastName:registerLastName.value,login:registerLogin.value,password:registerPassword.value};
      var js = JSON.stringify(obj);

      try
      {    
          const response = await fetch(buildPath('api/register'),
              {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});

          var res = JSON.parse(await response.text());

          if( res.id <= 0 )
          {
              setMessage('Account not created');
          }
          else
          {
              /*var user = {firstName:res.firstName,lastName:res.lastName,id:res.id}
              localStorage.setItem('user_data', JSON.stringify(user));

              setMessage('');
              window.location.href = '/cards';*/
          }
      }
      catch(e)
      {
          alert(e.toString());
          return;
      }    
  };

  return (
    <div className="formBox">
      <form onSubmit={doRegister} id="login" className="input-group">
        <span id="inner-title">Register</span>
        <input name="firstName" type="text" placeholder="First Name"
          ref={(c) => registerFirstName = c}/>
        <input name="lastName" type="text" placeholder="Last Name"
          ref={(c) => registerLastName = c}/>
        <input name="username" type="text" placeholder="Username"
          ref={(c) => registerLogin = c}/>
        <input name="password" type="password" placeholder="Password"
          ref={(c) => registerPassword = c}/>
        <input name="email" type="email" placeholder="Email"
          ref={(c) => registerEmail = c}/>
        <button name="registerButton" type="button" className="buttons" value="Register"
          onClick={doRegister}>Register</button>
      </form>
      <span id="registerResult">{message}</span>
    </div>
  );
};

export default Register;
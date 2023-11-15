import React, { useState } from 'react';
import './Login.css';

function Login()
{
    var loginEmail;
    var loginPassword;

    const [message,setMessage] = useState('');

    const app_name = 'ratemyride-3b8d03447308'
    function buildPath(route)
    {
        if (process.env.NODE_ENV === 'production')
        {
            return 'https://' + app_name + '.herokuapp.com/' + route;
        }
        else
        {
            return 'http://localhost:5055/' + route;
        }
    }

    const doLogin = async event => 
    {
        event.preventDefault();

        var obj = {email:loginEmail.value,password:loginPassword.value};
        var js = JSON.stringify(obj);

        try
        {      
            const response = await fetch(buildPath('api/login'),
                {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});

            var res = JSON.parse(await response.text());

            if( res.id <= 0 )
            {
                setMessage('Email/Password combination incorrect');
            }
            else
            {
                var user = {firstName:res.firstName,lastName:res.lastName,id:res.id}
                localStorage.setItem('user_data', JSON.stringify(user));

                setMessage('');
                window.location.href = '/theme-parks';
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
        <form id="login" className="input-group">
            <span id="inner-title">Login</span><br />
            <input type="text" id="loginEmail" placeholder="Email"
                required ref={(c) => loginEmail = c}/><br />
            <input type="password" id="loginPassword" placeholder="Password" required
                ref={(c) => loginPassword = c}/><br />
            <button type="button" id="loginButton" className="buttons" value = "Login"
                onClick={doLogin}>Login</button>
        </form>
        <span id="loginResult">{message}</span>
        </div>
    );
};

export default Login;

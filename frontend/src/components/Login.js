import React, { useState } from 'react';
import '../App.css';
import './Login.css';
import 'react-router-dom';

function Login()
{
    var loginEmail;
    var loginPassword;

    const [message,setMessage] = useState('');

    const doLogin = async event => 
    {
        event.preventDefault();

        let bp = require('./Path.js');

        var obj = {email:loginEmail.value,password:loginPassword.value};
        var js = JSON.stringify(obj);

        var storage = require('../tokenStorage.js');

        try
        {      
            const response = await fetch(bp.buildPath('api/login'),
                {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});
            var res = JSON.parse(await response.text());

            if( res.error )
            {
                setMessage(res.error);
            }
            else
            {
                storage.storeToken(res);
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
        <form id="login" className="input-group" onSubmit={doLogin}>
            <span id="inner-title">Login</span><br />
            <input type="text" id="loginEmail" className="login-field" placeholder="Email"
                required ref={(c) => loginEmail = c}/><br />
            <input type="password" id="loginPassword" className="login-field" placeholder="Password" required
                ref={(c) => loginPassword = c}/><br />
            <div className="buttons-container">
                <button type="button" id="loginButton" className="buttons" value = "Login"
                    onClick={doLogin}>Login</button>
            </div>
        </form>
        <span id="loginResult">{message}</span>
        </div>
    );
};

export default Login;

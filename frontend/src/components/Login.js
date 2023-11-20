import React, { useState } from 'react';
import './Login.css';
import 'react-router-dom';

function Login()
{
    let bp = require('./Path.js');
    
    var loginEmail = '';
    var loginPassword = '';

    const [message,setMessage] = useState('');

    const doLogin = async event => 
    {
        event.preventDefault();

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

    const handlePasswordReset = async () => {
        try {
            const response = await fetch(bp.buildPath('api/forgotPassword'), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ search: loginEmail.value })
            });

            const data = await response.json();
            if (data.error) {
                setMessage(data.error);
            } else {
                setMessage('Password email has been sent. Please check your email.')
            }
        } catch (error) {
            setMessage('Error resetting password. Please try again later');
        }
    };

    const emailFieldClass = message ? 'login-field error' : 'login-field';
    const passwordFieldClass = message ? 'login-field error' : 'login-field';

    return (
        <div className="formBox">
            <form id="login" className="input-group" onSubmit={doLogin}>
                <span id="inner-title">Login</span><br />
                <input type="text" id="loginEmail" className={`login-field ${message !== '' ? 'login-field.error' : ''}`} placeholder="Email"
                    required ref={(c) => loginEmail = c}/><br />
                <input type="password" id="loginPassword" className={`login-field ${message !== '' ? 'login-field.error' : ''}`} placeholder="Password" required
                    ref={(c) => loginPassword = c}/><br />
                <button type="submit"  id="loginButton" className="login-button" value = "Login"
                    onClick={doLogin}>Login</button>
                {/*<button type="button" className="reset-button" onClick={handlePasswordReset}>
                    Forgot Password?
                </button>*/}
                <span id="loginResult" className='login-result'>{message}</span>
            </form>
        </div>
    );
};

export default Login;

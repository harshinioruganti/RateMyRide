import React, { useState, useEffect } from 'react';
import 'react-router-dom';
import { Link } from 'react-router-dom';

function PassReset() {
    let bp = require('./Path.js');

    const [message, setMessage] = useState('');
    const [password, setPassword] = useState('');

    const urlParams = new URLSearchParams(window.location.search);
    const passToken = urlParams.get('token');

    const doPassReset = async () => {
        let obj = { password: password, passToken: passToken };
        let js = JSON.stringify(obj);

        try {
            const response = await fetch(bp.buildPath('api/resetPassword'), {
                method: 'POST',
                body: js,
                headers: { 'Content-Type': 'application/json' }
            });
            var res = JSON.parse(await response.text());

            if (res.error) {
                setMessage(res.error); //"Validation unsuccessful"
            }
            else {
                setMessage('Password reset successfully.');
            }
        } catch (e) {
            alert(e.toString());
            setMessage('Error resetting password. Please try again later.');
            return;
        }
    };

    useEffect(() => {
        doPassReset();
    }, []);

    return (
        <div>
            <h2>Password Reset</h2>
            <input
                type="password"
                placeholder="Enter new password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <button onClick={handleResetPassword}>Reset Password</button>
            <p>{message}</p>
            <br/>
            <br/>
            <Link to="/" >
                  <button className="buttons"> Go Back to Login </button>
            </Link>
        </div>
    );
}

export default PassReset;

import React, { useState, useEffect } from 'react';
import '../App.css';
import './Login.css';
import 'react-router-dom';
import { Link } from 'react-router-dom';

function EmailVerif() {
    let bp = require('./Path.js');

    const [message, setMessage] = useState('');
    const urlParams = new URLSearchParams(window.location.search);
    const emailToken = urlParams.get('token');

    const doEmailVerif = async () => {
        let obj = { emailToken: emailToken };
        let js = JSON.stringify(obj);

        try {
            const response = await fetch(bp.buildPath('api/emailVerif'), {
                method: 'POST',
                body: js,
                headers: { 'Content-Type': 'application/json' }
            });
            var res = JSON.parse(await response.text());

            if (res.error) {
                setMessage(res.error); //"Validation unsuccessful"
            }
        } catch (e) {
            alert(e.toString());
            return;
        }
    };

    useEffect(() => {
        doEmailVerif();
    }, []); // Run the verification on component mount

    return (
        <div className='hero-container'>
            <h1>Email verified successfully</h1>
            <p>Because Thrill is Important</p>
            <div className='hero-btns'>
                <Link to="/" >
                  <button className="buttons"> Go to Login </button>
                </Link>
            </div>
        </div>
    );
}

export default EmailVerif;

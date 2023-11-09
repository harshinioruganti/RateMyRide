import React, { useState } from "react";
import Axios from 'axios';

// Components
import ReusableAuthForm from '../../Components/Form/ReusableAuthForm';

const URL = 'https://ratemyride-3b8d03447308.herokuapp.com/'

export default RegisterScreen = ({ navigation }) => {
    // init state
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        login: '',
        password: '',
    })
    // Input Fields
    const inputFields = [
        {
            placeholder: 'First Name',
            value: formData.firstName,
            inputType: 'text',
            name: 'firstName',
        },
        {
            placeholder: 'Last Name',
            value: formData.lastName,
            inputType: 'text',
            name: 'lastName',
        },
        {
            placeholder: 'Email ID',
            value: formData.email,
            inputType: 'email-address',
            name: 'email',
        },
        {
            placeholder: 'Username',
            value: formData.login,
            inputType: 'text',
            name: 'login',
        },
        {
            placeholder: 'Password',
            value: formData.password,
            inputType: 'password',
            name: 'password',
        },
    ];
    const mainForm = {
        onPress: handleSignUp,
        title: 'Sign Up',
    }
    const altForm = {
        onPress: () => navigation.navigate('LOGIN'),
        title: 'Login',
        text: "Already have an account?"
    }

    const handleUpdateFormData = (fieldName, value) => setFormData({...formData, [fieldName]: value,}); 

    // Async function
    const handleSignUp = async () => {
        const data = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            login: formData.login,
            password: formData.password,
        }
        try {
            // At some point you need to implement an email verification.
            const response = await Axios.post(URL + 'api/register', data, {
                Headers: { 'Content-type': 'application/json' }
            });

            if (response.data.error) {
                console.log("API ERROR");
            }
            else {
                console.log("Success");
                // Reset form values
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    login: '',
                    password: '',
                });
            }
        }
        catch(err) {
            alert(err.toString());
            return;
        }
    };

    return (
        <ReusableAuthForm 
            inputFields={ inputFields }
            mainForm={ mainForm }
            altForm={ altForm }
            updateFormData={ handleUpdateFormData }
            onFormSubmit={ handleSignUp }
        />
    )
}
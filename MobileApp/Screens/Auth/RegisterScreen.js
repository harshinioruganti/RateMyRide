import React, { useState } from "react";
import { View, ImageBackground, Text } from "react-native";
import Axios from 'axios';

// Components
import ReusableAuthForm from '../../Components/Form/ReusableAuthForm';

const URL = 'http://localhost:5000/api/register'

export default RegisterScreen = ({ navigation }) => {
    // Define Empty States 
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    // Update the states
    const updateFirstName = (text) => setFirstName(text);
    const updateLastName = (text) => setLastName(text);
    const updateEmail = (text) => setEmail(text);
    const updateLogin = (text) => setLogin(text);
    const updatePassword = (text) => setPassword(text);

    // Input Fields
    const inputFields = [
        {
            placeholder: 'First Name',
            value: firstName,
            onChangeText: updateFirstName,
            inputType: 'text',
        },
        {
            placeholder: 'Last Name',
            value: lastName,
            onChangeText: updateLastName,
            inputType: 'text',
        },
        {
            placeholder: 'Email ID',
            value: email,
            onChangeText: updateEmail,
            inputType: 'email-address',
        },
        {
            placeholder: 'Username',
            value: login,
            onChangeText: updateLogin,
            inputType: 'text',
        },
        {
            placeholder: 'Password',
            value: password,
            onChangeText: updatePassword,
            inputType: 'password',
        },
    ]

    const mainForm = {
        onPress: handleSignUp,
        title: 'Sign Up',
    }

    const altForm = {
        onPress: () => navigation.navigate('LOGIN'),
        title: 'Login',
        text: "Already have an account?"
    }

    // Async function
    const handleSignUp = async () => {
        
        try {
            const userData = {
                firstName,
                lastName,
                login,
                password,
                email,
            };
            console.log(URL)
            console.log("before await")
            const response = await Axios.post(URL, userData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log("after await")
            if (response.status === 200) {
                console.log("Success");
                // You can perform additional actions on success, such as navigating to another screen.
            } else {
                console.log("Error");
                // Handle errors here
            }
        }
        catch(error)
        {
            console.error('An error occurred:', error);
        }
    };

    return (
        <ReusableAuthForm 
            inputFields={ inputFields }
            mainForm={ mainForm }
            altForm={ altForm }
        />
    )
}
import React, { useState } from "react";
import Axios from 'axios';

// Components
import ReusableAuthForm from "./Components/ReusableAuthForm";
import { Alert } from "react-native";

const URL = 'https://ratemyride-3b8d03447308.herokuapp.com/'

export default RegisterScreen = ({ navigation }) => {
    // init state
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    })
    
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // Input Fields
    const inputFields = [
        {
            placeholder: 'First Name',
            value: formData.firstName,
            inputType: 'default',
            name: 'firstName',
        },
        {
            placeholder: 'Last Name',
            value: formData.lastName,
            inputType: 'default',
            name: 'lastName',
        },
        {
            placeholder: 'Email ID',
            value: formData.email,
            inputType: 'email-address',
            name: 'email',
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

    const handleUpdateFormData = (fieldName, value) => setFormData({ ...formData, [fieldName]: value }); 

    const handleSignUp = async () => {
        const data = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password,
        }
        try {
            const response = await Axios.post(URL + 'api/mobile/register', data, {
                headers: { 'Content-type': 'application/json' }
            });

            if (response.status !== 200) {
                console.log(response.data.error);
                setErrorMessage(response.data.error);
                setSuccessMessage('');
                Alert.alert('Error: ', response.data.error);
            }
            else {
                console.log("Success");
                // Reset form values
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                });
                // Set message to true that will display a message on 
                // the form page
                Alert.alert('Success', 'Account created successfully.');
            }
        }
        catch(err) {
            setErrorMessage(err.toString());
            setSuccessMessage('');
            Alert.alert('Error', err.toString());
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
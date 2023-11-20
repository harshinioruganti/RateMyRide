import React, { useState } from "react";
import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import Axios from 'axios';
// Components
import ReusableAuthForm from "./Components/ReusableAuthForm";
import { login } from "../../Store/AuthSlice";

const URL1 = 'https://ratemyride-3b8d03447308.herokuapp.com/'

export default LoginScreen = ({ navigation }) => 
{
    // Init State
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    })
    const dispatch = useDispatch();
    // Update states
    const handleUserDataUpdates = (fieldName, value) => setUserData({ ...userData, [fieldName]: value })

    const handleLogin = async () => {
        const user = {
            email: userData.email,
            password: userData.password,
        };
        try {
            const response = await Axios.post(URL1+ 'api/mobile/login', user, {
                headers: { 'Content-type': 'application/json' }
            });

            if (response.status !== 200) 
            {
                // console.log(response.data.error);
                Alert.alert('Error: ', response.data.error);
            }
            else if (response.data.userID === -1) {
                Alert.alert('Error logging in: Email or Password Incorrect!');
                return;
            }
            else 
            {
                dispatch(login({ 
                    loggedIn: true, 
                    firstName: response.data.firstName, 
                    lastName: response.data.lastName,
                    userID: response.data.userID,
                }))
                setUserData({
                    email: '',
                    password: '',
                });
                Alert.alert('Success, You are now logged in!');
            }
        }
        catch(err) {
            console.log(err);
        }
    };

    const inputFields = [
        {
            placeholder: 'Email ID',
            value: userData.email,
            inputType: 'email-address',
            name: 'email',
        },
        {
            placeholder: 'Password',
            value: userData.password,
            inputType: 'password',
            name: 'password',
        },
    ]

    const mainForm = {
            onPress: handleLogin,
            title: 'Login',
        }
        
    const altForm = {
            onPress: () => navigation.navigate('REGISTER'),
            title: 'Sign Up',
            text: "Don't Have an account?"
        }

    return (
        <ReusableAuthForm 
            inputFields={ inputFields }
            mainForm={ mainForm }
            altForm={ altForm }
            updateFormData={ handleUserDataUpdates }
            onFormSubmit={ handleLogin }
        />
    )
}
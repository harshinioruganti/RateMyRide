import React, { useState } from "react";

// Components
import ReusableAuthForm from "../../Components/Form/ReusableAuthForm";

const URL = 'https://cop4331-ratemyride-fd93630d9ccb.herokuapp.com/'

export default LoginScreen = ({ navigation }) => 
{
    // Init State
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    // Update states
    const updateLogin = (text) => setLogin(text);
    const updatePassword = (text) => setPassword(text);

    const handleLogin = async () => {

        // const user = {
        //     username: loginName,
        //     password: loginPassword,
        // };
        // const js = JSON.stringify(user);
        // // URL = 'https://cop4331-ratemyride-fd93630d9ccb.herokuapp.com/'
        // try {
        //     const response = await fetch(URL + 'api/register', {
        //         method: 'POST',
        //         body: js,
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //     });

        //     const res = JSON.parse(await response.text());

        //     if (res.error) {
        //         console.log("SHUCKS")
        //     } else {
        //         console.log("Success")
        //     }
        // } catch (error) {
        //     console.log("Error: " + error)
        // }
    };

    const inputFields = [
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
        />
    )
}
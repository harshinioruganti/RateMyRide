import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../Store/AuthSlice.js';
// Styles
import HomeScreenStyle from './HomeScreenStyle';
import TouchableTextBtn from '../../Components/Button/TouchableTextButton.js';
// Image
import logo from '../../assets/Img/logo.png'

export default HomeScreen = ({ navigation }) =>
{

    const isLoggedIn = useSelector(state => state.auth.loggedIn);
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout()); // Dispatch the logout action only when the button is pressed
    };
    return (
        <View style={ HomeScreenStyle.container}>
            <Image source={ logo } resizeMode="contain" />

            {/* TITLE  */}
            <Text style={ HomeScreenStyle.title }>RATE MY RIDE</Text>
            {/* Description  */}
            <View style={ HomeScreenStyle.descriptionWrapper }>
                <Text>Description</Text>
            </View>

            <View style={ HomeScreenStyle.btnContainer }>
                {/* Only render if the user is not logged in  */}
                <View style={ HomeScreenStyle.loginRegisterContainer}>
            
                    { !isLoggedIn && <TouchableTextBtn
                        viewStyle={ HomeScreenStyle.loginRegisterBtnContainer }
                        touchableOpacStyle={ HomeScreenStyle.loginRegisterBtn }
                        onPress={ () => navigation.navigate('LOGIN')}
                        title={ 'LOGIN' }
                    /> }
                    { !isLoggedIn && <TouchableTextBtn
                        viewStyle={ HomeScreenStyle}
                        touchableOpacStyle={ HomeScreenStyle.loginRegisterBtn }
                        onPress={ () => navigation.navigate('REGISTER')}
                        title={ 'REGISTER' }
                    /> }
                
                    {/* Logout BTN, only shows when logged in */}
                    { isLoggedIn && <TouchableTextBtn 
                        viewStyle={ HomeScreenStyle.guestBtnContainer }
                        touchableOpacStyle={ HomeScreenStyle.logoutBtn }
                        onPress={ handleLogout }
                        title={ 'Logout' }
                    /> }
                </View> 
            </View>
        </View>
    )
}  
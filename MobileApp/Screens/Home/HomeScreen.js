import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
// Components
import Header from '../../Components/Header/Header';
// Styles
import HomeScreenStyle from './HomeScreenStyle';
import TouchableTextBtn from '../../Components/Button/TouchableTextButton.js';
// Image
import logo from '../../assets/Img/logo.png'

export default HomeScreen = ({ navigation }) =>
{
    const [loggedIn, setLoggedIn] = useState(false);
    
    return (
        <View style={ HomeScreenStyle.container}>
            { loggedIn && <Header /> }
            <Image source={ logo } resizeMode="contain" />

            {/* TITLE  */}
            <Text style={ HomeScreenStyle.title }>RATE MY RIDE</Text>
            {/* Description  */}
            <View style={ HomeScreenStyle.descriptionWrapper }>
                <Text>Description</Text>
            </View>

            <View style={ HomeScreenStyle.btnContainer }>
                <View style={ HomeScreenStyle.loginRegisterContainer}>
                    {/* LOGIN BTN  */}
                    <TouchableTextBtn
                        viewStyle={ HomeScreenStyle.loginRegisterBtnContainer }
                        touchableOpacStyle={ HomeScreenStyle.loginRegisterBtn }
                        onPress={ () => navigation.navigate('LOGIN')}
                        title={ 'LOGIN' }
                    />
                    {/* REGISTER BTN  */}
                    <TouchableTextBtn
                        viewStyle={ HomeScreenStyle}
                        touchableOpacStyle={ HomeScreenStyle.loginRegisterBtn }
                        onPress={ () => navigation.navigate('REGISTER')}
                        title={ 'REGISTER' }
                    />
                </View>
                {/* GUEST BTN  */}
                <TouchableTextBtn 
                    viewStyle={ HomeScreenStyle.guestBtnContainer }
                    touchableOpacStyle={ HomeScreenStyle.guestBtn }
                    onPress={ () => '' }
                    title={ 'Continue As Guest!' }
                />
            </View>
        </View>
    )
}  
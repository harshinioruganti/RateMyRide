import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
// Styles
import HeaderStyles from './HeaderStyles';

export default Header = () => 
{
    const loggedIn = useSelector(state => state.auth.loggedIn)
    const firstName = useSelector(state => state.auth.firstName);
    const lastName = useSelector(state => state.auth.lastName);

    return (
        <View style={HeaderStyles.container}>
            <View style={HeaderStyles.leftContainer}>
                {/* User Icon */}
                <Ionicons 
                    style = {HeaderStyles.icon}
                    name={loggedIn ? "person" : "help-circle"}
                    size={75}
                />
                <View style={HeaderStyles.msgContainer}>
                    <Text style={HeaderStyles.welcomeText}>Rate My Ride,</Text>
                    { 
                        loggedIn 
                            ? 
                            <Text style={HeaderStyles.userText}>{ firstName + ' ' + lastName }</Text> 
                            : 
                            <Text 
                                style={HeaderStyles.userText}
                                numberOfLines={2}
                                lineBreakMode={'tail'}
                            >
                                Guest
                            </Text> 
                    }
                </View>
            </View>
        </View>
    )
}

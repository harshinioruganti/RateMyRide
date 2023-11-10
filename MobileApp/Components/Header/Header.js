import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Styles
import HeaderStyles from './HeaderStyles';

export default Header = () => 
{
    // Will be transformed into redux later
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLoginPress = () => setLoggedIn(!loggedIn);

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
                    <Text style={HeaderStyles.welcomeText}>Welcome,</Text>
                    { 
                        loggedIn 
                            ? 
                            <Text style={HeaderStyles.userText}>Vincent DiPietrantonio</Text> 
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

import React from "react";
import { View, StyleSheet } from 'react-native';

export default Card = ({ children, styles }) => 
{
    return (
        <View style={ styles }>
            {children}
        </View>
    )
}

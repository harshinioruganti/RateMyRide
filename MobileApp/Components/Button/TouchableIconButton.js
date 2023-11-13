import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default TouchableIconButton = ({ 
        viewStyle,
        touchableOpacStyle, 
        onPress,
        icon,
        iconSize
    }) => {
    return (
        <View style={ viewStyle }>
            <TouchableOpacity style={ touchableOpacStyle } onPress={ onPress } activeOpacity={ 0.7 }>
                <Ionicons name={ icon } size={ iconSize } />
            </TouchableOpacity>
        </View>
    )
}

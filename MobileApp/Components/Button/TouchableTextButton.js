import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

export default TouchableTextBtn = ({ 
        viewStyle, 
        touchableOpacStyle, 
        titleStyle,
        onPress, 
        title, 
        icon,
    }) => {
    return (
        <View style={ viewStyle }>
            <TouchableOpacity style={ touchableOpacStyle } onPress={ onPress } activeOpacity={ 0.7 }>
                <Text style={ titleStyle }>{ title }</Text>
            </TouchableOpacity>
        </View>
    )
}

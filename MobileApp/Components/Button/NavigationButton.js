import React from "react";
import { Text } from 'react-native';

// Components
import Card from "../Cards/Card";
import TouchableTextButton from "./TouchableTextButton";

const NavigationButton = ({ 
    cardStyle,
    textStyle,
    touchableTextStyle,
    titleStyle,
    onPress,
    title,
    text,
}) => {

    return (
        <Card styles={ cardStyle }>
            <Text style={ textStyle }>{ text }</Text>
            <TouchableTextButton 
                titleStyle={ titleStyle }
                touchableOpacStyle={ touchableTextStyle }
                onPress={ onPress }
                title={ title }
            />
        </Card>
    )
}

export default NavigationButton;
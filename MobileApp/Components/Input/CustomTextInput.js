import React from 'react';
import { View, TextInput } from 'react-native';

const CustomTextInput = ({ placeHolder, value, onChangeText, viewStyle, inputStyle, inputType }) =>
{
    return (

            <View style={ viewStyle }>
                <TextInput
                    style={ inputStyle }
                    placeholder={ placeHolder }
                    placeholderTextColor='black'
                    value={ value }
                    onChangeText={ onChangeText }
                    keyboardType={ inputType }
                    secureTextEntry={ inputType === 'password' }
                />
            </View>
    )
}

export default CustomTextInput;
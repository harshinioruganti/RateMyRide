import React from "react";
import { ImageBackground, Text } from 'react-native';
import { useSelector } from 'react-redux';
// Styling
import AuthStyling from "../AuthStyling";
import KeyBoardAvoidWrapper from "../../../Components/Keyboard/KeyBoardAvoiderWrapper";

// Components
import CustomTextInput from "../../../Components/Input/CustomTextInput";
import TouchableTextButton from "../../../Components/Button/TouchableTextButton";
import Card from "../../../Components/Cards/Card";
import NavigationButton from '../../../Components/Button/NavigationButton';

const ReusableAuthForm = ({ inputFields, mainForm, wrongInfo, altForm, successMessage, updateFormData, onFormSubmit }) => {
    const isLoggedIn = useSelector(state => state.auth.loggedIn);
    return (
        <ImageBackground
            source={ require('../../../assets/Img/RegisterLoginBackground.jpg') }
            style={ AuthStyling.background }
        >
            <KeyBoardAvoidWrapper>
                {/* Reusable Form  */}
                <Card styles={ AuthStyling.container}>
                    { wrongInfo && (
                        <Text style={{ fontSize: 22, }}>Email/Password Incorrect!</Text>
                    )}
                    { isLoggedIn && (
                        <Text style={{ fontSize: 22, }}>You are now logged in!</Text>
                    )}
                    { successMessage && (
                        <Text style={{ fontSize: 22, }}>Account Created, Please Login!</Text>
                    )}
                    {inputFields.map((field, index) => (
                        <CustomTextInput 
                            key={ index }
                            placeHolder={ field.placeholder }
                            value={ field.value }
                            onChangeText={ (text) => updateFormData(field.name, text) }
                            inputType={ field.inputType }
                            viewStyle={ AuthStyling.inputContainer }
                            inputStyle={ AuthStyling.input }
                            secureTextEntry={ field.isPassword }
                            require
                        />
                    ))}
                    { !isLoggedIn && (<TouchableTextButton 
                        touchableOpacStyle={ AuthStyling.signUpBtn }
                        onPress={ onFormSubmit }
                        title={ mainForm.title }
                        titleStyle={ AuthStyling.titleStyle }
                    />)}
                    <NavigationButton
                        cardStyle={ AuthStyling.altAuthContainer }
                        textStyle={ AuthStyling.altText }
                        touchableTextStyle={ AuthStyling.touchableOpacStyle }
                        titleStyle={ AuthStyling.titleStyle }
                        onPress={ altForm.onPress }
                        title={ altForm.title }
                        text={ altForm.text }
                    />
                </Card>
            </KeyBoardAvoidWrapper>
        </ImageBackground>
    )
}

export default ReusableAuthForm;

import React from "react";
import { ImageBackground } from 'react-native';
import { useSelector } from 'react-redux';
// Styling
import AuthStyling from "../AuthStyling";
import KeyBoardAvoidWrapper from "../../../Components/Keyboard/KeyBoardAvoiderWrapper";

// Components
import CustomTextInput from "../../../Components/Input/CustomTextInput";
import TouchableTextButton from "../../../Components/Button/TouchableTextButton";
import Card from "../../../Components/Cards/Card";
import NavigationButton from '../../../Components/Button/NavigationButton';

const ReusableAuthForm = ({ inputFields, mainForm, altForm, updateFormData, onFormSubmit }) => {
    const isLoggedIn = useSelector(state => state.auth.loggedIn);
    return (
        <ImageBackground
            source={ require('../../../assets/Img/RegisterLoginBackground.jpg') }
            style={ AuthStyling.background }
        >
            <KeyBoardAvoidWrapper>
                {/* Reusable Form  */}
                <Card styles={ AuthStyling.container}>
                    {inputFields.map((field, index) => (
                        <CustomTextInput 
                            key={ index }
                            placeHolder={ field.placeholder }
                            value={ field.value }
                            onChangeText={ (text) => updateFormData(field.name, text) }
                            inputType={ field.inputType }
                            viewStyle={ AuthStyling.inputContainer }
                            inputStyle={ AuthStyling.input }
                            require
                        />
                    ))}
                    <TouchableTextButton 
                        touchableOpacStyle={ AuthStyling.signUpBtn }
                        onPress={ onFormSubmit }
                        title={ mainForm.title }
                        titleStyle={ AuthStyling.titleStyle }
                        disable={ isLoggedIn }
                    />
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

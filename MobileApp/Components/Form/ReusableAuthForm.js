import React from "react";
import { ImageBackground } from 'react-native';

// Styling
import AuthStyling from "../../Screens/Auth/AuthStyling";
import KeyBoardAvoidWrapper from "../Keyboard/KeyBoardAvoiderWrapper";

// Components
import CustomTextInput from "../Input/CustomTextInput";
import TouchableTextButton from "../Button/TouchableTextButton";
import Card from "../Cards/Card";
import NavigationButton from '../Button/NavigationButton';

const ReusableAuthForm = ({ inputFields, mainForm, altForm }) => {

    return (
        <ImageBackground
            source={ require('../../assets/Img/RegisterLoginBackground.jpg') }
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
                            onChangeText={ field.onChangeText }
                            inputType={ field.inputType }
                            viewStyle={ AuthStyling.inputContainer }
                            inputStyle={ AuthStyling.input }
                        />
                    ))} 
                    <TouchableTextButton 
                        touchableOpacStyle={ AuthStyling.signUpBtn }
                        onPress={ mainForm.onPress }
                        title={ mainForm.title }
                        titleStyle={ AuthStyling.titleStyle }
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

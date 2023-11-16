import React from "react";
import { StatusBar } from "expo-status-bar";

const CustomStatusBar = ({ contentColor, backgroundColor}) => {
    return (
        <StatusBar
            barStyle={ contentColor } // Set the icon color to light
            backgroundColor={ backgroundColor } // Set the background color to dark
        /> 
    )
}

export default CustomStatusBar;
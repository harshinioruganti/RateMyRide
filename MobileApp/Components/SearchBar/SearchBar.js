import React, { useState } from "react";

// Style imports
import SearchBarStyle from "./SearchBarStyle";

import CustomTextInput from '../Input/CustomTextInput';
import TouchableIconButton from "../Button/TouchableIconButton";
import { View } from "react-native";

const SearchBar = ({ containerStyle, leftSideContainerStyle, onSearch, placeholder }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (text) => {
        setSearchTerm(text)
        onSearch(searchTerm);
    }

    return (
        // Styles for Card is CardStyle.searchBar
        <View style={ containerStyle }>
            <CustomTextInput 
                viewStyle={ leftSideContainerStyle }
                inputStyle={ SearchBarStyle.input }
                inputType={ 'default' }
                placeHolder={ placeholder }
                onChangeText={ text => handleSearch(text) }
                value={ searchTerm }
            />
            <TouchableIconButton 
                viewStyle={ SearchBarStyle.rightSideContainer }
                // onPress={ handleSearch }
                icon={ 'search' }
                iconSize={ 45 }
            />
        </View>
    )
}

export default SearchBar;
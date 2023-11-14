import React, { useState } from "react";

// Style imports
import SearchBarStyle from "./SearchBarStyle";

import CustomTextInput from '../Input/CustomTextInput';
import TouchableIconButton from "../Button/TouchableIconButton";
import { View } from "react-native";

export default SearchBar = ({ containerStyle, leftSideContainerStyle, onSearch, placeholder }) => {
    const [search, setSearch] = useState('');

    // update state
    const onChangeSearch = (search) => setSearch(search);

    return (
            // Styles for Card is CardStyle.searchBar
            <View style={ containerStyle }>
                <CustomTextInput 
                    viewStyle={ leftSideContainerStyle }
                    inputStyle={ SearchBarStyle.input }
                    inputType={ 'default' }
                    placeHolder={ placeholder }
                    onChangeText={ onChangeSearch }
                    value={ search }
                />
                <TouchableIconButton 
                    viewStyle={ SearchBarStyle.rightSideContainer }
                    onPress={ onSearch }
                    icon={ 'search' }
                    iconSize={ 45 }
                />
            </View>
    )
}
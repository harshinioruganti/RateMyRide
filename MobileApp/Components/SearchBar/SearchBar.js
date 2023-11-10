import React, { useState } from "react";

// Style imports
import SearchBarStyle from "./SearchBarStyle";

// Components
import Card from "../Cards/Card";
import CustomTextInput from '../Input/CustomTextInput';
import TouchableIconButton from "../Button/TouchableIconButton";

export default SearchBar = ({ onSearch, style }) => {
    const [search, setSearch] = useState('');

    // update state
    const onChangeSearch = (search) => setSearch(search);

    return (
            // Styles for Card is CardStyle.searchBar
            <Card styles={ style }>
                {/* Style for textInput view container is SearchBar.leftSideContainer  */}
                {/* Style for textInput is SearchBarStyle.input  */}
                {/* Style for icon is SearchBarStyle.icon  */}
                <CustomTextInput 
                    viewStyle={ SearchBarStyle.leftSideContainer }
                    inputStyle={ SearchBarStyle.input }
                    inputType={ 'text' }
                    placeHolder={ 'SEARCH' }
                    onChangeText={ onChangeSearch }
                    value={ search }
                />
                <TouchableIconButton 
                    viewStyle={ SearchBarStyle.rightSideContainer }
                    onPress={ onSearch }
                    icon={ 'search' }
                    iconSize={ 45 }
                />
            </Card>
    )
}
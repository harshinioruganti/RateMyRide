import React from 'react';
import {TouchableWithoutFeedback, Keyboard } from 'react-native';

// Components
import Card from '../../Components/Cards/Card';
import Header from '../../Components/Header/Header';
import SearchBar from '../../Components/SearchBar/SearchBar';

// Styles for Card
import { CardStyle } from '../../Components/Cards/CardStyles';

export default RidesScreen = ({ navigation }) =>
{
    return (
        <TouchableWithoutFeedback onPress={ Keyboard.dismiss } accessible={ false } >
            <Card styles={ CardStyle.background }>
                {/* Header  */}
                <Header />
                {/* SearchBar  */}
                <SearchBar 
                    style={ CardStyle.searchBar }
                    onSearch={ () => console.log("Search btn clicked")}
                />
                {/* Rides  */}
            </Card>
        </TouchableWithoutFeedback>
    )
}
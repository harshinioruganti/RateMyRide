import React from 'react';
// Components
import Card from '../../Components/Cards/Card';
import Header from '../../Components/Header/Header';
import SearchBar from '../../Components/SearchBar/SearchBar';
import Accordion from './Components/Accordion/Accordion';
// Styles for Card
import { CardStyle } from '../../Components/Cards/CardStyles';
import SearchBarStyle from '../../Components/SearchBar/SearchBarStyle';
import { View } from 'react-native';

export default RidesScreen = () => {
    return (        
            <Card styles={ CardStyle.background }>
                <View style={{ height: 75 }}></View>
                <Accordion />
            </Card>
    )
}
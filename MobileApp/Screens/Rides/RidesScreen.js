import React from 'react';
// Components
import Card from '../../Components/Cards/Card';
import Header from '../../Components/Header/Header';
import SearchBar from '../../Components/SearchBar/SearchBar';
import Accordion from '../../Components/Accordion/Accordion';

// Styles for Card
import { CardStyle } from '../../Components/Cards/CardStyles';

export default RidesScreen = ({ navigation }) =>
{
    return (        
            <Card styles={ CardStyle.background }>
                {/* Header  */}
                <Header />
                {/* SearchBar  */}
                    <SearchBar 
                        style={ CardStyle.searchBar }
                        onSearch={ () => console.log("Search btn clicked")}
                    />
                {/* Accordion holding parks and rides*/}
                <Accordion />
            </Card>
    )
}
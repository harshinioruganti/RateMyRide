import React from 'react';
// Components
import Card from '../../Components/Cards/Card';
import Header from '../../Components/Header/Header';
import SearchBar from '../../Components/SearchBar/SearchBar';
import Accordion from './Components/Accordion/Accordion';

// Styles for Card
import { CardStyle } from '../../Components/Cards/CardStyles';
import SearchBarStyle from '../../Components/SearchBar/SearchBarStyle';

export default RidesScreen = ({ navigation }) => {
    return (        
            <Card styles={ CardStyle.background }>
                {/* Header  */}
                <Header />
                {/* SearchBar  */}
                    <SearchBar 
                        containerStyle={ SearchBarStyle.searchBar }
                        leftSideContainerStyle={ SearchBarStyle.leftSideContainer }
                        placeholder={ 'SEARCH THEMEPARK '}
                        onSearch={ () => console.log("Search btn clicked")}
                    />
                {/* Holds main code for the apps functionality*/}
                <Accordion />
            </Card>
    )
}
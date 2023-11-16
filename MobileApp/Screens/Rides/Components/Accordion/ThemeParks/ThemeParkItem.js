import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { rides } from "../../../../../tests";
// Components
import RidesList from '../Rides/RideList';
import SearchBar from '../../../../../Components/SearchBar/SearchBar';
// Style
import SearchBarStyle from "../../../../../Components/SearchBar/SearchBarStyle";

const ThemeParkItem = ({ item, index }) => {
    // Handle park click (reveals the rides)
    const [activePark, setActivePark] = useState(false);

    // const backgroundColor = index % 3 === 0 ? '#fc7324' : index % 3 === 1 ? '#58ad93' : '#2fb4c2';
    const backgroundColor = index % 3 === 0 ? '#78c2e2' : index % 3 === 1 ? '#6eb476' : '#faefc2';


    const handleThemeParkPress = () => {
        setActivePark(!activePark);
    }

    return (
        <>
            <TouchableOpacity style={{ flex: 1 }} activeOpacity={ 0.7 } onPress={ handleThemeParkPress } >
                <View style={{ ...styles.parkContainer, backgroundColor }} key={ item.ParkId } >
                    <View style={ styles.leftSide }>
                        <Text style={ styles.themeParkName }>{ item.name }</Text>
                            <View style={ styles.locationContainer }>
                                <Text style={ styles.cityState }>{ item.city }</Text>
                                <Text style={ styles.spacing }>,</Text> 
                                <Text style={ styles.cityState }>{ item.state }</Text>
                            </View>
                        </View>
                    <Ionicons 
                        name={ activePark ? 'chevron-down-outline' : 'chevron-forward-outline'}
                        size={ 50 }
                    />
                </View>
            </TouchableOpacity>
            {/* Render Rides that are at the given park */}
            {activePark && 
                <>
                    <SearchBar 
                        containerStyle={ SearchBarStyle.secondarySearchBar }
                        leftSideContainerStyle={ SearchBarStyle.secondaryLeftSideContainer }
                        placeholder={ 'SEARCH RIDE' }
                    />
                    <RidesList 
                        rides={ rides }
                        targetThemeParkId={ item.ParkId }
                        backgroundColor={ backgroundColor }
                    />
                </>
            }
        </>
    )
}

export default ThemeParkItem;

// Styles
const styles = StyleSheet.create({
    parkContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 375,
        height: 100,
        borderRadius: 15,
        margin: 5,
    },
    leftSide: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 25,
    },
    themeParkName: {
        fontSize: 35,
        fontWeight: 'bold',
    },
    cityState: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    locationContainer: {
        flexDirection: 'row',
    },
    spacing: {
        marginRight: 5
    },
})
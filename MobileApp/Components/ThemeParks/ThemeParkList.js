import React from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Text, FlatList, TouchableOpacity } from "react-native";

// Styles
import ThemeParkStyles from './ThemeParkStyle';
import Card from "../Cards/Card";
import RidesList from "../Rides/RidesList";
import { rides } from "../../tests";

const ThemeParkList = ({ parks, styles, onPress }) => {

    const renderPark = ({ item, index }) => {
        const backgroundColor = index % 3 === 0 ? '#fc7324' : index % 3 === 1 ? '#58ad93' : '#2fb4c2';
        return (
            <View>
                <TouchableOpacity style={{ flex: 1 }} activeOpacity={ 0.7 } onPress={ ()=>onPress(item.ParkId) }>
                    <Card styles={{ ...styles, backgroundColor }} key={ item.ParkId } >
                        <View style={ ThemeParkStyles.leftSide }>
                            <Text style={ ThemeParkStyles.themeParkName }>{ item.name }</Text>
                            <View style={ ThemeParkStyles.locationContainer }>
                                <Text style={ ThemeParkStyles.cityState }>{ item.city }</Text>
                                <Text style={ ThemeParkStyles.spacing }>,</Text> 
                                <Text style={ ThemeParkStyles.cityState }>{ item.state }</Text>
                            </View>
                        </View>
                        <Ionicons name='chevron-forward-outline' size={ 50 }/>
                    </Card>
                </TouchableOpacity>
                {/* Conditionally render rides  */}
                <RidesList rides={ rides }/>
            </View>
        )
    }

    return (
        <FlatList 
            data={ parks }
            renderItem={ renderPark }
            keyExtractor={ (park) => park.ParkId }
            bounces={ false }
        />
    )
}

export default ThemeParkList;
import React from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { rides } from "../../tests";

import { TouchableOpacity, View, Text, StyleSheet, FlatList} from "react-native";

const RidesList = ({ rides, onPress}) => {
    
    const RenderRide = ({ item, index }) => {
        return (
            <TouchableOpacity style={{ flex: 1 }} activeOpacity={ 0.7 } >
                <View style={ styles.ridesContainer }>
                    <View style={ styles.leftSide }>
                        <Text style={ styles.rideName}>{ item.name }</Text>
                        <Text style={ styles.description }>{ item.description }</Text>
                        <Text style={ styles.rating }>Rating???</Text>
                    </View>
                    <Ionicons name='chevron-forward-outline' size={ 50 } />
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <FlatList 
            data={ rides }
            renderItem={ RenderRide }
            keyExtractor={ (ride) => ride.RideId }
            bounces={ false }
        />
    )
}

export default RidesList;

// Styles
const styles = StyleSheet.create({
    ridesContainer: {
        width: 350,
        height: 75,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
        
    },
})
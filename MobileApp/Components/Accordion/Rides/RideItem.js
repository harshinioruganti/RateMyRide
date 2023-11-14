import React from "react"
import { TouchableOpacity, View, Text, StyleSheet } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons';

const RenderRide = ({ item, index, backgroundColor }) => {

    return (
        <TouchableOpacity style={{ flex: 1 }} activeOpacity={ 0.7 } >
            <View style={{ ...styles.ridesContainer, backgroundColor }}>
                <View style={ styles.leftSide }>
                    <Text style={ styles.rideName}>{ item.name }</Text>
                    {/* TURN RATING INTO COMPONENT */}
                    <Text style={ styles.rating }>Rating</Text>
                </View>
                <Ionicons name='chevron-forward-outline' size={ 50 } />
            </View>
        </TouchableOpacity>
    )
}

export default RenderRide;

// Styles
const styles = StyleSheet.create({
    ridesContainer: {
        width: 325,
        height: 75,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 10,
        borderRadius: 15,
        marginLeft: 50
    },
    leftSide: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 25,
        width: 250
    },
    rideName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
})
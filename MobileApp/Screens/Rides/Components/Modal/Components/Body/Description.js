import React from "react";
import { StyleSheet, Text } from "react-native";

const RideDescription = ({ rideId }) => {
    // API REQUEST TO GET THE RIDES DESCRIPTION
    // BASED OFF THE RIDEID

    return (
        <Text style={ styles.description }>
            Big Thunder Mountain Railroad is a mine train roller coaster located at Disneyland, Magic Kingdom, Tokyo Disneyland and Disneyland Park in Paris. 
            In Tokyo and Paris, the attraction is named Big Thunder Mountain. Big Thunder Mountain Railroad is also the name of the fictional rail line the roller 
            coaster depicts
        </Text>
    )
}

export default RideDescription;

const styles = StyleSheet.create({
    description: {
        paddingLeft: 20,
        paddingRight: 20,
        color: 'black',
        fontSize: 18,
        lineHeight: 24,
        marginBottom: 10,
    },
})
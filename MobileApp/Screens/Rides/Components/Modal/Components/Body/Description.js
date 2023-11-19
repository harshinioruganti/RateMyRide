import React from "react";
import { StyleSheet, Text } from "react-native";

const RideDescription = ({ description }) => {
    // API REQUEST TO GET THE RIDES DESCRIPTION
    // BASED OFF THE RIDEID

    return (
        <Text style={ styles.description }>
            { description }
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
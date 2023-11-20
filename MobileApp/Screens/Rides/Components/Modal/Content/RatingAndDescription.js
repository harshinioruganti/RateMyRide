import React from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView, Text } from "react-native";
import RideDescription from "../Components/Body/Description";

const RatingAndDescription = () => {
    return (
        <ScrollView>
            <View style={ styles.bodyWrapper }>
                <View style={ styles.description }>
                    <RideDescription />
                </View>
                <View style={ styles.ratings }>
                    <TouchableOpacity style={ styles.addButton }>
                        <Text style={{ color: '#fff', fontSize: 25, }}>Add a new rating!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default RatingAndDescription;

const styles = StyleSheet.create({
    bodyWrapper: {
        display: 'flex',
        flexDirection: 'column',
        maxHeight: 350,
        overflowY: 'auto',
    },
    description: {

    },
    ratings: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15,
        backgroundColor: '#141c22',
        borderRadius: 15,
        height: 50
    },
    addButton: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    }
})
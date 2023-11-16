import React from "react";
import { View, StyleSheet } from "react-native";
import RideDescription from "../Components/Body/Description";
import CustomRating from "../Components/Body/CustomRating";

const RatingAndDescription = () => {
    return (
        <View style={ styles.bodyWrapper }>
            <View style={ styles.description }>
                <RideDescription />
            </View>
            <View style={ styles.ratings }>
                <CustomRating />
            </View>
        </View>
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
    },
})
import React, { useState } from "react";
import { Rating } from 'react-native-ratings';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";

const EditReview = ({ item, index, onDelete, onEdit }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <View style={styles.container}>
            {Object.keys(item).map((key, index) => {
                if (key !== 'overall' && key !== 'userId' && key !== 'review') {
                    return (
                        <View style={styles.ratingContainer} key={key}>
                            <Text style={{ color: "#fff", fontSize: 20, magin: 15, }}>
                                {key.charAt(0).toUpperCase() + key.slice(1) + ":"}
                            </Text>
                            <Rating
                                style={styles.rating}
                                tintColor="#141c22"
                                startingValue={item[key]}
                                readonly
                            />
                            <Text>{item.review}</Text>
                        </View>
                    );
                }
                return null;
            })}
        </View>
    );
};

export default EditReview;

const styles = StyleSheet.create({
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rating: {
        justifyContent: 'center',
        alignSelf: 'center',
    },
});
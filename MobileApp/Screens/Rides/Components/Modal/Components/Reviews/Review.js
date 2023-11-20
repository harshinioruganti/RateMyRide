import React, { useState } from "react";
import { Rating } from 'react-native-ratings';
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const Review = ({ item, index }) => {
    const [showDetails, setShowDetails] = useState(false);

    const renderRatings = () => {
        return Object.keys(item).map((key, index) => {
            if (key !== 'overall' && key !== 'userId' && key !== 'review') {
                return (
                    <View style={ styles.ratingContainer}>
                        <Text style={{ color: "#fff", fontSize: 20 }}>
                            {key.charAt(0).toUpperCase() + key.slice(1) + ":"}
                        </Text>
                        <Rating 
                            key={ item.userId }
                            style={styles.rating}
                            tintColor="#141c22"
                            startingValue={item[key]}
                            readonly
                        />
                    </View>
                );
            }
            return null;
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Rating 
                    style={styles.rating}
                    tintColor="#141c22"
                    startingValue={item.overall}
                    readonly
                />
                {!showDetails && (
                    <TouchableOpacity 
                        style={styles.textContainer}
                        onPress={() => setShowDetails(!showDetails)}
                    >
                        <Text style={{ color: '#fff', fontSize: 18 }}>VIEW</Text>
                    </TouchableOpacity>
                )}
                { showDetails && (
                    <TouchableOpacity 
                        style={styles.textContainer}
                        onPress={() => setShowDetails(!showDetails)}
                    >
                        <Text style={{ color: '#fff', fontSize: 18 }}>CLOSE</Text>
                    </TouchableOpacity>
                )}
            </View>
            {showDetails && (
                <>
                    <View style={styles.ratingsList}>
                        {renderRatings()}
                    </View>
                    <View style={styles.reviewContainer}>
                        <Text style={{ color: "#fff", fontSize: 20, }}>
                            Review:
                        </Text>
                        <Text style={{ color: "#fff", fontSize: 16 }}>
                            {item.review}
                        </Text>
                    </View>
                </>
            )}
        </View>
    );
};

export default Review;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        borderRadius: 15,
        backgroundColor: '#141c22',
        margin: 5,
    },
    topSection: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    rating: {
        margin: 7,
    },
    textContainer: {
        alignSelf: 'center',
        marginRight: 20,
    },
    ratingsList: {
        display: 'flex',
        backgroundColor: '#141c22',
        width: '100%',
    },
    ratingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#fff', // Adjust border color if needed
    },
    reviewContainer: {
        padding: 15,

    },
});

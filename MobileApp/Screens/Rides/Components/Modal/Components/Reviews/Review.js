import React, { useState } from "react";
import { Rating } from 'react-native-ratings';
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const Review = ({ item, index }) => {
    const [showDetails, setShowDetails] = useState(false);

    const renderRatings = () => {
        return Object.keys(item).map((key, index) => {
            if (key !== 'overall' && key !== 'userId') {
                return (
                    <>
                        <Text style={{ color: "#fff"}}>{key}</Text>
                    <Rating 
                        key={index}
                        style={styles.rating}
                        tintColor="#141c22"
                        startingValue={item[key]}
                        readonly
                    />
                    </>
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
                <View style={styles.ratingsList}>
                    {renderRatings()}
                </View>
            )}
        </View>
    );
};

export default Review;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
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
        height: 500,
        backgroundColor: '#141c22',
        width: '100%',
    },
});

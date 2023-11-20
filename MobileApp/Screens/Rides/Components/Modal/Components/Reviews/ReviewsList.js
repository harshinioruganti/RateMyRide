import React, { useEffect, useState } from "react";
import { FlatList, ActivityIndicator, View, Text, StyleSheet, Alert } from "react-native";
import { Rating } from 'react-native-ratings';
import Axios from 'axios';
import Review from "./Review";
const URL = 'https://ratemyride-3b8d03447308.herokuapp.com/'

const ReviewList = ({ rideId }) => {
    const [avgScore, setAvgScore] = useState(null);
    const [reviewList, setReviewList] = useState([]);
    const [showDetails, setShowDetails] = useState(false);
    const [loadingReviews, setLoadingReviews] = useState(false);

    useEffect(() => {
        const getReviewList = async () => {
            setLoadingReviews(true);
            try {
                const response = await Axios.post(URL + 'api/getReviews', {
                    rideId
                });
                if (response.status === 200) {
                    const { reviewList, log } = response.data;
                    setReviewList(reviewList);
                }
            } catch(error) {
                console.error("Error:", error);
            } finally {
                setLoadingReviews(false);
            }
        }
        getReviewList();
    }, [ rideId ])

    if (loadingReviews) {
        return (
            <ActivityIndicator size="large" color="#141c22"/>
        )
    }

    if (reviewList.length <= 0) {
        return (
            <Text style={ styles.altMsg }>No Reviews Found.</Text>
        )
    }

    return (
        <FlatList 
            data={ reviewList }
            renderItem={({ item, index }) => (
                <Review item={ item } index={ index } />
            )}
            keyExtractor={( review) => review.userId }
            bounces={ false }

        />
    )
}

export default ReviewList;

const styles = StyleSheet.create({
    altMsg: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
})
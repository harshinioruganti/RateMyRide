import React, { useEffect, useState } from "react";
import { FlatList, ActivityIndicator, View, Text, StyleSheet, Alert } from "react-native";
import Axios from 'axios';
const URL = 'https://ratemyride-3b8d03447308.herokuapp.com/'
import EditReview from './EditReview';
const MyReviewList = ({ userId }) => {
    const [myReviews, setMyReviews] = useState([]);
    const [loadingReviews, setLoadingReviews] = useState(false);

    useEffect(() => {
        const getRideInfo = async (rideId) => {
            try {
                const rideResponse = await Axios.post(URL + 'api/getRideInfo', {
                    rideId,
                });
                if (rideResponse.status === 200) {
                    return rideResponse.data.rideName;
                }
            } catch (error) {
                console.error("Error fetching ride info:", error);
                return null;
            }
        }

        const fetchReviewsWithRideNames = async () => {
        setLoadingReviews(true);
        try {
            const response = await Axios.post(URL + 'api/getMyReviews', {
                userId: userId,
            });
            if (response.status === 200) {
                const { reviewList, log } = response.data;
                const reviewsWithRideNamesPromises = reviewList.map(async (review) => {
                    const rideName = await getRideInfo(review.rideId);
                    return {
                        ...review,
                        rideName: rideName || 'Ride Name Not Available',
                    };
                });
                const resolvedReviewsWithRideNames = await Promise.all(reviewsWithRideNamesPromises);
                setMyReviews(resolvedReviewsWithRideNames);
            }
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setLoadingReviews(false);
        }
    };
    fetchReviewsWithRideNames();
    }, [])

    if (loadingReviews) {
        return (
            <ActivityIndicator size="large" color="#141c22"/>
        )
    }

    if (myReviews.length <= 0) {
        return (
            <Text style={ styles.altMsg }>No Reviews Found.</Text>
        )
    }

    return (
        <FlatList 
            data={ myReviews }
            renderItem={({ item, index }) => (
                <View style={ styles.reviewContainer }>
                    <Text style={{ color: '#fff', fontSize: 25, margin: 25, textAlign: 'center'}}>Review For: {item.rideName }</Text>
                    <EditReview item={ item } index={ index }/>
                </View>
            )}
            keyExtractor={( review) => review.rideId }
            bounces={ false }

        />
    )
}

export default MyReviewList;

const styles = StyleSheet.create({
    reviewContainer: {
        display: 'flex',
    },
})
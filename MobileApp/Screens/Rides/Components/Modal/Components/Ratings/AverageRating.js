import React, { useState, useEffect } from "react";
import { Rating } from 'react-native-ratings';
import Axios from 'axios';
const URL = 'https://ratemyride-3b8d03447308.herokuapp.com/'

const AverageRating = ({ tintColor, rideId }) => {
    const [avgRating, setAvgRating] = useState(null);

    useEffect(() => {
        const fetchAvgRating = async () => {
            try {
                const response = await Axios.post(URL + 'api/getRideRating', {
                    rideId: rideId,
                });
                if (response.status === 200) {
                    const data = response.data;
                    setAvgRating(data.overallAvg);
                }
            } catch (error) {
                console.error("Error fetching average rating: ", error);
            }
        }
        // Call the function
        fetchAvgRating();
    }, [rideId])

    return (
        <Rating 
            showRating={ false }
            type="star"
            tintColor={ tintColor }
            startingValue={ avgRating }
            readonly={ true }
            imageSize={ 30 }
            style={{ alignSelf: 'flex-start' }}
        />
    )
}

export default AverageRating;
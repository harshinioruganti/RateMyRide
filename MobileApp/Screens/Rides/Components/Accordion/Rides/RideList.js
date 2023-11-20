import React, { useEffect, useState } from "react";
import Axios from 'axios';
import { FlatList} from "react-native";
import RenderRide from "./RideItem";
const URL = 'https://ratemyride-3b8d03447308.herokuapp.com/'

const RidesList = ({ backgroundColor, targetThemeParkId}) => {
    const [rides, setRides] = useState([]);

    useEffect(() => {
        const fetchRides = async () => {
            try {
                const response = await Axios.post(URL + 'api/getRides',{
                    themeParkId: targetThemeParkId,
                });
                if (response.status === 200)
                {
                    const data = response.data;
                    if (data.rideList && data.rideList.length > 0) {
                        setRides(data.rideList);
                    } else {
                        console.log('No rides found for this theme park');
                    }
                }
            }
            catch(error) {
                console.error('Error fetching rides', error);
            }
        }
        // Call the function
        fetchRides();
    }, [ targetThemeParkId ])

    return (
        <FlatList 
            data={ rides }
            renderItem={({ item, index }) => (
                <RenderRide item={item} index={index} backgroundColor={ backgroundColor }/>
            )}
            keyExtractor={ (ride) => ride.rideId }
            bounces={ false }
        />
    )
}

export default RidesList;

import React from "react";

import { FlatList} from "react-native";
import RenderRide from "./RideItem";

const RidesList = ({ rides, backgroundColor, targetThemeParkId}) => {
    const filteredRides = rides.filter((ride) => ride.themeParkId === targetThemeParkId)
    return (
        <FlatList 
            data={ filteredRides }
            renderItem={({ item, index }) => (
                <RenderRide item={item} index={index} backgroundColor={ backgroundColor }/>
            )}
            keyExtractor={ (ride) => ride.RideId }
            bounces={ false }
        />
    )
}

export default RidesList;

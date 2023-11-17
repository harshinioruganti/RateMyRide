import React from "react";
import { Rating } from 'react-native-ratings';

const AverageRating = ({ tintColor, startingVal,  }) => {

    return (
        <Rating 
            showRating={ false }
            type="star"
            tintColor={ tintColor }
            startingValue={ startingVal }
            readonly={ true }
            imageSize={ 20 }
            style={{ alignSelf: 'flex-start' }}
        />
    )
}

export default AverageRating;
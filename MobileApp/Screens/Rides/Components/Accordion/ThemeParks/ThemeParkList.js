import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import ThemeParkItem from "./ThemeParkItem";
import Axios from 'axios';
const URL = 'https://ratemyride-3b8d03447308.herokuapp.com/'

const ThemeParkList = () => {
    const [themeParks, setThemeParks] = useState([]);

    useEffect(() => {
        const fetchThemeParks = async () => {
            try {
                const response = await Axios.post(URL + 'api/getAllThemeParks', {});
                if (response.status === 200)
                {
                    const data = response.data;
                    if (data.allThemeParks && data.allThemeParks.length > 0) {
                        console.log("Success");
                        setThemeParks(data.allThemeParks);
                    } else {
                        console.log(data.log);
                    }
                }
            }
            catch(error) {
                console.error("Error Fetching Data", error);
            }
        }
        // Call the function
        fetchThemeParks();
    }, [])

    return (
        <FlatList 
            data={ themeParks }
            renderItem={({ item, index }) => (
                <ThemeParkItem item={item} index={index} />
            )}
            keyExtractor={ (park) => park.themePark }
            bounces={ false }
        />
    )
}

export default ThemeParkList;

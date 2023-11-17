import React from "react";
import { FlatList } from "react-native";
import ThemeParkItem from "./ThemeParkItem";
import { themeParks } from "../../../../../tests";

const ThemeParkList = () => {

    return (
        <FlatList 
            data={ themeParks }
            renderItem={({ item, index }) => (
                <ThemeParkItem item={item} index={index} />
            )}
            keyExtractor={ (park) => park.ParkId }
            bounces={ false }
        />
    )
}

export default ThemeParkList;

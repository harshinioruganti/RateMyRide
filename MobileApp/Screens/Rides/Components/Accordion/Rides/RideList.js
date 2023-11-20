import React, { useEffect, useState } from "react";
import Axios from 'axios';
import { FlatList, ActivityIndicator, View, Text, StyleSheet, Alert } from "react-native";
import RenderRide from "./RideItem";
import SearchBar from "../../../../../Components/SearchBar/SearchBar";
const URL = 'https://ratemyride-3b8d03447308.herokuapp.com/'

const RidesList = ({ backgroundColor, targetThemeParkId}) => {
    const [rides, setRides] = useState([]);
    const [loadingRides, setLoadingRides] = useState(true);
    const [searchRideName, setSearchRideName] = useState(null);

    const handleSearch = (searchTerm) => {
        setSearchRideName(searchTerm);
    }

    useEffect(() => {
        if (searchRideName) {
            setLoadingRides(true);
            console.log('searching...')
            searchRide();
        }
    }, [ searchRideName ])

    const searchRide = async () => {
        setLoadingRides(true);
        console.log(searchRideName);
        try {
            const response = await Axios.post(URL + "api/searchRide", {
                rideName: searchRideName,
            });
            if (response.status === 200) {
                const data = response.data;
                if (data.rides && data.rides.length > 0) {
                    setRides(data.rides);
                }
            } else {
                console.log('No Rides Found In Search');
                setRides([]);
            }
        } catch {
            Alert.alert("Error Searching Rides, please try again later!");
            console.error('Error fetching rides', error);
        } finally {
            setLoadingRides(false);
        }
    }

    // UseEffect to get all rides per themePark
    useEffect(() => {
        const fetchRides = async () => {
            setLoadingRides(true);
            try {
                const response = await Axios.post(URL + 'api/getRides', {
                    themeParkId: targetThemeParkId,
                });
                if (response.status === 200) {
                    const data = response.data;
                    if (data.rideList && data.rideList.length > 0) {
                        setRides(data.rideList);
                    } else {
                        console.log('No rides found for this theme park');
                    }
                }
            }
            catch(error) {
                Alert.alert("Error Fetching Rides, please try again later!");
                console.error('Error fetching rides', error);
            }
            finally {
                setLoadingRides(false);
            }
        }
        // Call the function
        fetchRides();
    }, [ targetThemeParkId ])

    return (
        <>
            <SearchBar 
                onSearch={ handleSearch }
                containerStyle={ SearchBarStyle.secondarySearchBar }
                leftSideContainerStyle={ SearchBarStyle.secondaryLeftSideContainer }
                placeholder={ 'SEARCH RIDE' }
            />
            { loadingRides && (
                <ActivityIndicator size="large" color="#fff" margin={ 15 }/>
            )}
            { rides.length < 1 && !loadingRides && (
                <View style={{ ...styles.noRides, backgroundColor}}>
                    <Text style={ styles.msg }>No Rides Found!</Text>
                </View>
            )}
            <FlatList 
                data={ rides }
                renderItem={({ item, index }) => (
                    <RenderRide item={item} index={index} backgroundColor={ backgroundColor }/>
                )}
                keyExtractor={ (rides) => rides.rideName }
                bounces={ false }
            />
        </>
    )
}

export default RidesList;

const styles = StyleSheet.create({
    noRides: {
        width: 325,
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 15,
        marginLeft: 50,
    },
    msg: {
        fontSize: 40,
    },
})

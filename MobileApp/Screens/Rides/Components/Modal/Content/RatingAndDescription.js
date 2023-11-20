import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView, Text, Alert } from "react-native";
import RideDescription from "../Components/Body/Description";
import AddRatingModal from "../Components/Ratings/AddRatingModal";
import { useSelector } from 'react-redux';

const RatingAndDescription = ({ rideDescription, rideId }) => {
    const [activeModal, setActiveModal] = useState(false);
    const loggedIn = useSelector((state) => state.auth.loggedIn);

    const handleActivateModal = () => {
        if (!loggedIn) {
            Alert.alert("Guest users cannot review rides...Please login or create an account to contiue.");
            return;
        }
        else {
            setActiveModal(!activeModal)
        }
    }

    return (
        <>
            <AddRatingModal 
                isVisible={ activeModal }
                rideId={ rideId }
                closeModal={ handleActivateModal }
            />
            <View style={ styles.bodyWrapper }>
                <View style={ styles.description }>
                    <Text style={{ paddingLeft: 20, fontSize: 18, fontWeight: 'bold'}}>Description:</Text>
                    <RideDescription description={ rideDescription }/>
                </View>
                <View style={ styles.ratings }>
                    <TouchableOpacity style={ styles.addButton } onPress={ handleActivateModal }>
                        <Text style={{ color: '#fff', fontSize: 25, }}>Add a new rating!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default RatingAndDescription;

const styles = StyleSheet.create({
    bodyWrapper: {
        display: 'flex',
        flexDirection: 'column',
        maxHeight: 350,
        overflowY: 'auto',
    },
    description: {
        
    },
    ratings: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15,
        backgroundColor: '#141c22',
        borderRadius: 15,
        height: 50
    },
    addButton: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    }
})
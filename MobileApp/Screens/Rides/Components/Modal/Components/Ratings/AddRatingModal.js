import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Modal, View, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import { Rating } from 'react-native-ratings';
import Axios from 'axios';
const URL = 'https://ratemyride-3b8d03447308.herokuapp.com/'
import { useSelector } from 'react-redux';

const AddRatingModal = ({ isVisible, rideId, closeModal}) => {
    const userId = useSelector((state) => state.auth.userID);
    const [ratings, setRatings] = useState({
        thrill: 0,
        theme: 0,
        length: 0,
        overall: 0,
    })
    const [review, setReview] = useState('');
    const ratingTypes = ['Thrill', 'Theme', 'Length', 'Overall']

    const handleRating = (ratingType, value) => setRatings(prevRatings => ({ ...prevRatings, [ratingType.toLowerCase()]: value }));
    const handleReviewChange = (text) => setReview(text);

    const submitForm = async () => {
        try {
            const response = await Axios.post(URL + 'api/addReview', {
                rideId: rideId,
                userId: userId,
                thrill: ratings.thrill.toString(),
                theme: ratings.theme.toString(),
                length: ratings.length.toString(),
                overall: ratings.overall.toString(),
                review: review,
            });
            console.log(response.data);
        }
        catch {
            Alert.alert("Error Reviewing Ride: ", error);
            console.error('Error:', error);
        }
    }

    return (
        <Modal visible={ isVisible }>
            <View style={ styles.container } >
                <Text style={ styles.header }>Add Your Rating!</Text>
                    <View style={ styles.formContainer }>
                        <TextInput 
                            style={ styles.reviewInput }
                            onChangeText={ handleReviewChange }
                            value={ review }
                            placeholder='Leave a review! (optional)'
                            multiline
                            placeholderTextColor={ 'black' }
                        />
                        {ratingTypes.map(type => (
                            <View style={ styles.rating } key={ type }>
                                <Text style={{ color: '#fff', textAlign: 'center', fontSize: 25}}>{type}</Text>
                                <Rating 
                                    showRating
                                    ratingText={ type }
                                    onFinishRating={ value => handleRating(type, value) }
                                    imageSize={ 40 }
                                    startingValue={ ratings[type] }
                                    tintColor='#141c22'
                                />
                            </View>
                        ))}
                    </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.submitBtn}>
                        <Text style={{ color: 'black', fontSize: 35, textAlign: 'center' }} onPress={ submitForm }>Submit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.closeBtn}>
                        <Text style={{ color: 'black', fontSize: 35, textAlign: 'center' }} onPress={ closeModal }>Close</Text>
                    </TouchableOpacity>
                </View>
            </View> 
        </Modal>
    )
}

export default AddRatingModal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141c22',
    },
    header: {
        marginTop: 40,
        textAlign: 'center',
        color: '#fff',
        fontSize: 50,     
    },
    formContainer: {
        display: 'flex',
        marginTop: 25,
    },
    reviewInput: {
        backgroundColor: '#fff',
        width: '80%',
        alignSelf: 'center',
        borderRadius: 15,
        padding: 10,
    },
    rating: {
        marginTop: 15,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    submitBtn: {
        backgroundColor: '#fff',
        width: 125,
        borderRadius: 15,
        paddingVertical: 10,
        marginRight: 15,
    },
    closeBtn: {
        backgroundColor: '#fff',
        width: 125,
        borderRadius: 15,
        paddingVertical: 10,
    },
})
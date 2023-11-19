import React, { useState } from 'react';
import { StyleSheet, Text, Modal, View } from 'react-native';
import { Rating } from 'react-native-ratings';

const AddRatingModal = ({ isVisible }) => {
    const [ratings, setRatings] = useState({
        thrill: 0,
        theme: 0,
        length: 0,
        overall: 0,
    })
    const [review, setReview] = useState('');
    const ratingTypes = ['Thrill', 'Theme', 'Length', 'Overall']
    const handleRating = (ratingType, value) => {
        setRatings(prevRatings => ({
            ...prevRatings, [ratingType]: value,
        }));
    }

    return (
        <Modal visible={ isVisible }>
            <View style={ styles.container } >
                <Text style={ styles.header }>Add Your Rating!</Text>
                <View style={ styles.formContainer }>
                    {ratingTypes.map(type => (
                        <View style={ styles.rating } key={ type }>
                            <Text style={{ color: '#fff', textAlign: 'center', fontSize: 25}}>{type}</Text>
                            <Rating 
                                showRating
                                onFinishRating={ value => handleRating(type, value) }
                                imageSize={ 50 }
                                startingValue={ ratings[type] }
                                tintColor='#141c22'
                            />
                        </View>
                    ))}
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
        display: 'flex',
    },
    header: {
        marginTop: 40,
        textAlign: 'center',
        color: '#fff',
        fontSize: 50,     
    },
    formContainer: {
        display: 'flex',

    },
    rating: {
        display: 'flex',
    },
})
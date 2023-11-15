import React from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const RidesModal = ({toggleModal, isVisible, rideInfo}) => {

    const handleCloseModal = () => toggleModal(false);

    return (
        <Modal visible={ isVisible }>
            <View style={styles.modalContainer}>
                <TouchableOpacity style={ styles.closeModal } activeOpacity={ 0.7 } onPress={ handleCloseModal }>
                    <Ionicons name='close' size={50}/>
                </TouchableOpacity>
                <Text>{rideInfo.name}</Text>
            </View>
        </Modal>
    )
}

export default RidesModal;

const styles = StyleSheet.create({
    modalContainer: {
        marginTop: 25,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'green',
    },
    closeModal: {
        alignItems: 'flex-end',
    },
})


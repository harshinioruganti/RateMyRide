import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Modal } from 'react-native';

const AddRatingModal = ({ isVisible }) => {

    return (
        <Modal visible={ isVisible }>
            <Text>Inside the Add New Rating Modal</Text>
        </Modal>
    )
}

export default AddRatingModal;

const styles = StyleSheet.create({
    container: {},

})
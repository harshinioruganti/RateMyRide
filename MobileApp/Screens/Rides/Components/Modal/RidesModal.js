import React from "react";
import { Modal, StyleSheet, View } from 'react-native';

import RidesModalHeader from "./Content/ModalHeader";
import HorizontalDivider from "./Components/Dividers/HorizontalDivider";
import RatingAndDescription from "./Content/RatingAndDescription";

const RidesModal = ({toggleModal, isVisible, rideInfo, backgroundColor}) => {

    const handleCloseModal = () => toggleModal(false);

    return (
        <Modal visible={ isVisible } >
            <View style={ styles.modalContainer }>
                <View style={{ ...styles.modalWrapper, backgroundColor }}>
                    {/* HEADER  */}
                    <RidesModalHeader onPress={ handleCloseModal } rideName={ rideInfo.name } themeParkName={ rideInfo.name }/>
                    {/* Simple Line Divider (Used throughtout this component)  */}
                    <HorizontalDivider />
                    {/* BODY  */}
                    <RatingAndDescription />
                    {/* REVIEWS  */}
                </View>
            </View>
        </Modal>
    )
}

export default RidesModal;

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        paddingTop: 25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#141c22',
    },
    modalWrapper: {
        padding: 20,
        borderRadius: 15,
        height: '95%',
        width: '90%',
    },
})


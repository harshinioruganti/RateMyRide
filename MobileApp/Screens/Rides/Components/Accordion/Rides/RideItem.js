import React, { useState} from "react"
import { TouchableOpacity, View, Text, StyleSheet } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons';
import RidesModal from "../../Modal/RidesModal";

const RenderRide = ({ item, backgroundColor }) => {
    const [modal, setModal] = useState(false);
    
    const handleModal = () => {
        setModal(!modal);
    }

    return (
        <>
            {/* RIDES MODAL, use can view info about a specific ride and choose to leave a review  */}
            <RidesModal 
                toggleModal={ setModal }
                isVisible={ modal }
                rideInfo={ item }
            />
            {/* LIST OF RIDES FOR THE PARK */}
            <TouchableOpacity style={{ flex: 1 }} activeOpacity={ 0.7 } onPress={ handleModal }>
                <View style={{ ...styles.ridesContainer, backgroundColor }}>
                    <View style={ styles.leftSide }>
                        <Text style={ styles.rideName}>{ item.name }</Text>
                        {/* TURN RATING INTO COMPONENT */}
                        <Text style={ styles.rating }>Rating</Text>
                    </View>
                    <Ionicons name='chevron-forward-outline' size={ 50 } />
                </View>
            </TouchableOpacity>
        </>
    )
}

export default RenderRide;

// Styles
const styles = StyleSheet.create({
    ridesContainer: {
        width: 325,
        height: 75,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 10,
        borderRadius: 15,
        marginLeft: 50
    },
    leftSide: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 25,
        width: 250
    },
    rideName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
})
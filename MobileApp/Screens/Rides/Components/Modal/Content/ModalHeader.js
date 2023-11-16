import React from "react";
import { StyleSheet, View } from "react-native";
import HeaderInfo from '../Components/Header/HeaderInfo';
import IconButton from "../Components/Header/IconButton";

const RidesModalHeader = ({
    onPress,
    rideName, 
    themeParkName,
}) => {
    return (
        <View style={ styles.mainContainer }>
            <HeaderInfo 
                containerStyle={ styles.headerContainer }
                RideName={ rideName } 
                ThemeParkName={ themeParkName }
                rideStyle={ styles.mainText }
                themeParkStyle={ styles.secondaryText }
            />
            <IconButton onPress={ onPress } buttonStyle={ styles.iconButton }/>
        </View>
    )
}

export default RidesModalHeader;

const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerContainer: {
        marginLeft: 20,
        width: '80%',
    },
    iconButton: {
        alignItems: 'flex-end',
    },
    mainText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black'
    },
    secondaryText: {
        fontSize: 15,
        color: 'black',
    },
})
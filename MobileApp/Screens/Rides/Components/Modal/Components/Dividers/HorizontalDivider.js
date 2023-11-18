import React from 'react';
import { View, StyleSheet } from 'react-native';

const HorizontalDivider = ({ height }) => {
    return (
        <View style={[styles.divider, { borderBottomColor: 'black', borderBottomWidth: height || 1 }]} />
    );
};

const styles = StyleSheet.create({
    divider: {
        marginVertical: 15, 
    },
});

export default HorizontalDivider;

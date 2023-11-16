import React from 'react';
import { View, StyleSheet } from 'react-native';

const HorizontalDivider = ({ color, height }) => {
    return (
        <View style={[styles.divider, { borderBottomColor: color || '#EAEAEA', borderBottomWidth: height || 1 }]} />
    );
};

const styles = StyleSheet.create({
    divider: {
        marginVertical: 15, 
    },
});

export default HorizontalDivider;

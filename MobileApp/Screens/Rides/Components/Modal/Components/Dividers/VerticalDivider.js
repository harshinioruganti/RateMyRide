import React from 'react';
import { View, StyleSheet } from 'react-native';

const VerticalDivider = ({ color, height }) => {
    return (
        <View style={[styles.divider, { borderBottomColor: color || '#EAEAEA', borderBottomWidth: height || 1 }]} />
    );
};

const styles = StyleSheet.create({
    divider: {
        marginHorizontal: 15, 
    },
});

export default VerticalDivider;

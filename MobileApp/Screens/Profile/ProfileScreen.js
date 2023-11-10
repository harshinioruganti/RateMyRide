import React from 'react';
import { View, Text } from 'react-native';

import Card from '../../Components/Cards/Card';

export default ProfileScreen = ({ navigation }) =>
{
    return (
        <Card>
            <Text
                onPress={() => navigation.navigate('PROFILE')}
            >
                Profile Screen
            </Text>
        </Card>
    )
}
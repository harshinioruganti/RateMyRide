import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import Axios from 'axios';
import Header from '../../Components/Header/Header';
const URL = 'https://ratemyride-3b8d03447308.herokuapp.com/'
import MyReviewList from './components/MyReviewList';

export default ProfileScreen = ({ navigation }) => {
    const userID = useSelector(state => state.auth.userID);
    const [myReviewsWithThemePark, setMyReviewsWithThemePark] = useState([]);

    return (
        <View style={{ flex:1, backgroundColor: "#141c22"}}>
            <Header />
            <Text style={{ color: '#fff', textAlign: 'center', fontSize: 35, marginTop: 20,}}>Your Reviews:</Text>
            <MyReviewList 
                userId={ userID }
            />
        </View>
    )
}

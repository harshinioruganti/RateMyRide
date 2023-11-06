import React, { useState } from 'react';
// Navigation Imports
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from '../Screens/Home/HomeScreen';
import ProfileScreen from '../Screens/Profile/ProfileScreen';
import RidesScreen from '../Screens/Rides/RidesScreen';
import LoginScreen from '../Screens/Auth/LoginScreen';
import RegisterScreen from '../Screens/Auth/RegisterScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const MainTabNavigator = () =>
{
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <Tab.Navigator
            initialRouteName={"HOME"}
            tabBarOptions={{
                activeTintColor: '#fc7324',
                inactiveTintColor: 'black',
                labelStyle: { paddingBottom: 5, fontSize: 15 },
            }}
            screenOptions={({route}) => ({
                tabBarStyle: [{ display: 'flex', backgroundColor: '#ffffff', padding: 5, height: 100 } ],
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let routeName = route.name;
                    
                    // Selecting and highlighting the screen currently on
                    if (routeName === 'HOME') iconName = focused ? 'home' : 'home-outline';
                    else if (routeName === 'PROFILE') iconName = focused ? 'person-circle' : 'person-circle-outline';
                    else if (routeName === 'RIDES') iconName = focused ? 'albums' : 'albums-outline';

                    return <Ionicons name={iconName} size={size} color={color} />
                }
            })}
        >

            <Tab.Screen name={"HOME"} component={ LandingPage } options={{ headerShown: false }} />
            <Tab.Screen name={ "RIDES" } component={ RidesScreen } options={{ headerShown: false }} />
            {loggedIn && <Tab.Screen name={ "PROFILE" } component={ ProfileScreen } options={{ headerShown: false }} /> }

        </Tab.Navigator>
    )
}

export const LandingPage = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='LANDING' component={ HomeScreen } options={{ headerShown: false}} />
            <Stack.Screen name='LOGIN' component={ LoginScreen } options={{ headerShown: true}} />
            <Stack.Screen name='REGISTER' component={ RegisterScreen } options={{ headerShown: true}} />
        </Stack.Navigator>
    )
}

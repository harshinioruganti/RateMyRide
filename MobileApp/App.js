import React from "react";
import { StatusBar, View } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import { MainTabNavigator } from "./Navigation/Navigation";

export default function App() {
  return (
    
      <NavigationContainer>
        <StatusBar
          barStyle="light-content" // Set the icon color to light
          backgroundColor="black" // Set the background color to dark
        />
        <MainTabNavigator />
      </NavigationContainer>
  );
}
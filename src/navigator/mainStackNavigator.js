// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../features/home/HomeScreen';
import Routes from './Routes';

const Stack = createNativeStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        {Routes.map(route => (
          <Stack.Screen
            key={route.path}
            name={route.path}
            component={route.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;

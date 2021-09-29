import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/components/Home/index';
import SignUp from './src/components/SignUp/index';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <StatusBar barStyle='dark-content' />
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='SignUp' component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;

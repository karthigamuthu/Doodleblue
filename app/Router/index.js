import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import MainScreen from '../Screens/MainScreen';
import CartScreen from '../Screens/CartScreen';

const AppStack = createStackNavigator();
const AppStackScreen = () => (
  <AppStack.Navigator headerMode="none">
    <AppStack.Screen name="main" component={MainScreen} />
    <AppStack.Screen name="cart" component={CartScreen} />
  </AppStack.Navigator>
);
export default () => (
  <NavigationContainer>
    <AppStackScreen />
  </NavigationContainer>
);

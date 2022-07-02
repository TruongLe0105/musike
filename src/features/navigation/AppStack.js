import React from 'react';
// import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LoginScreen from '../../screens/LoginScreen';
import BootSplashScreen from '../../screens/BootSplashScreen';
import OnboardingScreen from '../../screens/OnboardingScreen';
import LogoutScreen from '../../screens/LogoutScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="BootSplash"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="BootSplash" component={BootSplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
    </Stack.Navigator >
  );
}

export default AppStack;

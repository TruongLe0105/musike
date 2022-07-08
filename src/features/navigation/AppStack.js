import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../../screens/Login/LoginScreen';
import BootSplashScreen from '../../screens/BootSplashScreen';
import OnboardingScreen from '../../screens/OnboardingScreen';
import NextSongScreen from '../../screens/NextSong/NextSong';
import Categories from '../../screens/Categories/Categories';
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen';
import PlayMusicScreen from '../../screens/PlayMusic/PlayMusicScreen';
import TracklistScreen from '../../screens/Tracklist/TracklistScreen';

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="PlayMusic"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="NextSong" component={NextSongScreen} />
      <Stack.Screen name="BootSplash" component={BootSplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="PlayMusic" component={PlayMusicScreen} />
      <Stack.Screen name="Tracklist" component={TracklistScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export default AppStack;

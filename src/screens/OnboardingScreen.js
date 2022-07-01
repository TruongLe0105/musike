import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';

import {createDrawerNavigator} from '@react-navigation/drawer';
import PlayMusicScreen from './PlayMusicScreen';
import ProfileScreen from './ProfileScreen';
import SettingScreen from './SettingScreen';
import HomeScreen from './Home';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

function OnboardingScreen() {
  return (
    <Drawer.Navigator
      initialRouteName="PlayMusic"
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: 'black',
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: 'black',
        drawerLabelStyle: {
          fontSize: 15,
          fontFamily: 'Roboto-Medium',
        },
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="PlayMusic"
        component={PlayMusicScreen}
        options={{
          drawerIcon: () => {
            <Icon name="md-musical-notes" size={22} />;
          },
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({color}) => {
            <Icon name="user" size={14} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          drawerIcon: ({color}) => {
            <Icon name="cog" size={14} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({color}) => {
            <Icon name="home" size={14} color={color} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
}

export default OnboardingScreen;

import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { Text } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import PlayMusicScreen from './PlayMusicScreen';
import ProfileScreen from './ProfileScreen';
import SettingScreen from './SettingScreen';
import HomeScreen from './HomeScreen';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

function OnboardingScreen() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerInactiveTintColor: '#fff',
        drawerActiveTintColor: '#fff',
        drawerLabelStyle: {
          fontSize: 15,
          marginLeft: -25,
          fontFamily: 'Roboto-Medium',
        },
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={() => ({
          drawerIcon: ({color}) => <Icon name="home" color={color} size={20} />,
        })}
      />
      <Drawer.Screen
        name="PlayMusic"
        component={PlayMusicScreen}
        options={() => ({
          drawerIcon: ({color}) => (
            <Icon name="music" color={color} size={20} />
          ),
        })}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={() => ({
          drawerIcon: ({color}) => (
            <Icon name="user-alt" color={color} size={20} />
          ),
        })}
      />
      <Drawer.Screen
        name="Setting"
        component={SettingScreen}
        options={() => ({
          drawerIcon: ({color}) => <Icon name="cog" color={color} size={20} />,
        })}
      />
    </Drawer.Navigator>
  );
}

export default OnboardingScreen;

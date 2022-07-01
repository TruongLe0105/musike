import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';
import {Text} from 'react-native';

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
        drawerActiveBackgroundColor: '#aa18ea',
        drawerInactiveTintColor: '#333',
        drawerActiveTintColor: '#fff',
        drawerLabelStyle: {
          fontSize: 15,
          marginLeft: -25,
          fontFamily: 'Roboto-Medium',
        },
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="PlayMusic"
        component={PlayMusicScreen}
        options={props => ({
          drawerIcon: () => <Icon name="music" color={props.color} size={20} />,
        })}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={({color}) => ({
          drawerIcon: () => <Icon name="user" color={color} size={20} />,
        })}
      />
      <Drawer.Screen
        name="Setting"
        component={SettingScreen}
        options={({color}) => ({
          drawerIcon: () => <Icon name="cog" color={color} size={20} />,
        })}
        onPress={() => console.log('123')}
      />
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={({color}) => ({
          drawerIcon: () => <Icon name="home" color={color} size={20} />,
        })}
      />
    </Drawer.Navigator>
  );
}

export default OnboardingScreen;

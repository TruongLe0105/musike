import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import SettingScreen from './ProfileScreen/ProfileScreen';
import ProfileScreen from './SettingScreen';
import HomeScreen from './HomeScreen';
import CustomDrawer from '../components/CustomDrawer';
import SearchScreen from './SearchScreen';
import PlayMusicScreen from './PlayMusic/PlayMusicScreen';
import WalletScreen from '../screens/WalletScreen/WalletScreen';

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
      <Drawer.Screen
        name="Search"
        component={SearchScreen}
        options={{
          drawerItemStyle: {display: 'none'},
        }}
      />
      <Drawer.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          drawerItemStyle: {display: 'none'},
        }}
      />
    </Drawer.Navigator>
  );
}

export default OnboardingScreen;

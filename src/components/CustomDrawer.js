import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/FontAwesome5';

import avatar from '../assets/sources/avatar.png';

function CustomDrawer(props) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          backgroundColor: 'black',
        }}>
        <ImageBackground style={{ padding: 25 }}>
          <Image
            source={avatar}
            style={{ width: 70, height: 70, marginBottom: 10 }}
          />
          <Text
            style={{
              color: 'white',
              fontWeight: '500',
              fontSize: 18,
              fontFamily: 'Roboto-Medium',
            }}>
            John Smith
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 16, marginRight: 5, color: 'white' }}>
              100 coins
            </Text>
            <Icon name="coins" size={14} color="green" />
          </View>
        </ImageBackground>
        <View style={{ backgroundColor: '#FFF', flex: 1 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          backgroundColor: 'ccc',
          padding: 20,
          borderTopColor: '#ccc',
          borderTopWidth: 1,
        }}>
        <TouchableOpacity style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="music" size={16} />
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
              Custom Footer
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Login")}
          style={{ paddingVertical: 15 }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="sign-out-alt" size={16} />
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
              Logout
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.toggleDrawer()}
          style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="sign-out-alt" size={16} />
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
              Leave
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default CustomDrawer;

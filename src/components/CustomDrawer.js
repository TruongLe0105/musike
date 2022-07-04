import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

function CustomDrawer(props) {
  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={['#424242', '#212121']}
        useAngle={true}
        angle={359.81}
        locations={[0.005, 0.2]}
        style={{height: '100%'}}>
        <DrawerContentScrollView
          {...props}
          contentContainerStyle={{
            flex: 1,
          }}>
          <View style={{flex: 1}}>
            <DrawerItemList {...props} />
          </View>
        </DrawerContentScrollView>
        <View
          style={{
            padding: 20,
            borderTopColor: 'white',
            borderTopWidth: 1,
          }}>
          <TouchableOpacity style={{paddingVertical: 15}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon name="music" size={16} color="white" />
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Roboto-Medium',
                  marginLeft: 5,
                  color: 'white',
                }}>
                Custom Footer
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Login')}
            style={{paddingVertical: 15}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="sign-out-alt" size={16} color="white" />
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Roboto-Medium',
                  marginLeft: 5,
                  color: 'white',
                }}>
                Logout
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.toggleDrawer()}
            style={{paddingVertical: 15}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="sign-out-alt" size={16} color="white" />
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Roboto-Medium',
                  marginLeft: 5,
                  color: 'white',
                }}>
                Leave
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}

export default CustomDrawer;

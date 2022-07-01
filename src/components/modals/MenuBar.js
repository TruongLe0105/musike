import React from 'react';
import Modal from 'react-native-modal';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

function MenuBar({isVisible, toggle, navigation}) {
  const handleLogout = () => {
    AsyncStorage.removeItem('logged');
    navigation.navigate('Login');
  };

  return (
    <View style={{width: '100%'}}>
      <Modal isVisible={isVisible} swipeDirection="left">
        <ScrollView
          style={{
            flex: 1,
            backgroundColor: 'white',
            padding: 15,
            borderRadius: 5,
            paddingBottom: 150,
          }}>
          <TouchableOpacity>
            <View>
              <Icon
                onPress={toggle}
                name="arrow-left"
                size={30}
                color="#FF344A"
              />
            </View>
            <Text
              onPress={handleLogout}
              style={{color: 'black', marginTop: 20}}>
              Logout
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </Modal>
    </View>
  );
}

export default MenuBar;

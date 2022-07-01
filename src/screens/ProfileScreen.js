import React from 'react';
import {View, Text, Image} from 'react-native';

import avatar from '../assets/sources/logo.png';

function ProfileScreen() {
  return (
    <View>
      <Text>Your name</Text>
      <Image source={avatar} style={{width: 100, height: 100}} />
    </View>
  );
}

export default ProfileScreen;

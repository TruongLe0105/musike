import React from 'react';
import {useDrawerStatus} from '@react-navigation/drawer';

import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function IconBar({navigation}) {
  return (
    <TouchableOpacity
      onPress={() => navigation.openDrawer()}
      style={{
        width: 100,
        height: 100,
        borderRadius: 5,
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 100,
      }}>
      <Icon name={'bars'} size={30} color="#FF344A" />
    </TouchableOpacity>
  );
}

export default IconBar;

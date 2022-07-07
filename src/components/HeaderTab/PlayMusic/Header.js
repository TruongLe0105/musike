import React from 'react';
import {TouchableOpacity, View, Text, Image, StyleSheet} from 'react-native';

import vector from '../../../assets/sources/playMusic/Vector.png';
import ellipse from '../../../assets/sources/playMusic/ellipse.png';

function Header({navigation}) {
  return (
    <View style={styles.wrapperHeader}>
      <View style={styles.wrapperLeft}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={vector} />
        </TouchableOpacity>
        <Text style={styles.title}>Music play to earn</Text>
      </View>
      <TouchableOpacity style={styles.iconEllipse}>
        <Image source={ellipse} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapperHeader: {
    flexDirection: 'row',
    zIndex: 2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 26,
    paddingRight: 23,
    marginTop: 23,
  },
  wrapperLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 20,
  },
  iconEllipse: {
    position: 'absolute',
    right: 10,
    paddingHorizontal: 13,
  },
});

export default Header;

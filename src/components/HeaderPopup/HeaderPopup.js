import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import profileBg from '../../assets/sources/Catergories/categories8.png';
import avt from '../../assets/sources/Catergories/avatar.png';
import styles from './style';

const COLORS = {clearIcon: '#D1D1D1'};

const HeaderPopup = ({navigation}) => {
  return (
    <View style={styles.headerProfile}>
      <Image source={profileBg} style={styles.profileBg} />
      <View style={styles.avtWrap}>
        <Text style={styles.circle} />
        <Image source={avt} style={styles.avt} />
      </View>
      <TouchableOpacity
        style={styles.close}
        onPress={() => navigation.goBack()}>
        <Icon name="clear" size={18} color={COLORS.clearIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderPopup;

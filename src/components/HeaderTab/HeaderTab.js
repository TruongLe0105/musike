import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import PreIcon from '../../assets/sources/Catergories/VectorIcon.png';
import styles from './styles';

const HeaderTab = ({title, avatar}) => {
  return (
    <View style={styles.headerTab}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={PreIcon} style={styles.prevIcon} />
        <Text
          style={{textTransform: 'capitalize', color: 'white', fontSize: 24}}>
          {title}
        </Text>
      </View>
      <View style={styles.avtBorder}>
        <Text
          style={{
            width: 54,
            height: 54,
            opacity: 0.6,
            backgroundColor: '#fff',
            borderRadius: 50,
          }}></Text>
        <Image source={avatar} style={styles.avt} />
      </View>
    </View>
  );
};

export default HeaderTab;

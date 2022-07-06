import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import PreIcon from '../../assets/sources/Catergories/VectorIcon.png';
import avt from '../../assets/sources/Catergories/avatar.png';
import logoImg from '../../assets/sources/redLogo.png';
import styles from './styles';

const HeaderTab = ({title, logo, navigation}) => {
  return (
    <>
      <View style={styles.headerTab}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={PreIcon} style={styles.prevIcon} />
          </TouchableOpacity>
          <Text
            style={{textTransform: 'capitalize', color: 'white', fontSize: 24}}>
            {title}
          </Text>
        </View>
        <TouchableOpacity style={styles.avtBorder}>
          <Text
            style={{
              width: 54,
              height: 54,
              opacity: 0.6,
              backgroundColor: '#fff',
              borderRadius: 50,
            }}></Text>
          <Image source={avt} style={styles.avt} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          position: 'absolute',
          alignItems: 'center',
          top: 10,
          width: '100%',
        }}>
        {logo && <Image style={styles.logo} source={logoImg} />}
      </View>
    </>
  );
};

export default HeaderTab;

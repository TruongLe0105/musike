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
        <View style={styles.headerTabContent}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={PreIcon} style={styles.prevIcon} />
          </TouchableOpacity>
          <Text style={styles.title}>{title}</Text>
        </View>
        {logo && <Image style={styles.logo} source={logoImg} />}
        <TouchableOpacity style={styles.avtWrap}>
          <Text style={styles.avtBorder}></Text>
          <Image source={avt} style={styles.avt} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default HeaderTab;

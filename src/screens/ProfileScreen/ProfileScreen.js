import React from 'react';
import HeaderTab from '../../components/HeaderTab/HeaderTab';
import LinearGradient from 'react-native-linear-gradient';
import ProfileScreenItem from './components/ProfileScreenItem/ProfileScreenItem';
import HeaderPopup from '../../components/HeaderPopup/HeaderPopup';
import {View, ScrollView} from 'react-native';
import styles from './styles';

function ProfileScreen({navigation}) {
  return (
    <LinearGradient
      colors={['#000', '#1B1B1B', '#131313']}
      style={styles.gradient}>
      <HeaderTab logo={true} navigation={navigation} />
      <ScrollView>
        <View style={styles.headerItem}>
          <HeaderPopup navigation={navigation} />
          <ProfileScreenItem navigation={navigation} />
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

export default ProfileScreen;

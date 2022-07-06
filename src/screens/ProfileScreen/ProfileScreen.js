import React from 'react';
import {SafeAreaView} from 'react-native';
import HeaderTab from '../../components/HeaderTab/HeaderTab';
import LinearGradient from 'react-native-linear-gradient';
import ProfileScreenItem from './components/ProfileScreenItem/ProfileScreenItem';
import styles from './styles';

function ProfileScreen({navigation}) {
  return (
    <SafeAreaView>
      <LinearGradient
        colors={['#000', '#1B1B1B', '#131313']}
        style={styles.gradient}>
        <HeaderTab logo={true} navigation={navigation} />
        <ProfileScreenItem />
      </LinearGradient>
    </SafeAreaView>
  );
}

export default ProfileScreen;

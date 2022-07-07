import React from 'react';
import HeaderTab from '../../components/HeaderTab/HeaderTab';
import LinearGradient from 'react-native-linear-gradient';
import ProfileScreenItem from './components/ProfileScreenItem/ProfileScreenItem';
import {ScrollView} from 'react-native';
import styles from './styles';

function ProfileScreen({navigation}) {
  return (
    <ScrollView>
      <LinearGradient
        colors={['#000', '#1B1B1B', '#131313']}
        style={styles.gradient}>
        <HeaderTab logo={true} navigation={navigation} />
        <ProfileScreenItem navigation={navigation} />
      </LinearGradient>
    </ScrollView>
  );
}

export default ProfileScreen;

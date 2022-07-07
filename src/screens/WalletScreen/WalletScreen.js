import React from 'react';
import {ScrollView, View} from 'react-native';
import HeaderTab from '../../components/HeaderTab/HeaderTab';
import HeaderPopup from '../../components/HeaderPopup/HeaderPopup';
import LinearGradient from 'react-native-linear-gradient';
import WalletScreenItem from './components/WalletScreenItem/WalletScreenItem';
import styles from './style';

const WalletScreen = ({navigation}) => {
  return (
    <LinearGradient
      colors={['#000', '#1B1B1B', '#131313']}
      style={styles.gradient}>
      <HeaderTab logo={true} navigation={navigation} />
      <ScrollView>
        <View style={styles.headerItem}>
          <HeaderPopup navigation={navigation} />
          <WalletScreenItem />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default WalletScreen;

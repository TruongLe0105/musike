import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import {
  WalletScreenMethod,
  WalletScreenDetail,
} from '../../../../utilies/MockData';

const WalletScreenItem = () => {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Wallet</Text>
      <Text style={styles.line} />
      <Text style={styles.label}>Wallet address</Text>
      <TextInput style={styles.textInput}>0xc4cto8H6218Hnk91n8HAKW</TextInput>
      <Text style={styles.label}>
        MUSIKE<Text style={styles.redText}> 7.598 MUSIKE</Text>
      </Text>
      <Text style={styles.friend}>Refer a friend</Text>
      <Text style={styles.label}>MUSIKE Link code</Text>
      <TextInput style={styles.textInput}>#M0123456789</TextInput>
      <View style={styles.footer}>
        <View style={styles.methodList}>
          {WalletScreenMethod.map((data, index) => (
            <Text style={styles.textMethod} key={index}>
              {data}
            </Text>
          ))}
        </View>
        <View style={styles.detailList}>
          {WalletScreenDetail.map((data, index) => (
            <Text style={styles.textDetail} key={index}>
              {data}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

export default WalletScreenItem;

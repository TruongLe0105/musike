import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './style';

const ProfileScreenItem = ({navigation}) => {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Edit My Profile</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Your name</Text>
        <TextInput style={styles.textInput} placeholder="Your name">
          Mark Cooper
        </TextInput>
        <Text style={styles.label}>Your phone number</Text>
        <TextInput style={styles.textInput} placeholder="Your phone number">
          (603) 555-0123
        </TextInput>
        <Text style={styles.label}>Wallet address</Text>
        <View style={styles.textInputWrap}>
          <TextInput style={styles.textInput} placeholder="Wallet address">
            0x4cto7....
          </TextInput>
          <TouchableOpacity
            style={styles.showWallet}
            onPress={() => navigation.navigate('Wallet')}>
            <Icon name="login" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
      <Text style={styles.line}></Text>
      <View>
        <Text style={styles.optionsTitle}>Option</Text>
        <View style={styles.optionsList}>
          <TouchableOpacity>
            <Text style={styles.optionsText}>My notes</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.optionsText}>Change password</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.optionsText}>Log out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreenItem;

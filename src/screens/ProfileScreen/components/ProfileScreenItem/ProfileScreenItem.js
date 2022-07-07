import React from 'react';
import {View, Text, Image, TextInput, Touchable} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import avt from '../../../../assets/sources/Catergories/avatar.png';
import profileBg from '../../../../assets/sources/Catergories/categories8.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './style';

const COLORS = {clearIcon: '#D1D1D1'};

const ProfileScreenItem = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.headerProfile}>
        <Image source={profileBg} style={styles.profileBg} />
        <View style={styles.avtWrap}>
          <Text style={styles.circle} />
          <Image source={avt} style={styles.avt} />
        </View>
        <TouchableOpacity style={styles.close}>
          <Icon name="clear" size={18} color={COLORS.clearIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Edit My Profile</Text>
        <Text style={styles.label}>Your name</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Mark Cooper"></TextInput>
        <Text style={styles.label}>Your phone number</Text>
        <TextInput
          style={styles.textInput}
          placeholder="(603) 555-0123"></TextInput>
        <Text style={styles.label}>Wallet address</Text>
        <TextInput style={styles.textInput} placeholder="0x4cto7"></TextInput>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
        <Text style={styles.line}></Text>
        <View>
          <Text style={styles.optionsTitle}>Option</Text>
          <View style={styles.optionsList}>
            <TouchableOpacity style={styles.optionsItem}>
              <Text style={styles.optionsText}>My notes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionsItem}>
              <Text style={styles.optionsText}>Change password</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionsItem}>
              <Text style={styles.optionsText}>Log out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreenItem;

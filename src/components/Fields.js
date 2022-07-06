import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import {
  isValidEmail,
  isValidPassword,
  isValidNumber,
} from '../utilies/Validations';
import styles from '../pages/LoginStyle';

export const FieldEmail = () => {
  const [name, setName] = useState();
  const [isInValidEmail, setIsInValidEmail] = useState(false);
  const [isEmptyEmail, setIsEmptyEmail] = useState(false);
  const [isBlurEmail, setIsBlurEmail] = useState(false);

  //Kiem tra email hoac so dien thoai
  const checkIsValidEmail = () => {
    if (name) {
      setIsBlurEmail(true);
      setIsEmptyEmail(false);

      isValidEmail(name)
        ? setIsInValidEmail(false)
        : isValidNumber(name)
        ? setIsInValidEmail(false)
        : setIsInValidEmail(true);
    } else {
      setIsInValidEmail(false);
      setIsEmptyEmail(true);
    }
  };
  //Xu li khi typing input email
  const handleChangeEmail = text => {
    setName(text);
    setIsEmptyEmail(false);

    if (isBlurEmail) {
      isValidEmail(text) ? setIsInValidEmail(false) : setIsInValidEmail(true);
    }
  };

  return (
    <View>
      <Text style={styles.content}>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => handleChangeEmail(text)}
        onBlur={checkIsValidEmail}
        placeholder="Email or Phone"
      />
      {isInValidEmail && <Text style={styles.message}>Invalid Email!</Text>}
      {isEmptyEmail && <Text style={styles.message}>Nhap field nay!</Text>}
    </View>
  );
};

export const FieldPassword = () => {
  const [isInvalidPassword, setIsInvalidPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [isEmptyPassword, setIsEmptyPassword] = useState(false);
  const [isBlurPassword, setIsBlurPassword] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [isSecure, setIsSecure] = useState(true);

  const checkIsValidPassword = () => {
    if (password) {
      setIsBlurPassword(true);
      setIsEmptyPassword(false);

      isValidPassword(password)
        ? setIsInvalidPassword(false)
        : setIsInvalidPassword(true);
    } else {
      setIsInvalidPassword(false);
      setIsEmptyPassword(true);
    }
  };

  //Xu li khi typing input password
  const handleChangePassword = text => {
    setPassword(text);
    setIsEmptyPassword(false);

    if (isBlurPassword) {
      isValidPassword(text)
        ? setIsInvalidPassword(false)
        : setIsInvalidPassword(true);
    }
  };

  //Xu li an hien password
  const handleSecurePassword = newValue => {
    setToggleCheckBox(newValue);
    setIsSecure(!isSecure);
  };

  return (
    <View style={{marginBottom: 5, marginTop: 5}}>
      <View style={styles.passwordTop}>
        <Text style={styles.content}>Password</Text>
        <View style={styles.securePassword}>
          <Text style={{color: 'red'}}>👁️‍🗨️</Text>
          <CheckBox
            value={toggleCheckBox}
            onValueChange={newValue => handleSecurePassword(newValue)}
          />
        </View>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={text => handleChangePassword(text)}
        onBlur={checkIsValidPassword}
        placeholder="Enter your password"
        secureTextEntry={isSecure}
      />
      {isInvalidPassword && <Text style={styles.message}>Password wrong!</Text>}
      {isEmptyPassword && <Text style={styles.message}>Nhap mat khau</Text>}
    </View>
  );
};

// export default Fields

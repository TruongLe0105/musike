import React, {useState, useEffect} from 'react';
import Home from '../../Home';

import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {TextInput} from 'react-native-gesture-handler';

import {isValidEmail, isValidPassword} from '../utilies/Validations';

function Login() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [name, setName] = useState('');
  const [isSecure, setIsSecure] = useState(true);
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const [isInvalidPassword, setIsInvalidPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [account, setAccount] = useState({name, password});

  const handleLogin = () => {
    console.log(account);
    // Navigation.navigate('Home');
  };

  const checkIsValidEmail = () => {
    isValidEmail(name) ? setIsInvalidEmail(false) : setIsInvalidEmail(true);
  };

  const checkIsValidPassword = () => {
    isValidPassword(password)
      ? setIsInvalidPassword(false)
      : setIsInvalidPassword(true);
  };

  const handleChangeEmail = text => {
    setName(text);
    setAccount({name: text});

    isValidEmail(name) ? setIsInvalidEmail(false) : setIsInvalidEmail(true);
  };

  const handleChangePassword = text => {
    setPassword(text);
    setAccount({...account, password: text});

    isValidPassword(password)
      ? setIsInvalidPassword(false)
      : setIsInvalidPassword(true);
  };

  const handleSecurePassword = newValue => {
    setToggleCheckBox(newValue);
    setIsSecure(!isSecure);
  };

  return (
    <View style={styles.container}>
      <View style={styles.formLogin}>
        <View>
          <Text style={styles.content}>User</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => handleChangeEmail(text)}
            onBlur={checkIsValidEmail}
            placeholder="Email or phone"
          />
          {isInvalidEmail && (
            <Text style={{color: 'red', margin: 5}}>Invalid Email!</Text>
          )}
        </View>
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
          {isInvalidPassword && (
            <Text style={{color: 'red', margin: 5}}>Password wrong!</Text>
          )}
        </View>
        <Button title="Login" onPress={handleLogin} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  formLogin: {
    width: '100%',
    padding: 10,
  },
  content: {
    color: 'green',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: 'red',
  },
  securePassword: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 10,
  },
  passwordTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  primary: {
    borderRadius: 15,
    fontWeight: 'bold',
    fontSize: '24',
    backgroundColor: 'green',
    width: '100%',
    color: 'white',
  },
  //   secondary: {
  //     color: 'black',
  //   },
});

export default Login;

import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

import image from '../assets/sources/image2.png';
import background from '../assets/bootsplash_logo.png';

import { Button, ErrorMessage, Header, TextField } from '../components/Styled';
import { isValidEmail, isValidPassword } from '../utilies/Validations';

import styles from './LoginStyle';

function LoginMusike({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');

  //Xac dinh tai khoan nay da login
  const loggedAccount = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('logged', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  //Luu data vao Storage
  const storeData = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('account', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  //Get data from Storage
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('account');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };

  //Xu li input Email
  const handleChangeEmail = text => {
    setEmail(text);
    if (isValidEmail(text)) setEmailMessage('');
  };

  //Xu li input Password
  const handleChangePassword = text => {
    setPassword(text);
    if (isValidPassword(text)) setPasswordMessage('');
  };

  //Ham login
  const handleLogin = () => {
    const check = isValidEmail(email) && isValidPassword(password);
    if (check) {
      storeData({ email, password });
      loggedAccount(true);
      navigation.navigate('Onboarding');
    } else {
      isValidEmail(email) ? '' : checkErrorMessageEmail();
      isValidPassword(password) ? '' : checkErrorMessagePassword();
    }
  };

  //Ham onBlur trong input
  const handleBlurEmail = () => {
    const checkEmail = isValidEmail(email);
    if (!checkEmail) {
      checkErrorMessageEmail();
    }
  };

  const handleBlurPassword = () => {
    const checkPassword = isValidPassword(password);
    if (!checkPassword) {
      checkErrorMessagePassword();
    }
  };

  //Check tin nhan loi trong 2 truong hop
  const checkErrorMessageEmail = () => {
    email
      ? setEmailMessage('Invalid email!')
      : setEmailMessage('This field must has a value');
  };

  const checkErrorMessagePassword = () => {
    password
      ? setPasswordMessage('Password Wrong!')
      : setPasswordMessage('This field must has a value!');
  };

  useEffect(() => {
    getData().then(result => {
      result.email ? setEmail(result.email) : '';
      result.password ? setPassword(result.password) : '';
    });
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.body}>
        <Image style={styles.image} source={image} />
        <View style={styles.wrapper}>
          <ScrollView>
            <View>
              <Header style={{ color: '#FF344A' }}>Sign In</Header>
              <Header>To Your Account</Header>
            </View>
            <View>
              <TextField>Email address</TextField>
              <TextInput
                onChangeText={text => handleChangeEmail(text)}
                onBlur={handleBlurEmail}
                style={styles.input}
                value={email}
                placeholder="Example@gmail.com"
              />
              {emailMessage.length > 0 && (
                <ErrorMessage>{emailMessage}</ErrorMessage>
              )}
            </View>
            <View>
              <TextField>Password</TextField>
              <TextInput
                onChangeText={text => handleChangePassword(text)}
                onBlur={handleBlurPassword}
                secureTextEntry
                style={styles.input}
                value={password}
                placeholder="Password"
              />
              {passwordMessage.length > 0 && (
                <ErrorMessage>{passwordMessage}</ErrorMessage>
              )}
            </View>
            <TouchableOpacity>
              <TextField style={styles.forgotPassWord}>
                Forgot password?
              </TextField>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogin} style={{ marginBottom: 16 }}>
              <Button>Login</Button>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn}>
              <Icon style={styles.icon} name="google" />
              <Text style={styles.textBtn}>Login with Google</Text>
            </TouchableOpacity>
            <View style={styles.footer}>
              <TextField style={styles.question}>
                You don't have an account?
              </TextField>
              <TouchableOpacity>
                <TextField style={styles.register}>Register now</TextField>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default LoginMusike;

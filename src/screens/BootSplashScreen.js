import React, {useEffect, useState} from 'react';

import {SafeAreaView, Animated, StyleSheet, Easing} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNBootSplash from 'react-native-bootsplash';

import bootSplash from '../assets/sources/bootSplash.png';
import bootSplashLogo from '../assets/sources/logo.png';
import styles from '../HomeStyle';

function BootSplashScreen({navigation}) {
  const [bootSplashIsVisible, setBootSplashIsVisible] = useState(true);

  const opacity = React.useRef(new Animated.Value(1)).current;

  const opacityXX = opacity?.interpolate({
    inputRange: [0, 0.25, 0.5, 0.6, 0.75, 1],
    outputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
  });

  const initApp = async () => {
    // You can uncomment this line to add a delay on app startup
    // await fakeApiCallWithoutBadNetwork(3000);
    try {
      // Animated.timing(scaleValue.current, {
      //   useNativeDriver: true,
      //   toValue: 1,
      //   // toValue: Dimensions.get('window').height,
      //   duration: 3000,
      // }).start();
      Animated.timing(opacity, {
        useNativeDriver: true,
        toValue: 0,
        duration: 3000,
        easing: Easing.linear,
      }).start(() => {
        setBootSplashIsVisible(false);
        logged();
      });
    } catch (error) {
      setBootSplashIsVisible(false);
    }
    await RNBootSplash.hide();
  };

  const checkAccountLogged = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('logged');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };

  const logged = () => {
    checkAccountLogged().then(result => {
      result ? navigation.navigate('Onboarding') : navigation.navigate('Login');
    });
  };

  useEffect(() => {
    initApp();
  }, []);

  return (
    <SafeAreaView style={styles.screenContainer}>
      {/* <ActivityIndicator /> */}
      {bootSplashIsVisible && (
        <Animated.View
          style={[
            StyleSheet.absoluteFill,
            styles.bootsplash,
            // {opacity: opacityXX},
          ]}>
          <Animated.Image
            source={bootSplash}
            fadeDuration={2}
            // resizeMode="contain"
            style={[
              styles.image,
              {
                opacity: opacityXX,
              },
            ]}
          />
          <Animated.Image
            source={bootSplashLogo}
            fadeDuration={2}
            // resizeMode="contain"
            style={[
              styles.logo,
              {
                opacity: opacityXX,
              },
            ]}
          />
        </Animated.View>
      )}
    </SafeAreaView>
  );
}

export default BootSplashScreen;

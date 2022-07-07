import React, {useRef, useEffect} from 'react';

import {View, StyleSheet, Animated, Easing} from 'react-native';
import {usePlaybackState, State} from 'react-native-track-player';

function ActionMusic() {
  const opacityFirst = useRef(new Animated.Value(1));
  const opacitySecond = useRef(new Animated.Value(0));

  const state = usePlaybackState();
  const isPlaying = state === State.Playing;

  useEffect(() => {
    if (!opacityFirst.current || !opacitySecond.current) {
      return;
    }

    if (isPlaying) {
      Animated.loop(
        Animated.timing(opacityFirst.current, {
          toValue: 0,
          duration: 2000,
          easing: Easing.linear, // Easing is an additional import from react-native
          useNativeDriver: true, // To make use of native driver for performance
        }),
      ).start();
      Animated.loop(
        Animated.timing(opacitySecond.current, {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear, // Easing is an additional import from react-native
          useNativeDriver: true, // To make use of native driver for performance
        }),
      ).start();
    } else {
      opacityFirst.current.setValue(1);
      opacitySecond.current.setValue(0);
    }
  }, [state]);

  const opacityViewFirst = opacityFirst?.current?.interpolate({
    inputRange: [0, 1],
    outputRange: [0.6, 1],
  });
  const opacityViewSecond = opacitySecond?.current?.interpolate({
    inputRange: [0, 1],
    outputRange: [0.6, 1],
  });

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Animated.View
        // style={[styles.artwork, {transform: [{rotate: spin}]}]}
        style={{
          width: 2.5,
          height: '100%',
          marginRight: 2,
          borderRadius: 0.5,
          backgroundColor: '#FFFFFF',
          opacity: opacityViewFirst,
        }}
      />
      <Animated.View
        style={{
          width: 2.5,
          height: '80%',
          marginRight: 2,
          borderRadius: 0.5,
          backgroundColor: '#FFFFFF',
          opacity: opacityViewSecond,
        }}
      />
      <Animated.View
        style={{
          width: 2.5,
          height: '60%',
          marginRight: 2,
          borderRadius: 0.5,
          backgroundColor: '#FFFFFF',
          opacity: opacityViewFirst,
        }}
      />
      <Animated.View
        style={{
          width: 2.5,
          height: '40%',
          marginRight: 2,
          borderRadius: 0.5,
          backgroundColor: '#FFFFFF',
          opacity: opacityViewSecond,
        }}
      />
      <Animated.View
        style={{
          width: 2.5,
          height: '30%',
          marginRight: 2,
          borderRadius: 0.5,
          backgroundColor: '#FFFFFF',
          opacity: opacityViewFirst,
        }}
      />
      <Animated.View
        style={{
          width: 2.5,
          height: '100%',
          marginRight: 2,
          borderRadius: 0.5,
          backgroundColor: '#FFFFFF',
          opacity: opacityViewSecond,
        }}
      />
      <Animated.View
        style={{
          width: 2.5,
          height: '20%',
          marginRight: 2,
          borderRadius: 0.5,
          backgroundColor: '#FFFFFF',
          opacity: opacityViewFirst,
        }}
      />
      <Animated.View
        style={{
          width: 2.5,
          height: '60%',
          marginRight: 2,
          borderRadius: 0.5,
          backgroundColor: '#FFFFFF',
          opacity: opacityViewSecond,
        }}
      />
      <Animated.View
        style={{
          width: 2.5,
          height: '80%',
          marginRight: 2,
          borderRadius: 0.5,
          backgroundColor: '#FFFFFF',
          opacity: opacityViewFirst,
        }}
      />
      <Animated.View
        style={{
          width: 2.5,
          height: '60%',
          marginRight: 2,
          borderRadius: 0.5,
          backgroundColor: '#FFFFFF',
          opacity: opacityViewSecond,
        }}
      />
      <Animated.View
        style={{
          width: 2.5,
          height: '40%',
          marginRight: 2,
          borderRadius: 0.5,
          backgroundColor: '#FFFFFF',
          opacity: opacityViewFirst,
        }}
      />
      <Animated.View
        style={{
          width: 2.5,
          height: '50%',
          marginRight: 2,
          borderRadius: 0.5,
          backgroundColor: '#FFFFFF',
          opacity: opacityViewSecond,
        }}
      />
      <Animated.View
        style={{
          width: 2.5,
          height: '100%',
          marginRight: 2,
          borderRadius: 0.5,
          backgroundColor: '#FFFFFF',
          opacity: opacityViewFirst,
        }}
      />
      <Animated.View
        style={{
          width: 2.5,
          height: '40%',
          marginRight: 2,
          borderRadius: 0.5,
          backgroundColor: '#FFFFFF',
          opacity: opacityViewSecond,
        }}
      />
      <Animated.View
        style={{
          width: 2.5,
          height: '80%',
          marginRight: 2,
          borderRadius: 0.5,
          backgroundColor: '#FFFFFF',
          opacity: opacityViewFirst,
        }}
      />
      <Animated.View
        style={{
          width: 2.5,
          height: '100%',
          marginRight: 2,
          borderRadius: 0.5,
          backgroundColor: '#FFFFFF',
          opacity: opacityViewSecond,
        }}
      />
      <Animated.View
        style={{
          width: 2.5,
          height: '60%',
          marginRight: 2,
          borderRadius: 0.5,
          backgroundColor: '#FFFFFF',
          opacity: opacityViewFirst,
        }}
      />
      <Animated.View
        style={{
          width: 2.5,
          height: '80%',
          marginRight: 2,
          borderRadius: 0.5,
          backgroundColor: '#FFFFFF',
          opacity: opacityViewSecond,
        }}
      />
      <Animated.View
        style={{
          width: 2.5,
          height: '40%',
          marginRight: 2,
          borderRadius: 0.5,
          backgroundColor: '#FFFFFF',
          opacity: opacityViewFirst,
        }}
      />
    </View>
  );
}

export default ActionMusic;

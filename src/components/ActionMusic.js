import React, {useRef, useEffect} from 'react';

import {View, StyleSheet, Animated, Easing, FlatList, Text} from 'react-native';
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
          easing: Easing.quad, // Easing is an additional import from react-native
          useNativeDriver: true, // To make use of native driver for performance
        }),
      ).start();
      Animated.loop(
        Animated.timing(opacitySecond.current, {
          toValue: 1,
          duration: 2000,
          easing: Easing.quad, // Easing is an additional import from react-native
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
    outputRange: [0, 4],
  });
  const opacityViewSecond = opacitySecond?.current?.interpolate({
    inputRange: [0, 1],
    outputRange: [0.7, 1],
  });

  const LIST = [
    '100%',
    '80%',
    '60%',
    '50%',
    '40%',
    '100%',
    '20%',
    '50%',
    '80%',
    '60%',
    '40%',
    '50%',
    '100%',
    '40%',
    '80%',
    '100%',
    '60%',
    '80%',
    '40%',
  ];

  // const randomOpacity = [opacityViewFirst, opacityViewSecond];

  const renderItem = ({item, index}) => {
    return (
      <Animated.Text
        key={index}
        style={{
          width: 3,
          height: item,
          marginRight: 2,
          borderRadius: 0.5,
          backgroundColor: '#FFFFFF',
          // opacity: randomOpacity[Math.floor(Math.random() * 2)],
          // opacity: opacityViewFirst,
          transform: [{translateY: opacityViewFirst}],
          alignSelf: 'center',
        }}
      />
    );
  };
  return (
    <Animated.FlatList data={LIST} renderItem={renderItem} horizontal={true} />
  );
}

export default ActionMusic;

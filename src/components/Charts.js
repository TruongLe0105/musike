import React, {useEffect, useRef} from 'react';
import {Animated, Easing, FlatList, View, Text} from 'react-native';
import {usePlaybackState, State} from 'react-native-track-player';

function Charts({start, end, inputRange, outputRange}) {
  const heightChange = useRef(new Animated.Value(0));
  const heightChange1 = useRef(new Animated.Value(1));
  const heightChange2 = useRef(new Animated.Value(0));
  const heightChange3 = useRef(new Animated.Value(1));
  const heightChange4 = useRef(new Animated.Value(0));

  const state = usePlaybackState();
  const isPlaying = state === State.Playing;

  useEffect(() => {
    if (!heightChange.current) {
      return;
    }

    if (isPlaying) {
      Animated.loop(
        Animated.timing(heightChange.current, {
          toValue: 1,
          duration: 800,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ).start();
      Animated.loop(
        Animated.timing(heightChange1.current, {
          toValue: 0,
          duration: 800,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ).start();
      Animated.loop(
        Animated.timing(heightChange2.current, {
          toValue: 1,
          duration: 800,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ).start();
      Animated.loop(
        Animated.timing(heightChange3.current, {
          toValue: 0,
          duration: 800,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ).start();
      Animated.loop(
        Animated.timing(heightChange4.current, {
          toValue: 1,
          duration: 800,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ).start();
    } else {
      heightChange.current.setValue(0);
      heightChange1.current.setValue(1);
      heightChange2.current.setValue(0);
      heightChange3.current.setValue(1);
      heightChange4.current.setValue(0);
    }
  }, [state]);

  const col = heightChange?.current?.interpolate({
    inputRange: [0, 0.5, 0.75, 1],
    outputRange: [0, 16, 16, 0],
  });
  const col1 = heightChange1?.current?.interpolate({
    inputRange: [0, 0.5, 0.75, 1],
    outputRange: [0, 16, 16, 0],
  });
  const col2 = heightChange2?.current?.interpolate({
    inputRange: [0, 0.5, 0.75, 1],
    outputRange: [4, 16, 16, 4],
  });
  const col3 = heightChange3?.current?.interpolate({
    inputRange: [0, 0.5, 0.75, 1],
    outputRange: [2, 16, 16, 2],
  });
  const col4 = heightChange4?.current?.interpolate({
    inputRange: [0, 0.5, 0.75, 1],
    outputRange: [0, 16, 16, 0],
  });

  const DATA = ['40%', '100%', '80%', '90%', '100%'];
  const column = [col, col1, col2, col3, col4];

  const renderItem = ({item, index}) => {
    return (
      <Animated.Text
        key={index}
        style={{
          transform: [{translateY: column[index]}],
          marginLeft: 3,
          width: 4,
          alignSelf: 'flex-end',
          backgroundColor: 'white',
        }}
      />
    );
  };

  return (
    <View>
      <Animated.FlatList
        data={DATA}
        renderItem={renderItem}
        horizontal={true}
      />
    </View>
  );
}

export default Charts;

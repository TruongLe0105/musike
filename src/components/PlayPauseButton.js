import React, {useRef} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {usePlaybackState, State} from 'react-native-track-player';

import {Button} from './Button';
import {useOnTogglePlayback} from '../hooks';
import circle from '../assets/sources/playMusic/circle.png';
import combined from '../assets/sources/playMusic/combined.png';

import AsyncStorage from '@react-native-async-storage/async-storage';

import TrackPlayer, {useProgress} from 'react-native-track-player';

import Toast from '@rimiti/react-native-toastify';

import Icon from 'react-native-vector-icons/FontAwesome';

export const PlayPauseButton = ({refToast, showReward}) => {
  const progress = useProgress();

  const state = usePlaybackState();
  const isPlaying = state === State.Playing;
  const isLoading = state === State.Connecting || state === State.Buffering;

  const storeData = async value => {
    try {
      await AsyncStorage.setItem('test', JSON.stringify(value));
    } catch (e) {
      // saving error
    }
  };

  const getData = async key => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        // value previously stored
        return JSON.parse(value);
      }
      return null;
    } catch (e) {
      // error reading value
      // console.log(e);
    }
  };

  const handleData = async () => {
    const {
      startTime = 0,
      isPlayTemp = 0,
      pointNow = 0,
      totalPoint = 0,
      tempTime,
    } = (await getData('test')) || {};

    if (isPlaying && isPlayTemp == 0) {
      const newDate = new Date().getTime() / 1000;

      await storeData({
        startTime: newDate,
        tempTime: tempTime || 0,
        isPlayTemp: 1,
        pointNow,
        totalPoint,
      });
    } else if (!isPlaying && isPlayTemp == 1 && startTime != 0) {
      const newDate = new Date().getTime() / 1000;

      await storeData({
        startTime: 0,
        tempTime: tempTime + (newDate - startTime),
        isPlayTemp: 0,
        pointNow,
        totalPoint,
      });
    }
  };

  React.useEffect(() => {
    handleData();

    if (progress.position >= 60) {
      showReward();
      TrackPlayer.skipToNext();
    }
  }, [progress]);

  const onTogglePlayback = useOnTogglePlayback();

  if (isLoading) {
    return (
      <View style={styles.statusContainer}>
        {isLoading && <ActivityIndicator />}
      </View>
    );
  }

  return (
    <>
      <TouchableOpacity
        onPress={onTogglePlayback}
        type="primary"
        style={{marginHorizontal: 30}}>
        {isPlaying && (
          <View style={styles.circle}>
            <Image source={circle} />
            <Image source={combined} style={{position: 'absolute'}} />
          </View>
        )}
        {!isPlaying && (
          <View style={styles.circle}>
            <Image source={circle} />
            <Icon
              name="play"
              size={20}
              color="white"
              style={{position: 'absolute'}}
            />
          </View>
        )}
      </TouchableOpacity>
      <Toast
        ref={refToast}
        style={{
          backgroundColor: 'white',
          paddingVertical: 10,
          fontSize: 14,
          paddingHorizontal: 20,
          textAlign: 'center',
        }}
        textStyle={{
          textAlign: 'center',
          color: 'black',
        }}
        position="center"
      />
    </>
  );
};

const styles = StyleSheet.create({
  statusContainer: {
    height: 40,
    marginTop: 20,
    marginBottom: 60,
  },
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

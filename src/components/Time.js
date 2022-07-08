import React, {useState, useEffect, useRef} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components';

import TrackPlayer from 'react-native-track-player';
import {StyleSheet, View, Text, Dimensions, Platform} from 'react-native';

import {usePlaybackState, State} from 'react-native-track-player';

import {useCurrentTrack} from '../hooks';
import ActionMusic from './ActionMusic';

const IS_IOS = Platform.OS === 'ios';
const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(100);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

let intervalCall;

export const ViewToken = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  margin-left: 16px;
  margin-right: 24px;
  margin-top: 10px;
`;

const App = () => {
  const track = useCurrentTrack();
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [temp, setTemp] = useState({});

  const [time, setTime] = useState(0);

  const state = usePlaybackState();
  const isPlaying = state === State.Playing;

  useEffect(() => {
    if (isPlaying) {
      intervalCall =
        !intervalCall &&
        setInterval(() => {
          setTime(prevCount => prevCount + 1);
        }, 1000);
      // console.log('before intervalCall:', intervalCall);
    } else {
      // console.log('after intervalCall:', intervalCall);

      clearInterval(intervalCall);
      intervalCall = null;
      handleData();
    }
  }, [isPlaying]);

  useEffect(() => {
    handleData();
  }, []);

  const handleData = async () => {
    const {
      startTime = 0,
      isPlayTemp,
      pointNow,
      totalPoint,
      tempTime = 0,
    } = (await getData('test')) || {};

    setTemp({
      startTime,
      isPlayTemp,
      pointNow,
      totalPoint,
      tempTime,
    });

    setTime(tempTime);
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('test');
      if (value !== null) {
        // value previously stored
        return JSON.parse(value);
      }
      return null;
    } catch (e) {
      // error reading value
    }
  };

  const textTime = () => {
    const minute = Math.floor(time / 60);
    const second = Math.floor(time - minute * 60);
    return `${Math.floor(time / 60)}m ${second}s`;
  };

  return (
    <View style={{marginBottom: 15}}>
      <View style={styles.wrapperToken}>
        <Text style={styles.tokenTitle}>Musike token</Text>
        <ActionMusic />
      </View>
      <ViewToken>
        <Text style={styles.textBlurred}>Mining time</Text>
        <Text style={styles.textSizeM}>{textTime()}</Text>
      </ViewToken>
      <ViewToken>
        <Text style={styles.textBlurred}>Earn today</Text>
        <Text style={styles.textSizeM}>
          {`${(time * 0.05).toFixed(2)} MUSIKE`}
        </Text>
      </ViewToken>
      <ViewToken>
        <Text style={styles.textBlurred}>Total earn</Text>
        <Text style={styles.textSizeM}>
          {`${(time * 0.05).toFixed(2)} MUSIKE`}
        </Text>
      </ViewToken>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperToken: {
    flexDirection: 'row',
    height: 20,
  },
  tokenTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    marginLeft: 16,
    marginRight: 30,
  },
  textSizeM: {
    fontWeight: '500',
    fontSize: 12,
    color: '#FFFFFF',
  },
  textBlurred: {
    fontWeight: '500',
    fontSize: 12,
    color: '#979797',
  },
});

export default App;

import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import TrackPlayer from 'react-native-track-player';

import {PlayPauseButton} from './PlayPauseButton';

import prev from '../assets/sources/playMusic/prev.png';
import next from '../assets/sources/playMusic/next.png';
import reload from '../assets/sources/playMusic/reload.png';
import iconMusic from '../assets/sources/playMusic/iconMusic.png';

import Icon from 'react-native-vector-icons/FontAwesome';

export const PlayerControls = ({refToast, showReward}) => {
  return (
    <View style={{width: '100%'}}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.icon}>
          <Icon name="random" color="#FF344A" size={16} />
        </TouchableOpacity>

        <View style={{flexDirection: 'row', marginHorizontal: 50}}>
          <TouchableOpacity
            onPress={() => TrackPlayer.skipToPrevious()}
            style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image source={prev} />
          </TouchableOpacity>
          <PlayPauseButton refToast={refToast} showReward={showReward} />
          <TouchableOpacity
            onPress={() => TrackPlayer.skipToNext()}
            style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image source={next} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.icon}>
          <Image source={reload} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
  },
});

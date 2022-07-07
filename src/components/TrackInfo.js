import React, {useRef, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Animated,
  Easing,
  TouchableOpacity,
} from 'react-native';
import {usePlaybackState, State} from 'react-native-track-player';

import heart from '../assets/sources/playMusic/heart.png';
import share from '../assets/sources/playMusic/share.png';

import Pop from '../../src/assets/resources/Pop.jpg';
import Hiphop from '../../src/assets/resources/hiphop.jpg';
import Rock from '../../src/assets/resources/Rock.jpg';
import Rhythm from '../../src/assets/resources/R_B.jpg';
import Reggae from '../../src/assets/resources/Reggae.png';
import Country from '../../src/assets/resources/country.jpg';
import Funk from '../../src/assets/resources/Funk.jpg';

const OBJ = {
  'Hunter master': Pop,
  Kiaxon: Hiphop,
  'What Cha Got There(GTR Added)': Rock,
  '견애차이 Duet ver 3': Rhythm,
  넌내게어려워AR: Reggae,
  '바람이었다 1절': Country,
  '어나더유니버스 Orchestra Arr Monitor': Funk,
};

export const TrackInfo = ({track}) => {
  const spinValue = useRef(new Animated.Value(0));

  const state = usePlaybackState();
  const isPlaying = state === State.Playing;
  // First set up animation

  useEffect(() => {
    if (!spinValue.current) {
      return;
    }
    // console.log('sssss');
    if (isPlaying) {
      // console.log('spinValue.current: ', spinValue.current);
      Animated.loop(
        Animated.timing(spinValue.current, {
          toValue: 1,
          duration: 5000,
          easing: Easing.linear, // Easing is an additional import from react-native
          useNativeDriver: true, // To make use of native driver for performance
        }),
      ).start();
    } else {
      // Animated.loop(Animated.timing(spinValue.current)).stop(0);
      Animated.loop(Animated.timing(spinValue.current)).stop(spinValue.current);
      // spinValue.current.setValue(0);
    }
  }, [state]);

  // Next, interpolate beginning and end values (in this case 0 and 1)
  const spin = spinValue?.current?.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        style={[styles.artwork, {transform: [{rotate: spin}]}]}
        source={
          OBJ[track?.title] || Pop
          // {uri: `${track?.artwork}`}
        }
      />
      <View style={styles.wrapperTrackTitle}>
        <View style={styles.wrapperIcon}>
          <TouchableOpacity>
            <Image source={heart} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconShare}>
            <Image source={share} />
          </TouchableOpacity>
        </View>
        <View style={{width: 200, alignItems: 'center'}}>
          <Text style={styles.titleText}>{track?.title}</Text>
        </View>
      </View>
      <Text style={styles.artistText}>{track?.artist}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
    width: '100%',
  },
  artwork: {
    width: 298,
    height: 298,
    marginTop: 30,
    backgroundColor: '#aaa',
    borderRadius: 150,
    borderWidth: 1,
    borderColor: '#aaa',
    shadowColor: 'red',
    shadowOpacity: 1,
  },
  wrapperTrackTitle: {
    marginTop: 20,
    marginBottom: 7,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  artistText: {
    fontSize: 15,
    fontWeight: '400',
    color: '#FFFFFF',
    marginBottom: 30,
  },
  wrapperIcon: {
    position: 'absolute',
    flexDirection: 'row',
    right: 19,
    alignItems: 'center',
  },
  iconShare: {
    marginLeft: 22,
  },
});

/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import React from 'react';
import TrackPlayer from 'react-native-track-player';

import {PlaybackService} from './src/services/PlaybackService';
import 'react-native-gesture-handler';
import App from './App';

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => PlaybackService);

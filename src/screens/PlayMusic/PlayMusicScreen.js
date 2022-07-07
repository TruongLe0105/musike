import React, {useState, useEffect, useRef} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import TrackPlayer, {usePlaybackState, State} from 'react-native-track-player';
import {
  SafeAreaView,
  StatusBar,
  View,
  ScrollView,
  Dimensions,
  Platform,
  Image,
  TouchableOpacity,
  Linking,
  BackHandler,
  ImageBackground,
  Text,
} from 'react-native';
import Toast from '@rimiti/react-native-toastify';

import ModalSecond from '../../components/modals/ModalAward';
import styles from './PlayMusicStyle';

// import RNBootSplash from 'react-native-bootsplash';

import Carousel from 'react-native-snap-carousel';

import {PlayerControls, Progress, TrackInfo} from '../../components';
import {SetupService, QueueInitalTracksService} from '../../services';
import {useCurrentTrack} from '../../hooks';

import background from '../../assets/sources/playMusic/background.png';
import micro from '../../assets/sources/playMusic/micro.png';
import playlist from '../../assets/sources/playMusic/playlist.png';
import shapeFooter from '../../assets/sources/playMusic/shapeFooter.png';

import Time from '../../components/Time';

import ModalFirst from '../../components/modals/ModalFirst';
import Header from '../../components/HeaderTab/PlayMusic/Header';

const IMAGE = [
  'https://raw.githubusercontent.com/Hoang21099/mar-asset/master/a.jpg',
  'https://raw.githubusercontent.com/Hoang21099/mar-asset/master/b.jpg',
  'https://raw.githubusercontent.com/Hoang21099/mar-asset/master/c.jpg',
];

const LINK = [
  'https://bingo.family/',
  'https://creaturehunters.world/',
  'https://nftmarble.games/',
];

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

const PlayMusicScreen = ({navigation}) => {
  const track = useCurrentTrack();
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [temp, setTemp] = useState({});

  const [isShowAward, setShowAward] = useState(false);

  const [isShowFirstModal, setModalFirst] = useState(false);
  let [refT, setRefT] = useState(null);
  const [visibleModal, setVisibleModal] = useState(false);
  const [openMenuBar, setOpenMenuBar] = useState(false);

  const toggleModal = () => {
    setVisibleModal(!visibleModal);
  };

  const toggleModalMenu = () => {
    setOpenMenuBar(!openMenuBar);
  };

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
  };

  const _carousel = useRef(null);

  const storeData = async value => {
    try {
      await AsyncStorage.setItem('isFirst', JSON.stringify(value));
    } catch (e) {
      // saving error
    }
  };

  const getData = async name => {
    try {
      const value = await AsyncStorage.getItem(name || 'test');
      if (value !== null) {
        // value previously stored
        return JSON.parse(value);
      }
      return null;
    } catch (e) {
      // error reading value
    }
  };

  // const translateY = React.useRef(new Animated.Value(0));

  // const scaleValue = useRef(new Animated.Value(0));

  // const scaleXX = scaleValue?.current?.interpolate({
  //   inputRange: [0, 0.25, 0.5, 0.75, 1],
  //   outputRange: [0.95, 1.5, 1, 0.8, 1],
  // });

  useEffect(() => {
    handleData();

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => true,
    );

    async function run() {
      const isSetup = await SetupService();
      setIsPlayerReady(isSetup);

      const queue = await TrackPlayer.getQueue();
      if (isSetup && queue.length <= 0) {
        await QueueInitalTracksService();
      }
    }

    run();
    showAlert();

    return () => backHandler.remove();
  }, []);

  const showAlert = async () => {
    const value = await AsyncStorage.getItem('isFirst');
    if (!value) {
      setModalFirst(true);
    } else {
      storeData('ok');
    }
  };

  const onLink = async index => {
    // console.log(LINK[index % 3]);
    await Linking.openURL(LINK[index % 3]);
  };

  const renderItem = data => {
    return (
      <TouchableOpacity
        style={{width: '100%', height: 100}}
        onPress={() => onLink(data.index)}>
        <Image
          onPress={() => onLink(data.index)}
          source={{uri: data.item}}
          style={{width: '100%', height: 100}}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <StatusBar barStyle={'light-content'} />
      <Header navigation={navigation} />
      <Toast
        ref={React.useRef()}
        style={styles.toast}
        textStyle={{
          textAlign: 'center',
          color: '#FF344A',
          fontSize: 18,
        }}
        position="top"
      />
      <Image
        style={styles.imageCircle}
        // source={{
        //   uri: `${
        //     track?.artwork ||
        //     'https://raw.githubusercontent.com/Hoang21099/mar-asset/master/Mar_diffuse.png'
        //   }`,
        // }}
        source={background}
      />
      {/* <View
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          bottom: 0,
          backgroundColor: '#000000ab',
        }}
      /> */}

      <ScrollView
        style={{width: '100%', height: '100%'}}
        contentContainerStyle={{}}>
        <View style={{flex: 1}}>
          <View style={styles.contentContainer}>
            <TrackInfo track={track} />
          </View>
          {/* <View style={styles.actionRowContainer}></View> */}
          <Time />
          <Progress />
          <PlayerControls
            refToast={refT}
            showReward={() => setShowAward(true)}
          />
          <View style={styles.wrapperFooter}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={{
                  padding: 10,
                }}>
                <Image source={shapeFooter} />
              </TouchableOpacity>
              <View style={styles.footer}>
                <Text style={styles.textFooter}>Chromecast is ready</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={{
                  padding: 10,
                }}>
                <Image source={micro} style={{marginRight: 20}} />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  padding: 10,
                }}>
                <Image source={playlist} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{width: '100%'}}>
        <Carousel
          ref={_carousel}
          data={IMAGE}
          renderItem={renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          autoplay={true}
          loop={true}
        />
      </View>

      <ModalFirst
        isVisible={isShowFirstModal}
        onClose={() => {
          setModalFirst(false);
          storeData('ok');
        }}
        onOk={() => {
          setModalFirst(false);
          TrackPlayer.play();
          storeData('ok');
        }}
      />

      <ModalSecond isVisible={isShowAward} onOk={() => setShowAward(false)} />
    </SafeAreaView>
  );
};

export default PlayMusicScreen;

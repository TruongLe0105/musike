import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import SearchInput from '../components/SearchInput';
import background from '../assets/sources/background_home.png';
import Genres from '../components/home/Genres/Genres';
import BannerHome from '../components/home/BannerHome';
import HomeBody from '../components/home/HomeBody';

function HomeScreen({navigation}) {
  return (
    <ScrollView>
      <ImageBackground
        source={background}
        style={{height: '100%', width: '100%'}}>
        <View>
          <SearchInput navigation={navigation} editable={false} />
          <BannerHome />
          <Genres navigation={navigation} />
          <HomeBody />
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

export default HomeScreen;

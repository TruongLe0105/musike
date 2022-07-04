import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  ScrollView,
} from 'react-native';
import ImageTitle from '../components/home/ImageTitle';
import SearchInput from '../components/SearchInput';
import background from '../assets/sources/background_home.png';
import IconBar from '../components/modals/IconBar';
import Genres from '../components/home/Genres';

function HomeScreen({navigation}) {
  return (
    <ScrollView>
      <ImageBackground
        source={background}
        style={{height: '100%', width: '100%'}}>
        <View style={{height: 1200}}>
          <SearchInput navigation={navigation} />
          <ImageTitle />
          <Genres />
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

export default HomeScreen;

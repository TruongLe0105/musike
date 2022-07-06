import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import FeatureImg from '../assets/resources/Search_Feature.png';
import NFTS1 from '../assets/sources/NewNFTs3/NFTS1.png';
import NFTS2 from '../assets/sources/NewNFTs3/NFTS2.png';
import NFTS3 from '../assets/sources/NewNFTs2/image8.png';
import NFTS4 from '../assets/sources/NewNFTs2/image9.png';
import SearchScreenItem from './SearchScreenItem';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ScrollView} from 'react-native-gesture-handler';
import {ArtistList} from '../utilies/MockData';
import SearchInput from '../components/SearchInput';

const IMAGE = [FeatureImg, FeatureImg, FeatureImg, FeatureImg];
const IMAGENFTS = [NFTS1, NFTS2, NFTS3, NFTS4, NFTS1];
const IMAGENFTS2 = [NFTS4, NFTS3, NFTS2, NFTS1, NFTS4];

const ListItem = ({item, index}) => {
  return (
    <View
      key={index}
      style={{
        width: 370,
        height: 220,
        borderRadius: 10,
        marginRight: 10,
      }}>
      {item && (
        <Image
          source={item}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        />
      )}
      <View
        style={{
          paddingLeft: 15,
          width: '100%',
          height: '100%',
          paddingVertical: 20,
        }}>
        <View>
          <Text
            style={{
              fontSize: 25,
              color: 'white',
              fontWeight: 'bold',
              letterSpacing: 1,
            }}>
            Featured Song
          </Text>
        </View>
        <View style={{marginTop: 'auto'}}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
            Follow The Leader ft.jennifer
          </Text>
          <Text style={{color: 'white'}}>
            Wisin & Yandel | Featured Song | 11.12.2021
          </Text>
        </View>
      </View>
    </View>
  );
};

const HandleArtistList = ({item, index}) => {
  return (
    <View
      key={index}
      style={{
        borderRadius: 10,
        marginRight: 10,
      }}>
      {item && <Image source={item.image} style={{width: 102, height: 102}} />}
      <Text
        style={{
          color: 'white',
          textAlign: 'center',
          fontSize: 11,
          opacity: 0.5,
        }}>
        {item.description}
      </Text>
    </View>
  );
};

const SearchScreen = () => {
  return (
    <ScrollView style={{paddingLeft: 20, backgroundColor: '#000'}}>
      <SearchInput />
      <FlatList
        style={{flexDirection: 'row', marginTop: 40}}
        horizontal
        data={IMAGE}
        renderItem={ListItem}
      />

      <SearchScreenItem data={IMAGENFTS} />
      <View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              paddingVertical: 10,
              marginRight: 5,
            }}>
            Top Artists
          </Text>
          <Icon name="angle-right" color="white" size={20} />
        </View>
        <FlatList horizontal data={ArtistList} renderItem={HandleArtistList} />
      </View>
      <SearchScreenItem data={IMAGENFTS2} />
    </ScrollView>
  );
};

export default SearchScreen;

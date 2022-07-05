import React from 'react';
import {FlatList, ScrollView, Image, Text, View} from 'react-native';
import FeatureImg from '../assets/resources/Search_Feature.png';

const IMAGE = [FeatureImg, FeatureImg, FeatureImg, FeatureImg];

const ListItem = ({item}) => {
  return (
    <View
      style={{
        width: 370,
        height: 220,
        borderRadius: 10,
        marginRight: 10,
      }}>
      {item && (
        <Image
          source={FeatureImg}
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

const SearchScreen = () => {
  return (
    <ScrollView style={{paddingLeft: 20, backgroundColor: '#000'}}>
      <FlatList
        style={{flexDirection: 'row'}}
        horizontal
        data={IMAGE}
        renderItem={item => <ListItem item={item} />}
      />
      <View>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 20,
            paddingVertical: 10,
          }}>
          New NFTS
        </Text>
        <FlatList
          style={{flexDirection: 'row'}}
          horizontal
          data={IMAGE}
          renderItem={item => <ListItem item={item} />}
        />
      </View>
    </ScrollView>
  );
};

export default SearchScreen;

import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import image1 from '../../assets/sources/NewNFTs1/image1.png';
import image2 from '../../assets/sources/NewNFTs1/image3.png';
import image3 from '../../assets/sources/NewNFTs1/image1.png';

import image4 from '../../assets/sources/TopArtists/image7.png';
import image5 from '../../assets/sources/TopArtists/image4.png';
import image6 from '../../assets/sources/TopArtists/image6.png';
import image7 from '../../assets/sources/TopArtists/image7.png';

import image8 from '../../assets/sources/NewNFTs2/image9.png';
import image9 from '../../assets/sources/NewNFTs2/image8.png';
import image10 from '../../assets/sources/NewNFTs2/image9.png';

const LIST1 = [image1, image2, image3];
const LIST2 = [image4, image5, image6, image7];
const LIST3 = [image8, image9, image10];

function Charts() {
  const TopTrend = ({data}) => {
    const itemNewNFTs = ({item, index}) => {
      return (
        <TouchableOpacity style={styles.wrapperImage} key={index}>
          <Image source={item} style={styles.image} />
        </TouchableOpacity>
      );
    };

    return (
      <View style={styles.chart}>
        <TouchableOpacity style={styles.boxTitle}>
          <Text style={styles.title}>New NFTs</Text>
          <Icon name="angle-right" color="white" size={16} />
        </TouchableOpacity>
        <FlatList
          contentContainerStyle={{flexDirection: 'row'}}
          data={data}
          renderItem={itemNewNFTs}
          horizontal={true}
        />
      </View>
    );
  };

  const TopArtists = () => {
    const ListArtists = ({item, index}) => {
      return (
        <TouchableOpacity style={styles.wrapperImage} key={index}>
          <Image source={item} style={styles.image} />
        </TouchableOpacity>
      );
    };

    return (
      <View style={styles.chart}>
        <TouchableOpacity style={styles.boxTitle}>
          <Text style={styles.title}>Top Artists</Text>
          <Icon name="angle-right" color="white" size={16} />
        </TouchableOpacity>
        <FlatList
          contentContainerStyle={{flexDirection: 'row'}}
          data={LIST2}
          renderItem={ListArtists}
          horizontal={true}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TopTrend data={LIST1} />
      <TopArtists />
      <TopTrend data={LIST3} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 18,
  },
  chart: {
    marginBottom: 26,
  },
  boxTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '400',
    marginRight: 12,
  },
  wrapperImage: {
    marginRight: 10,
    borderRadius: 10,
  },
});

export default Charts;

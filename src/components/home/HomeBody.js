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

const LIST1 = [
  {
    image: image1,
    name: 'Urgent Siege',
  },
  {
    image: image2,
    name: 'Urgent Siege',
  },
  {
    image: image3,
    name: 'Urgent Siege',
  },
];
const LIST2 = [
  {
    image: image4,
    title: 'Payphone - Maroon 5',
  },
  {
    image: image5,
    title: 'Lover - Taylor Swift',
  },
  {
    image: image6,
    title: 'Yummy - Hustin Bieber',
  },
  {
    image: image7,
    title: 'Up All Night - ',
  },
];
const LIST3 = [
  {
    image: image8,
    name: 'Breathe',
  },
  {
    image: image9,
    name: 'Shape of Water',
  },
  {
    image: image10,
    name: 'Superorgan',
  },
];

function HomeBody() {
  const TopTrend = ({data}) => {
    const itemNewNFTs = ({item, index}) => {
      return (
        <View>
          <TouchableOpacity style={styles.wrapperImage} key={index}>
            <Image source={item.image} />
          </TouchableOpacity>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.textDown}>Dammed Anthem</Text>
        </View>
      );
    };

    return (
      <View style={styles.homeBody}>
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
        <View>
          <TouchableOpacity style={styles.wrapperImage} key={index}>
            <Image source={item.image} />
          </TouchableOpacity>
          <Text style={styles.singer}>{item.title}</Text>
        </View>
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
  homeBody: {
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
  name: {
    color: '#FFFFFF',
    fontFamily: 'Open Sans',
    fontWeight: '700',
    textAlign: 'center',
    // alignItems: 'center',
  },
  textDown: {
    // alignItems: 'center',
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 10,
    fontFamily: 'Open Sans',
    fontWeight: '400',
  },
  singer: {
    fontWeight: '400',
    color: '#999999',
    fontSize: 9,
    fontFamily: 'Inter',
  },
});

export default HomeBody;

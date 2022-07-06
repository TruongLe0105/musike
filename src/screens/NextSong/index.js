import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

import Bieber from '../../assets/sources/list_song/Bieber.png';
import Adele from '../../assets/sources/list_song/Adele.png';
import Moonlight from '../../assets/sources/list_song/Moonlight.png';
import Travis from '../../assets/sources/list_song/Travis.png';
import Vincent from '../../assets/sources/list_song/Vincent.png';
import rising from '../../assets/sources/list_song/88rising.png';
import background from '../../assets/sources/list_song/background.png';

function NextSongScreen({navigation}) {
  const [action, setAction] = useState(2);

  const LIST = [
    {
      image: Bieber,
      song: 'Mistletoe',
      name: 'Justin Bieber',
    },
    {
      image: Adele,
      song: 'Easy On Me',
      name: 'Adele',
    },
    {
      image: Moonlight,
      song: 'Moonlight',
      name: 'Public Library',
    },
    {
      image: Travis,
      song: 'SICKO MODE',
      name: 'Travis Scott ft.Drake',
    },
    {
      image: Bieber,
      song: 'Get Lost',
      name: 'Justin Bieber',
    },
    {
      image: Vincent,
      song: 'Midsummer Madness',
      name: 'Vincent Fable',
    },
    {
      image: rising,
      song: 'I Feel Good',
      name: '88rising',
    },
  ];

  const renderSongs = ({item, index}) => {
    const handlePress = () => {
      setAction(index);
      // navigation.navigate('PlayMusic');
    };

    return (
      <TouchableOpacity style={styles.itemContainer} onPress={handlePress}>
        <Image
          style={action === index ? styles.viewImage : styles.hideImage}
          source={background}
        />
        <View key={index} style={styles.item}>
          <View style={styles.itemLeft}>
            <Image height="100%" source={item.image} />
            <View style={{height: '100%'}}>
              <Text style={styles.song}>{item.song}</Text>
              <Text style={styles.text}>{item.name}</Text>
            </View>
          </View>
          <View style={styles.itemRight}>
            <Text style={styles.text}>time</Text>
            <Icon />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.wrapperScreen}>
      <View style={styles.autoplay}>
        <Text style={styles.title}>Autoplay</Text>
        <Text style={styles.title}>Here!</Text>
      </View>
      <FlatList
        contentContainerStyle={styles.container}
        renderItem={renderSongs}
        data={LIST}
      />
    </View>
  );
}

export default NextSongScreen;

import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  View,
  // ScrollView,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const LIST = [
  'Pop',
  'Hiphop',
  'Rock',
  'Rhythm',
  'Reggae',
  'Country',
  'Funk',
  'Folk',
  'Middle Eastern',
  'Jazz',
  'Disco',
  'Classical',
  'Electronic',
  'Music of Latin America',
  'Blues',
  'Music for children',
];

function Genres() {
  const [action, setAction] = useState(0);

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => setAction(index)}
        style={index === action ? styles.itemAction : styles.items}
        key={index}>
        <Text style={index == action ? styles.genreAction : styles.genre}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.boxTitle}>
        <Text style={styles.title}>Genres</Text>
        <Icon name="angle-right" color="white" size={16} />
      </TouchableOpacity>
      <View style={styles.wrapperGenres}>
        <TouchableOpacity style={styles.arrowIcon}>
          <Icon name="caret-left" color="white" size={25} />
        </TouchableOpacity>
        <FlatList
          contentContainerStyle={{marginHorizontal: 30}}
          data={LIST}
          renderItem={renderItem}
          horizontal={true}
        />
        <TouchableOpacity style={styles.arrowIcon}>
          <Icon name="caret-right" color="white" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 60,
  },
  wrapperGenres: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  itemAction: {
    backgroundColor: '#FF4060',
    borderColor: '#FF344A',
    borrderWidth: 0.73,
    borderRadius: 40,
    marginHorizontal: 5,
    width: 70,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  items: {
    backgroundColor: '#202020',
    borderWidth: 0.73,
    borderColor: '#FF344A',
    borderRadius: 50,
    marginHorizontal: 5,
    width: 70,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  genreAction: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  genre: {
    color: '#FF4060',
    fontWeight: '400',
  },
  arrowIcon: {
    // marginRight: 10,
  },
});

export default Genres;

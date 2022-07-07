import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {View, Text, Animated, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';

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

function Genres({navigation}) {
  const [action, setAction] = useState(0);
  // const [firstNum, setFirstNum] = useState(0);
  // const [lastNum, setLastNum] = useState(4);

  const renderItem = ({item, index}) => {
    const handlePressIn = () => {
      setAction(index);
      navigation.navigate('NextSong');
    };

    return (
      <TouchableOpacity
        onPress={handlePressIn}
        style={index === action ? styles.itemAction : styles.items}
        key={index}>
        <Text style={index == action ? styles.genreAction : styles.genre}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  // const handlePrev = () => {
  //   firstNum >= 4 ? setFirstNum(firstNum - 4) : '';
  //   lastNum > 4 ? setLastNum(lastNum - 4) : '';

  //   setAction(null);
  // };

  // const handleNext = () => {
  //   firstNum >= 0 && firstNum < LIST.length - 4
  //     ? setFirstNum(firstNum + 4)
  //     : '';
  //   lastNum < LIST.length ? setLastNum(lastNum + 4) : '';

  //   LIST.slice(0, 4);
  //   setAction(null);
  // };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.boxTitle}>
        <Text style={styles.title}>Genres</Text>
        <Icon name="angle-right" color="white" size={16} />
      </TouchableOpacity>
      <View style={styles.wrapperGenres}>
        {/* {firstNum > 0 && (
          <TouchableOpacity onPress={handlePrev} style={styles.arrowIconLeft}>
            <Icon name="caret-left" color="white" size={25} />
          </TouchableOpacity>
        )} */}
        <View>
          <FlatList
            data={LIST}
            renderItem={renderItem}
            horizontal={true}
            contentContainerStyle={{flexDirection: 'row'}}
          />
        </View>
        {/* {lastNum < LIST.length && (
          <TouchableOpacity onPress={handleNext} style={styles.arrowIconRight}>
            <Icon name="caret-right" color="white" size={30} />
          </TouchableOpacity>
        )} */}
      </View>
    </View>
  );
}

export default Genres;

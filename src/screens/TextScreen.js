import React from 'react';
import {FlatList, View, Text} from 'react-native';

function TextScreen() {
  const DATA = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '5',
    '5',
    '5',
    '5',
    '5',
    '5',
    '5',
    '5',
    '5',
    '5',
    '5',
    '5',
    '5',
    '5',
    '5',
    '5',
    '5',
  ];

  const renderItem = ({item, index}) => {
    return (
      <View key={index} style={{height: 200}}>
        <Text>{item}</Text>
      </View>
    );
  };

  return (
    <View>
      <FlatList renderItem={renderItem} data={DATA} />
    </View>
  );
}

export default TextScreen;

import React from 'react';
import {ScrollView, Text, View, Image, FlatList} from 'react-native';
import {CategoriesData} from '../utilies/MockData';

const HandleCategories = ({item, index}) => {
  return (
    <View key={index} style={{width: 173, height: 75, flexWrap: 'wrap'}}>
      <Image
        source={item.image}
        style={{position: 'absolute', width: '100%', height: '100%'}}
      />
      <Text style={{color: 'black'}}>{item.title}</Text>
    </View>
  );
};

const Categories = () => {
  return (
    <ScrollView
      style={{
        paddingHorizontal: 25,
        backgroundColor: '#171717',
      }}>
      <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
        <FlatList data={CategoriesData} renderItem={HandleCategories} />
      </View>
    </ScrollView>
  );
};

export default Categories;

import React from 'react';
import {ScrollView, Text, View, Image, StyleSheet} from 'react-native';
import {CategoriesData} from '../utilies/MockData';

const Categories = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: '#171717',
      }}>
      <View
        style={{
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        {CategoriesData.map((data, index) => (
          <View
            key={index}
            style={index % 2 === 0 ? styles.imageLeft : styles.imageRight}>
            <Image
              source={data.image}
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
              }}
            />
            <Text
              style={{
                color: 'white',
              }}>
              {data.title}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  imageLeft: {
    width: '100%',
    maxWidth: 171,
    height: 75,
    marginRight: 5,
    marginBottom: 6,
  },
  imageRight: {
    width: '100%',
    maxWidth: 171,
    height: 75,
    marginLeft: 5,
    marginBottom: 6,
  },
});

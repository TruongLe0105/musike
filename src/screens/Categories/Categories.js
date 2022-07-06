import React from 'react';
import {ScrollView, Text, View, Image, StyleSheet} from 'react-native';
import {CategoriesData} from '../../utilies/MockData';
import HeaderTab from '../../components/HeaderTab/HeaderTab';
import styles from './styles';
import avatar from '../../assets/sources/Catergories/avatar.png';

const Categories = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: '#171717',
        paddingHorizontal: 29,
      }}>
      <HeaderTab title="categories" avatar={avatar} />
      {/* <View style={styles.listWrap}>
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
      </View> */}
    </ScrollView>
  );
};

export default Categories;

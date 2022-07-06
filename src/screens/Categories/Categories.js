import React from 'react';
import {ScrollView, Text, View, Image, StyleSheet} from 'react-native';
import {CategoriesData} from '../../utilies/MockData';
import HeaderTab from '../../components/HeaderTab/HeaderTab';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

const Categories = ({navigation}) => {
  return (
    <ScrollView>
      <LinearGradient
        colors={['#000', '#1B1B1B', '#131313']}
        style={{
          paddingHorizontal: 29,
        }}>
        <View style={styles.wrapHeader}>
          <HeaderTab title="categories" navigation={navigation} />
        </View>
        <View style={styles.listWrap}>
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
      </LinearGradient>
    </ScrollView>
  );
};

export default Categories;

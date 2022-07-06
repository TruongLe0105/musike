import Modal from 'react-native-modal';
import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Pop from '../../assets/resources/Pop.jpg';
import Hiphop from '../../assets/resources/hiphop.jpg';
import Rock from '../../assets/resources/Rock.jpg';
import Rhythm from '../../assets/resources/R_B.jpg';
import Reggae from '../../assets/resources/Reggae.png';
import Country from '../../assets/resources/country.jpg';
import Funk from '../../assets/resources/Funk.jpg';
import Folk from '../../assets/resources/Folk.jpg';
import Middle from '../../assets/resources/middle-easternMusic.jpg';
import Jazz from '../../assets/resources/JazzMusic.jpg';
import Disco from '../../assets/resources/Disco.jpg';
import Classical from '../../assets/resources/ClassicalMusic.jpg';
import Electronic from '../../assets/resources/ElectronicMusic.jpg';
import Latin from '../../assets/resources/LatinAmericaMusic.png';
import Blues from '../../assets/resources/BluesMusic.jpg';
import Children from '../../assets/resources/Musicforchild.jpg';

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
  // 'New-age music',
  // 'Vocal music',
  // 'Music of Africa',
  // 'Christian music',
  // 'Music of Asia',
  // 'Ska',
  // 'Traditional music',
  // 'Independent music',
  // 'popular music',
];

const LIST_IMAGE = [
  Pop,
  Hiphop,
  Rock,
  Rhythm,
  Reggae,
  Country,
  Funk,
  Folk,
  Middle,
  Jazz,
  Disco,
  Classical,
  Electronic,
  Latin,
  Blues,
  Children,
  // 'New-age music',
  // 'Vocal music',
  // 'Music of Africa',
  // 'Christian music',
  // 'Music of Asia',
  // 'Ska',
  // 'Traditional music',
  // 'Independent music',
  // 'popular music',
];

const LIST_COLOR = [
  '#f5418d',
  '#f44241',
  '#f5a442',
  '#f5d142',
  '#378dff',
  '#3fd95c',
  '#a0ebfe',
  '#b9ffaf',
  '#4d188d',
  '#ed4134',
  '#c85ccd',
  '#f7e438',
  '#d75d49',
  '#6ea2b2',
  '#ba5a35',
  '#ba5a35',
  '#32191d',
  '#fcd5ba',
  '#616c74',
  '#623b00',
  '#636363',
  '#ed0054',
  '#6a557e',
  '#5b6ed1',
  '#6b6b6d',
];

function WrapperComponent({isVisible, toggle}) {
  return (
    <View>
      <Modal isVisible={isVisible}>
        <ScrollView
          style={{
            flex: 1,
            backgroundColor: '#131313',
            padding: 15,
            borderRadius: 5,
            paddingBottom: 150,
            color: 'white',
          }}>
          <TouchableOpacity onPress={toggle}>
            <Icon name="arrow-left" size={30} color="#FF344A" />
          </TouchableOpacity>
          <View style={{justifyContent: 'center', flexDirection: 'row'}}>
            <Image
              style={{width: 200, height: 60}}
              resizeMode="contain"
              source={{
                uri: `https://raw.githubusercontent.com/Hoang21099/mar-asset/master/logo.png`,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}>
            {LIST.map((item, index) => (
              <TouchableOpacity
                key={index.toString()}
                style={{
                  // flexDirection: 'row',
                  paddingVertical: 10,
                  borderBottomColor: '#aaa',
                  marginBottom: index == LIST.length - 1 ? 25 : 0,
                  height: 100,
                  borderRadius: 20,
                  width: '47%',
                  backgroundColor: LIST_COLOR[index],
                  marginVertical: 10,
                  // alignItems: 'flex-end',
                  justifyContent: 'space-between',
                  padding: 15,
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onPress={toggle}>
                <Image
                  style={{
                    width: '200%',
                    height: '200%',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                  }}
                  blurRadius={8}
                  resizeMode="cover"
                  source={LIST_IMAGE[index]}
                />
                <View style={{marginLeft: -5}}>
                  <Icon name="music" size={30} color="#aaa" />
                </View>

                <Text
                  style={{
                    color: 'white',
                    textAlign: 'right',
                    fontWeight: '800',
                  }}>
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </Modal>
    </View>
  );
}

export default WrapperComponent;

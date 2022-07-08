import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Tracklist from '../../assets/sources/playMusic/Tracklist.png';
import Oval from '../../assets/sources/playMusic/Oval.png';
import ellipse from '../../assets/sources/playMusic/ellipse.png';

import styles from './TracklistStyle';

function Header({navigation}) {
  const [offline, setOffline] = useState(false);

  return (
    <>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon
              name="arrow-left"
              style={{opacity: 0.7}}
              color="#FFFFFF"
              size={22}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Tracklist</Text>
        </View>
        <TouchableOpacity style={{paddingHorizontal: 10, marginRight: 8}}>
          <Image source={ellipse} />
        </TouchableOpacity>
      </View>
      <View style={styles.wrapperOption}>
        <TouchableOpacity>
          <Icon name="random" color="#FF344A" size={24} />
        </TouchableOpacity>
        <View style={styles.optionRight}>
          <Text style={styles.textOption}>Offline</Text>
          <TouchableOpacity
            onPress={() => setOffline(!offline)}
            style={styles.togglebtn}>
            {offline ? (
              <View style={styles.switchOff} />
            ) : (
              <Image style={styles.tracklist} source={Tracklist} />
            )}
            <Image
              style={offline ? styles.ovalOff : styles.oval}
              source={Oval}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default Header;

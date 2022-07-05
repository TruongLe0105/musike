import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import unsplash1 from '../../assets/sources/unplashs_image/unsplash1.png';
import unsplash2 from '../../assets/sources/unplashs_image/unsplash2.png';
import unsplash3 from '../../assets/sources/unplashs_image/unsplash3.png';

function BannerHome() {
  return (
    <View style={styles.container}>
      <View style={styles.image1}>
        <Image style={styles.image} source={unsplash1} />
      </View>
      <View style={styles.image2}>
        <Image source={unsplash2} />
      </View>
      <View style={styles.image3}>
        <Image style={styles.image} source={unsplash3} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    height: 240,
  },
  image1: {
    position: 'absolute',
    width: '50%',
    left: 16,
  },
  image2: {
    position: 'absolute',
    zIndex: 1,
    left: '50%',
    transform: [{translateX: -120}],
  },
  image3: {
    position: 'absolute',
    width: '50%',
    right: 16,
  },
  image: {
    width: '100%',
  },
});

export default BannerHome;

import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import styles from './TracklistStyle';
import Header from './Header';
import Charts from '../../components/Charts';

function TracklistScreen({navigation}) {
  const [active, setActive] = useState(1);

  const LIST = [
    {
      name: 'Take it or leave it',
      time: '3:03',
    },
    {
      name: 'Get Away',
      time: '3:57',
    },
    {
      name: 'Always',
      time: '3:57',
    },
    {
      name: 'Holding You',
      time: '3:31',
    },
    {
      name: 'Everything to Me',
      time: '3:51',
    },
    {
      name: 'Already Love',
      time: '3:03',
    },
    {
      name: 'Thinking',
      time: '3:29',
    },
    {
      name: 'Always (Anden Remix)',
      time: '3:57',
    },
    {
      name: 'By My Side (Duck Club Remix)',
      time: '3:31',
    },
    {
      name: 'You"re the One for Me (option navigation)',
      time: '3:46',
    },
    {
      name: 'Holding You',
      time: '3:31',
    },
  ];

  const ListMusic = ({item, index}) => {
    return (
      <>
        <TouchableOpacity
          onPress={() => setActive(index)}
          key={index}
          style={{marginBottom: 18}}>
          <View style={styles.wrapperItem}>
            {active !== index && (
              <>
                <View style={styles.item}>
                  <Text style={styles.name}>{index + 1}</Text>
                  <Text
                    style={[
                      {
                        marginLeft: 9,
                      },
                      styles.name,
                    ]}>
                    {item.name.length < 30
                      ? item.name
                      : `${item.name.slice(0, 28)}...`}
                  </Text>
                </View>
                <View style={styles.itemRight}>
                  <Text style={styles.time}>{item.time}</Text>
                </View>
              </>
            )}
            {active === index && (
              <>
                <View style={styles.item}>
                  <Text style={[styles.name, {color: '#FF344A'}]}>
                    {index + 1}
                  </Text>
                  <Text
                    style={[
                      styles.name,
                      {
                        marginLeft: 9,
                        color: '#FF344A',
                      },
                    ]}>
                    {item.name.length < 30
                      ? item.name
                      : `${item.name.slice(0, 28)}...`}
                  </Text>
                </View>
                <View style={styles.itemRight}>
                  <Text style={[styles.time, {color: '#FF344A'}]}>
                    {item.time}
                  </Text>
                  <Charts />
                </View>
              </>
            )}
          </View>
          <View style={styles.line} />
        </TouchableOpacity>
      </>
    );
  };

  return (
    <SafeAreaView style={styles.wrapperComponent}>
      <Header navigation={navigation} />
      <FlatList
        data={LIST}
        renderItem={ListMusic}
        contentContainerStyle={{
          marginLeft: 40,
          marginRight: 18,
          marginTop: 10,
        }}
      />
    </SafeAreaView>
  );
}

export default TracklistScreen;

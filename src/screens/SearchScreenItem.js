import React from 'react';
import {View, Image, Text, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ListNFTs = ({item, index}) => {
  return (
    <View style={{borderRadius: 10, marginRight: 10}}>
      <View
        key={index}
        style={{
          position: 'relative',
          width: 130,
          height: 130,
        }}>
        {item && (
          <Image
            source={item}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
            }}
          />
        )}
      </View>
      <View style={{paddingTop: 10}}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 17,
          }}>
          Urgent Siege
        </Text>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 12,
            opacity: 0.5,
          }}>
          Dammed Anthem
        </Text>
      </View>
    </View>
  );
};

const SearchScreenItem = ({data}) => {
  return (
    <View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            paddingVertical: 10,
            marginRight: 5,
          }}>
          New NFTs
        </Text>
        <Icon name="angle-right" color="white" size={20} />
      </View>
      <FlatList
        style={{flexDirection: 'row'}}
        horizontal
        data={data}
        renderItem={ListNFTs}
      />
    </View>
  );
};

export default SearchScreenItem;

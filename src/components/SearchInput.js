import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

import IconBar from './modals/IconBar';
import Icon from 'react-native-vector-icons/FontAwesome';

function SearchInput({navigation}) {
  const [value, setValue] = useState(null);

  const handleChange = text => {
    console.log(text);
  };

  return (
    <View>
      <IconBar navigation={navigation} color="#979797" />
      <View style={styles.input}>
        <Icon name="search" size={20} style={styles.icon} />
        <TextInput
          style={styles.textInput}
          placeholder="Search"
          placeholderTextColor={'#979797'}
          value={value}
          onChangeText={text => handleChange(text)}
        />
      </View>
    </View>
  );
}

const styles = {
  input: {
    flexDirection: 'row',
    marginLeft: 60,
    marginTop: 15,
    marginRight: 20,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    zIndex: 300,
    position: 'absolute',
    left: 10,
    color: '#979797',
  },

  textInput: {
    borderRadius: 40,
    backgroundColor: '#322623',
    color: '#979797',
    width: '100%',
    paddingLeft: 40,
  },
};

export default SearchInput;
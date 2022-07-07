import React, {useState} from 'react';
import {
  Keyboard,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import IconBar from './modals/IconBar';
import Icon from 'react-native-vector-icons/FontAwesome';

function SearchInput({navigation, editable}) {
  const [value, setValue] = useState(null);

  const handleChange = text => {
    console.log(text);
  };

  const handlePress = () => {
    !editable ? navigation.navigate('Search') : '';
  };

  return (
    <View>
      <IconBar navigation={navigation} />
      <View style={styles.input}>
        <Icon name="search" size={20} style={styles.icon} />
        <TouchableOpacity style={styles.textInput} onPress={handlePress}>
          <TextInput
            placeholder="Search"
            placeholderTextColor={'#979797'}
            value={value}
            onChangeText={text => handleChange(text)}
            editable={editable}
          />
        </TouchableOpacity>
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

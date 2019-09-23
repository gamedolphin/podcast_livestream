import React from 'react';
import {View, TextInput, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles/SearchBarStyles.js';

const noop = () => {};

const SearchBar = ({onChange, value, onSearch = noop}) => {
  const showSearch = value !== '';
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={onChange}
        value={value}
      />
      {showSearch ? (
        <>
          <Icon.Button
            name="search"
            style={styles.searchButton}
            onPress={onSearch}
          />
          <Icon.Button
            name="remove"
            style={styles.searchButton}
            onPress={() => onChange('')}
          />
        </>
      ) : null}
    </View>
  );
};

export default SearchBar;

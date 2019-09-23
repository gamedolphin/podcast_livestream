import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import SearchBar from '../components/SearchBar.js';
import styles from './styles/DiscoverScreenStyles.js';

const DiscoverScreen = () => {
  const [searchValue, setSearchValue] = useState('');

  const onChangeText = val => setSearchValue(val);

  return (
    <View style={styles.container}>
      <SearchBar value={searchValue} onChange={onChangeText} />
    </View>
  );
};

export default DiscoverScreen;

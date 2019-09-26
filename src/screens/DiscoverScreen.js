import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import SearchBar from '../components/SearchBar.js';
import styles from './styles/DiscoverScreenStyles.js';
import {useSelector} from 'react-redux';

const DiscoverScreen = () => {
  const [searchValue, setSearchValue] = useState('');

  const ready = useSelector(state => state.startup.ready);

  const onChangeText = val => setSearchValue(val);

  const onSearch = () => {};

  const backgroundColor = ready ? 'green' : 'black';

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <SearchBar
        value={searchValue}
        onChange={onChangeText}
        onSearch={onSearch}
      />
    </View>
  );
};

export default DiscoverScreen;

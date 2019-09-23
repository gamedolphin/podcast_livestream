import React from 'react';
import {Button, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PlayControls = () => {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}>
      <Icon.Button name="backward" onPress={() => {}} />
      <Icon.Button name="play" onPress={() => {}} />
      <Icon.Button name="forward" onPress={() => {}} />
    </View>
  );
};

export default PlayControls;

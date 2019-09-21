import React from 'react';
import {Button, View} from 'react-native';

const PlayControls = () => {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}>
      <Button title="-10s" onPress={() => {}} />
      <Button title="Play" onPress={() => {}} />
      <Button title="+10s" onPress={() => {}} />
    </View>
  );
};

export default PlayControls;

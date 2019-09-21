import React from 'react';
import Slider from '@react-native-community/slider';
import {View, Text} from 'react-native';
import moment from 'moment';
import styles from './styles/TimeSliderStyles.js';

const TimeSlider = ({currentTime, totalTime}) => {
  const sliderValue = currentTime / totalTime;
  const currentTimeDisplay = moment.unix(currentTime).format('mm:ss');
  const timeLeftDisplay = moment.unix(totalTime).format('mm:ss');
  return (
    <View style={styles.container}>
      <Slider
        disabled={true}
        style={styles.slider}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        value={sliderValue}
      />
      <View style={styles.timeText}>
        <Text>{currentTimeDisplay}</Text>
        <Text>{timeLeftDisplay}</Text>
      </View>
    </View>
  );
};

export default TimeSlider;

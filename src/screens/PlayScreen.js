import React from 'react';
import {Text, View, Image, Button} from 'react-native';
import Slider from '@react-native-community/slider';
import PodcastImage from '../components/PodcastImage.js';
import TimeSlider from '../components/TimeSlider.js';
import PlayControls from '../components/PlayControls.js';
import styles from './styles/PlayScreenStyles.js';

const PlayScreen = () => {
  return (
    <View style={styles.container}>
      <PodcastImage
        imageUrl="http://lorempixel.com/output/cats-q-c-720-720-7.jpg"
        podcastName="Best Podcast Ever!!"
        artistName="Hello Internet"
      />
      <TimeSlider currentTime={2000} totalTime={6000} />
      <View style={styles.playControlContainer}>
        <PlayControls />
      </View>
    </View>
  );
};

export default PlayScreen;

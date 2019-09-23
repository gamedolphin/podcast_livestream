import React from 'react';
import {Text, View, Image, Button} from 'react-native';
import Slider from '@react-native-community/slider';
import PodcastImage from '../components/PodcastImage.js';
import TimeSlider from '../components/TimeSlider.js';
import PlayControls from '../components/PlayControls.js';
import styles from './styles/PlayScreenStyles.js';
import {useNavigationParam} from 'react-navigation-hooks';
import {PODCASTINFOKEY} from './PodcastScreen.js';

const getPodcastInformation = () => {
  const info = useNavigationParam(PODCASTINFOKEY);

  return info ? info : {artistInfo: {}, podcastTitle: ''};
};

const PlayScreen = () => {
  const podcastInformation = getPodcastInformation();

  const {artistInfo, podcastTitle} = podcastInformation;

  return (
    <View style={styles.container}>
      <PodcastImage
        imageUrl={artistInfo.imageUrl}
        podcastName={podcastTitle}
        artistName={artistInfo.artistName}
      />
      <TimeSlider currentTime={2000} totalTime={6000} />
      <View style={styles.playControlContainer}>
        <PlayControls />
      </View>
    </View>
  );
};

export default PlayScreen;

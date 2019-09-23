import React from 'react';
import {Button} from 'react-native';
import {useNavigation} from 'react-navigation-hooks';

export const PODCASTINFOKEY = 'podcastInformation';

const PodcastScreen = () => {
  const {navigate} = useNavigation();
  const podcastInformation = {
    artistInfo: {
      imageUrl: 'http://lorempixel.com/output/cats-q-c-720-720-7.jpg',
      artistName: 'HELLO INTERNET',
    },
    podcastTitle: 'Best Podcast Ever!',
  };
  return (
    <Button
      title="GO TO PLAY SCREEN"
      onPress={() => navigate('Play', {[PODCASTINFOKEY]: podcastInformation})}
    />
  );
};

export default PodcastScreen;

import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles/PodcastImageStyles.js';

const PodcastImage = ({imageUrl, podcastName, artistName}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: imageUrl}} />
      <Text style={styles.title}>{podcastName}</Text>
      <Text style={styles.artist}>{artistName}</Text>
    </View>
  );
};

export default PodcastImage;

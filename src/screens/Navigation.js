import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import PlayScreen from './PlayScreen.js';
import PodcastScreen from './PodcastScreen.js';

const AppNavigation = createStackNavigator({
  Podcast: PodcastScreen,
  Play: PlayScreen,
});

export default createAppContainer(AppNavigation);

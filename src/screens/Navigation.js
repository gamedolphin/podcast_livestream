import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import PlayScreen from './PlayScreen.js';
import PodcastScreen from './PodcastScreen.js';
import DiscoverScreen from './DiscoverScreen.js';

const AppNavigation = createStackNavigator({
  Discover: DiscoverScreen,
  Play: PlayScreen,
  Podcast: PodcastScreen,
});

export default createAppContainer(AppNavigation);

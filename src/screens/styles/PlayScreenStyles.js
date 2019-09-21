import {StyleSheet} from 'react-native';
import appStyles from '../../config/ApplicationStyles.js';

const styles = StyleSheet.create({
  container: {
    ...appStyles.centeredContainer,
    flex: 1,
    backgroundColor: 'pink',
  },

  playControlContainer: {
    paddingTop: 32,
    width: '100%',
  },
});

export default styles;

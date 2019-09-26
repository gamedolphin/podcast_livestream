import React from 'react';
import RootContainer from './RootContainer.js';
import {Provider} from 'react-redux';
import createStore from '../redux/index.js';

const {store} = createStore();

const App = () => {
  return (
    <Provider store={store}>
      <RootContainer />
    </Provider>
  );
};

export default App;

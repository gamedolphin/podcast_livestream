import {createStore, combineReducers} from 'redux';

const reducer = combineReducers({
  startup: require('../states/StartupState.js').reducer,
});

export default () => {
  const store = createStore(reducer);
  return {
    store,
  };
};

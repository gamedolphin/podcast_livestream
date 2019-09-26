import React, {useEffect} from 'react';
import AppContainer from './Navigation.js';
import {useDispatch} from 'react-redux';
import StartupActions from '../states/StartupState.js';

const RootContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(StartupActions.setAppReady(true));
  }, []);

  return <AppContainer />;
};

export default RootContainer;

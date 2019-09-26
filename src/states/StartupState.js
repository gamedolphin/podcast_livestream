import Immutable from 'seamless-immutable';
import {createActions, handleActions} from 'redux-actions';

export const INITIAL_STATE = Immutable({ready: false});

const Actions = createActions({
  SET_APP_READY: ready => ({ready}),
});

const {setAppReady} = Actions;

export const reducer = handleActions(
  {
    [setAppReady]: (state, {payload: {ready}}) =>
      state.merge({
        ready,
      }),
  },
  INITIAL_STATE,
);

export default Actions;

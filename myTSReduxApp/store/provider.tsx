import React, {ReactNode} from 'react';
import {applyMiddleware, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import {reducer} from './reducer';
import {Store} from './type';
import {ActionTypes} from './pageReducer';

const composeEnhancers = compose;

// @ts-ignore -- This will always fail because the react-navigation typings are incorrect
const store: Store<ActionTypes> = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunkMiddleware)),
);

type Props = {
  children: ReactNode;
};
export function StoreProvider(props: Props): JSX.Element {
  const {children} = props;
  return <Provider store={store}>{children}</Provider>;
}

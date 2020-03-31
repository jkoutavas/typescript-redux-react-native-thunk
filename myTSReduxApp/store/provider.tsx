import React, {ReactNode} from 'react';
import {applyMiddleware, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import {reducer} from './reducer';

const composeEnhancers = compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunkMiddleware)),
);

export type InferredStore = typeof store;

type Props = {
  children: ReactNode;
};
export function StoreProvider(props: Props): JSX.Element {
  const {children} = props;
  return <Provider store={store}>{children}</Provider>;
}

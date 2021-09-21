import { AppRegistry } from 'react-native';
import React from 'react';
import App from './App';
import { name as appName } from './app.json';
import { StoreProvider } from './store/provider';

const RNRedux = () => (
  <StoreProvider>
    <App />
  </StoreProvider>
);

AppRegistry.registerComponent(appName, () => RNRedux);

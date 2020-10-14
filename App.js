import React, { Component } from 'react';
import { NativeModules, Platform, AppState, StatusBar } from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
import { store } from './src/Redux/Store';
import { StackNavigator } from './src/Navigation/RootNavigator';

type Props = {};

console.disableYellowBox = true;

export default class App extends Component<Props> {

  render() {
    return (
      <StoreProvider store={store}>
        {/* <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0)" animated barStyle={'dark-content'} /> */}
        <StackNavigator />
      </StoreProvider>
    );
  }

}

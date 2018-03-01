import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider, connect } from "react-redux";
import PropTypes from 'prop-types';
import { Font } from 'expo';

import getStore from './src/Store';
import AppScreen from './src/Screens/AppScreen.js'
import LandingScreen from './src/Screens/LandingScreen.js'

import { Header, CryptoContainer, BottomNav } from './src/Components';

import { StackNavigator, addNavigationHelpers } from "react-navigation";

import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers'


const AppNavigator = StackNavigator({
  Home: { screen: LandingScreen },
  App: { screen: AppScreen }
})
const navReducer = (state, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state);
    return newState || state;
};
const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);
const addListener = createReduxBoundAddListener("root");

@connect(state => ({
    nav: state.nav
}))
class AppWithNavigationState extends Component {
  render() {
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
          addListener
        })}
      />
    );
  }
}

const store = getStore(navReducer);
















export default class App extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  state = { fontsLoaded: false }

  async componentWillMount() {
    await Font.loadAsync({
      'MaterialIcons-Regular': require('./assets/fonts/MaterialIcons-Regular.ttf'),
      'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
      'Roboto-BlackItalic': require('./assets/fonts/Roboto-BlackItalic.ttf'),
      'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
      'Roboto-BoldItalic': require('./assets/fonts/Roboto-BoldItalic.ttf'),
      'Roboto-Italic': require('./assets/fonts/Roboto-Italic.ttf'),
      'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
      'Roboto-LightItalic': require('./assets/fonts/Roboto-LightItalic.ttf'),
      'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
      'Roboto-MediumItalic': require('./assets/fonts/Roboto-MediumItalic.ttf'),
      'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
      'Roboto-Thin': require('./assets/fonts/Roboto-Thin.ttf'),
      'Roboto-ThinItalic': require('./assets/fonts/Roboto-ThinItalic.ttf'),
    })

    this.setState({ fontsLoaded: true })
  }

  render() {
    return (
      <Provider store={store}>
        {this.state.fontsLoaded ?
          <AppWithNavigationState /> :
          <View />
        }
      </Provider>
    );
  }
}

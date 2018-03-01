import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';
import { Header, CryptoContainer, BottomNav } from '../Components';
import { LinearGradient } from 'expo';
import { Paper, Body1, gu } from 'carbon-ui'

export default class AppScreen extends Component {
  static navigationOptions = {
    title: 'Statsu',
    header: null
  };
  render() {
    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}>
            <Header/>
              <CryptoContainer />
            <BottomNav />
        </View>
    );
  }
}

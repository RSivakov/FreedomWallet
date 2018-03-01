import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, Text } from 'react-native';
import { Header, CryptoContainer, BottomNav } from '../Components';
import { LinearGradient } from 'expo';
import { Paper, Body1, gu, RaisedButton, Headline, FlatButton, themes } from 'carbon-ui'
import merge from 'lodash/merge'

const theme = merge(themes.light, {
  colors: {
    primary: '#fff',
    // And any of the other colors in themes.light
  },
})
export default class LandingScreen extends Component {
  static navigationOptions = {
    title: 'Landing',
    header: null
  };
  render() {
    return (
        <View style={styles.container}>
        <LinearGradient
            colors={['#ee0979', '#ff6a00']}
            start={[0, 1]}
            end={[1, 0]}
            style={{flex:1}}>
            <View style={{flex:0.5,justifyContent:'flex-start',alignItems:'center',paddingTop:155,paddingBottom:125}}>
              <Headline style={{color:'#fff',fontSize:34}}>FreedomWallet</Headline>
              <Text style={{color:'#fff',padding:20,marginBottom:60,fontSize:10}}>Banking has never been simpler</Text>
            </View>
            <RaisedButton style={{backgroundColor:'#FF5722',height:65,margin:20,marginLeft:30,marginRight:30}}>Create New Wallet</RaisedButton>
            <FlatButton  theme={theme} style={{height:65,margin:20,marginLeft:30,marginRight:30}}>Recover Wallet</FlatButton >
          </LinearGradient>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  }
});

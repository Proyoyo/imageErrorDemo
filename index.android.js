/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class imageErrorDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <Image source={require('./assets/jakiro_full.png')} style={{width: 40, height: 40}}
            onLoad = {(event) => {console.log("LOADED");}}
            onError = {(event) => {console.log("ERROR");console.log(event);}}
            />
        <Image source={require('./assets/lich_full.png')} style={{width: 40, height: 40}}
            onLoad = {(event) => {console.log("LOADED");}}
            onError = {(event) => {console.log("ERROR");console.log(event);}}
            />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('imageErrorDemo', () => imageErrorDemo);

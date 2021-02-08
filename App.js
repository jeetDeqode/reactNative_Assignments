/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {createAppContainer} from 'react-navigation'; 
import {createStackNavigator} from 'react-navigation-stack';

import Dashboard from "./Screens/Dashboard";
import Login from "./Screens/Login"
import Home from "./Screens/Homescreen"

const AppNavigator = createStackNavigator({
  Dashboard: {
    screen: Dashboard
  },
  Login: {
    screen: Login
  },
  Home: {
    screen: Home
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
